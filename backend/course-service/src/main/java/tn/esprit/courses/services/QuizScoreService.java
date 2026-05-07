package tn.esprit.courses.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.esprit.courses.Entity.Question;
import tn.esprit.courses.Entity.Quiz;
import tn.esprit.courses.Entity.Reponse;
import tn.esprit.courses.Repository.QuizRepository;
import tn.esprit.courses.Repository.ReponseRepository;
import tn.esprit.courses.exception.ResourceNotFoundException;

import java.util.Map;

/**
 * Calcul de score, pourcentage et réussite pour un quiz (logique réutilisable).
 */
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class QuizScoreService {

    /** Pourcentage minimum pour considérer le quiz comme validé. */
    public static final double SEUIL_REUSSITE_POURCENT = 50.0;

    private final QuizRepository quizRepository;
    private final ReponseRepository reponseRepository;

    /**
     * Détail du calcul : points obtenus, plafond, bonnes / mauvaises réponses.
     */
    public DetailScore evaluerQuiz(Long quizId, Map<Long, Long> reponsesEtudiant) {
        Quiz quiz = quizRepository.findByIdWithQuestions(quizId)
                .orElseThrow(() -> new ResourceNotFoundException("Quiz introuvable avec l'id : " + quizId));

        double scoreObtenu = 0;
        int bonnes = 0;
        int mauvaises = 0;
        int total = quiz.getQuestions().size();

        double scoreMax = quiz.getQuestions().stream()
                .mapToDouble(q -> q.getPoints() != null ? q.getPoints() : 0.0)
                .sum();
        if (scoreMax <= 0 && quiz.getScoreMax() != null && quiz.getScoreMax() > 0) {
            scoreMax = quiz.getScoreMax();
        }
        if (scoreMax <= 0) {
            scoreMax = 1.0;
        }

        for (Question question : quiz.getQuestions()) {
            Long reponseChoisieId = reponsesEtudiant != null ? reponsesEtudiant.get(question.getId()) : null;
            if (reponseChoisieId == null) {
                mauvaises++;
                continue;
            }
            Reponse reponse = reponseRepository.findById(reponseChoisieId).orElse(null);
            if (reponse == null
                    || reponse.getQuestion() == null
                    || !reponse.getQuestion().getId().equals(question.getId())) {
                mauvaises++;
                continue;
            }
            if (Boolean.TRUE.equals(reponse.getCorrecte())) {
                bonnes++;
                scoreObtenu += question.getPoints() != null ? question.getPoints() : 0.0;
            } else {
                mauvaises++;
            }
        }

        return new DetailScore(quizId, scoreObtenu, scoreMax, total, bonnes, mauvaises);
    }

    public double calculerScore(Long quizId, Map<Long, Long> reponsesEtudiant) {
        return evaluerQuiz(quizId, reponsesEtudiant).scoreObtenu;
    }

    public double calculerPourcentage(double scoreObtenu, double scoreMax) {
        if (scoreMax <= 0) {
            return 0.0;
        }
        return Math.round((scoreObtenu * 10000.0 / scoreMax)) / 100.0;
    }

    public boolean estQuizReussi(double pourcentage) {
        return pourcentage >= SEUIL_REUSSITE_POURCENT;
    }

    public static class DetailScore {
        private final Long quizId;
        private final double scoreObtenu;
        private final double scoreMax;
        private final int totalQuestions;
        private final int bonnesReponses;
        private final int mauvaisesReponses;

        public DetailScore(Long quizId, double scoreObtenu, double scoreMax,
                           int totalQuestions, int bonnesReponses, int mauvaisesReponses) {
            this.quizId = quizId;
            this.scoreObtenu = scoreObtenu;
            this.scoreMax = scoreMax;
            this.totalQuestions = totalQuestions;
            this.bonnesReponses = bonnesReponses;
            this.mauvaisesReponses = mauvaisesReponses;
        }

        public Long getQuizId() {
            return quizId;
        }

        public double getScoreObtenu() {
            return scoreObtenu;
        }

        public double getScoreMax() {
            return scoreMax;
        }

        public int getTotalQuestions() {
            return totalQuestions;
        }

        public int getBonnesReponses() {
            return bonnesReponses;
        }

        public int getMauvaisesReponses() {
            return mauvaisesReponses;
        }
    }
}
