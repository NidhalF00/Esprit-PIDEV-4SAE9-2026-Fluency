package tn.esprit.backend.services;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.esprit.backend.Entity.Question;
import tn.esprit.backend.Entity.Quiz;
import tn.esprit.backend.Entity.QuizAnswerInference;
import tn.esprit.backend.Entity.Reponse;
import tn.esprit.backend.Repository.QuizAnswerInferenceRepository;
import tn.esprit.backend.Repository.QuizRepository;
import tn.esprit.backend.Repository.ReponseRepository;
import tn.esprit.backend.dto.AnswerSubmissionMetaDTO;
import tn.esprit.backend.dto.PredictInferenceRequest;
import tn.esprit.backend.dto.PredictInferenceResponse;
import tn.esprit.backend.dto.QuizInferenceResultDTO;
import tn.esprit.backend.dto.QuizResultDTO;
import tn.esprit.backend.exception.ResourceNotFoundException;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Correction automatique d'un quiz à partir des réponses de l'étudiant.
 * Si le quiz est réussi et qu'un {@code userId} est fourni, délègue la création du certificat à {@link CertificatService}.
 */
@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class QuizCorrectionService {

    private final QuizScoreService quizScoreService;
    private final CertificatService certificatService;
    private final QuizRepository quizRepository;
    private final QuizAnswerInferenceRepository quizAnswerInferenceRepository;
    private final AnswerInferenceService answerInferenceService;
    private final ReponseRepository reponseRepository;

    /**
     * Corrige le quiz puis, si réussi, tente d'attribuer un certificat (sans doublon user/quiz).
     *
     * @param quizId            identifiant du quiz
     * @param reponsesEtudiant  questionId → reponseId choisie
     * @param userId            étudiant (optionnel ; requis pour le certificat)
     */
    public QuizResultDTO corrigerQuiz(
            Long quizId,
            Map<Long, Long> reponsesEtudiant,
            Map<Long, AnswerSubmissionMetaDTO> reponsesMeta,
            Long userId
    ) {
        QuizScoreService.DetailScore detail = quizScoreService.evaluerQuiz(quizId, reponsesEtudiant);
        double pourcentage = quizScoreService.calculerPourcentage(detail.getScoreObtenu(), detail.getScoreMax());
        boolean valide = quizScoreService.estQuizReussi(pourcentage);

        QuizResultDTO resultat = new QuizResultDTO(
                detail.getQuizId(),
                detail.getScoreObtenu(),
                detail.getScoreMax(),
                detail.getTotalQuestions(),
                detail.getBonnesReponses(),
                detail.getMauvaisesReponses(),
                pourcentage,
                valide
        );

        List<QuizInferenceResultDTO> inferenceResults =
                inferAndPersistPerQuestion(quizId, userId, reponsesEtudiant, reponsesMeta);
        resultat.setInferenceResults(inferenceResults);

        certificatService.appliquerCertificatSiReussi(resultat, userId);
        return resultat;
    }

    /**
     * Convertit la map JSON (clés en String) en Map&lt;Long, Long&gt;.
     */
    public static Map<Long, Long> toReponsesMap(Map<String, Long> raw) {
        Map<Long, Long> out = new HashMap<>();
        if (raw == null) {
            return out;
        }
        for (Map.Entry<String, Long> e : raw.entrySet()) {
            if (e.getKey() == null || e.getValue() == null) {
                continue;
            }
            try {
                out.put(Long.parseLong(e.getKey().trim()), e.getValue());
            } catch (NumberFormatException ignored) {
                // clé invalide ignorée
            }
        }
        return out;
    }

    public static Map<Long, AnswerSubmissionMetaDTO> toMetaMap(Map<String, AnswerSubmissionMetaDTO> raw) {
        Map<Long, AnswerSubmissionMetaDTO> out = new HashMap<>();
        if (raw == null) {
            return out;
        }
        for (Map.Entry<String, AnswerSubmissionMetaDTO> e : raw.entrySet()) {
            if (e.getKey() == null || e.getValue() == null) {
                continue;
            }
            try {
                out.put(Long.parseLong(e.getKey().trim()), e.getValue());
            } catch (NumberFormatException ignored) {
                // clé invalide ignorée
            }
        }
        return out;
    }

    private List<QuizInferenceResultDTO> inferAndPersistPerQuestion(
            Long quizId,
            Long userId,
            Map<Long, Long> reponsesEtudiant,
            Map<Long, AnswerSubmissionMetaDTO> reponsesMeta
    ) {
        Quiz quiz = quizRepository.findByIdWithQuestions(quizId)
                .orElseThrow(() -> new ResourceNotFoundException("Quiz introuvable avec l'id : " + quizId));

        if (userId != null) {
            quizAnswerInferenceRepository.deleteByQuizIdAndUserId(quizId, userId);
        } else {
            quizAnswerInferenceRepository.deleteByQuizIdAndUserIdIsNull(quizId);
        }

        List<QuizAnswerInference> persisted = new ArrayList<>();

        for (Question question : quiz.getQuestions()) {
            Long selectedReponseId = reponsesEtudiant != null ? reponsesEtudiant.get(question.getId()) : null;
            Reponse selectedReponse = selectedReponseId != null
                    ? reponseRepository.findById(selectedReponseId).orElse(null)
                    : null;

            double maxPoints = question.getPoints() != null ? question.getPoints() : 0.0;
            double scoreAwarded = (selectedReponse != null && Boolean.TRUE.equals(selectedReponse.getCorrecte()))
                    ? maxPoints
                    : 0.0;

            AnswerSubmissionMetaDTO meta = reponsesMeta != null ? reponsesMeta.get(question.getId()) : null;

            PredictInferenceRequest request = new PredictInferenceRequest();
            request.setQuestionType(question.getTypeQuestion() != null ? question.getTypeQuestion() : "MCQ");
            request.setTimeSpentSeconds(meta != null ? meta.getTimeSpentSeconds() : null);
            request.setAnswerChanges(meta != null ? meta.getAnswerChanges() : null);
            request.setMaxPoints(maxPoints);
            request.setScoreAwarded(scoreAwarded);
            request.setFullyCorrect(scoreAwarded >= maxPoints && maxPoints > 0);
            request.setTextAnswerLength(resolveTextAnswerLength(selectedReponse, meta));

            PredictInferenceResponse inference = answerInferenceService.inferWithFallback(request, quizId, question.getId());

            QuizAnswerInference row = new QuizAnswerInference();
            row.setQuizId(quizId);
            row.setQuestionId(question.getId());
            row.setSelectedReponseId(selectedReponseId);
            row.setUserId(userId);
            row.setQuestionType(request.getQuestionType());
            row.setScoreAwarded(scoreAwarded);
            row.setMaxPoints(maxPoints);
            row.setTimeSpentSeconds(request.getTimeSpentSeconds());
            row.setAnswerChanges(request.getAnswerChanges());
            row.setInferenceLabel(inference.getLabel());
            row.setInferenceReason(inference.getReason());
            row.setInferenceConfidence(inference.getConfidence());
            row.setInferenceGeneratedAt(LocalDateTime.now());
            persisted.add(row);
        }

        List<QuizAnswerInference> saved = quizAnswerInferenceRepository.saveAll(persisted);
        saved.sort(Comparator.comparing(QuizAnswerInference::getQuestionId));
        log.info("Stored {} inference rows for quizId={}, userId={}", saved.size(), quizId, userId);
        return toInferenceResultDTOs(saved);
    }

    private int resolveTextAnswerLength(Reponse selectedReponse, AnswerSubmissionMetaDTO meta) {
        if (meta != null && meta.getTextAnswerLength() != null && meta.getTextAnswerLength() >= 0) {
            return meta.getTextAnswerLength();
        }
        if (selectedReponse != null && selectedReponse.getTexte() != null) {
            return selectedReponse.getTexte().length();
        }
        return 0;
    }

    private List<QuizInferenceResultDTO> toInferenceResultDTOs(List<QuizAnswerInference> rows) {
        List<QuizInferenceResultDTO> out = new ArrayList<>();
        for (QuizAnswerInference row : rows) {
            QuizInferenceResultDTO dto = new QuizInferenceResultDTO();
            dto.setQuestionId(row.getQuestionId());
            dto.setSelectedReponseId(row.getSelectedReponseId());
            dto.setQuestionType(row.getQuestionType());
            dto.setScoreAwarded(row.getScoreAwarded());
            dto.setMaxPoints(row.getMaxPoints());
            dto.setLabel(row.getInferenceLabel());
            dto.setReason(row.getInferenceReason());
            dto.setConfidence(row.getInferenceConfidence());
            dto.setGeneratedAt(row.getInferenceGeneratedAt());
            out.add(dto);
        }
        return out;
    }
}
