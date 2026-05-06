package tn.esprit.backend.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.esprit.backend.dto.QuizResultDTO;

import java.util.HashMap;
import java.util.Map;

/**
 * Correction automatique d'un quiz à partir des réponses de l'étudiant.
 * Si le quiz est réussi et qu'un {@code userId} est fourni, délègue la création du certificat à {@link CertificatService}.
 */
@Service
@RequiredArgsConstructor
@Transactional
public class QuizCorrectionService {

    private final QuizScoreService quizScoreService;
    private final CertificatService certificatService;

    /**
     * Corrige le quiz puis, si réussi, tente d'attribuer un certificat (sans doublon user/quiz).
     *
     * @param quizId            identifiant du quiz
     * @param reponsesEtudiant  questionId → reponseId choisie
     * @param userId            étudiant (optionnel ; requis pour le certificat)
     */
    public QuizResultDTO corrigerQuiz(Long quizId, Map<Long, Long> reponsesEtudiant, Long userId, String userName, String userEmail) {
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

        certificatService.appliquerCertificatSiReussi(resultat, userId, userName, userEmail);
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
}
