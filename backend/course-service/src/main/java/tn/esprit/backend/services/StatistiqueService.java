package tn.esprit.backend.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.esprit.backend.dto.DashboardStatsDTO;
import tn.esprit.backend.Repository.*;

/**
 * Agrégations simples pour un tableau de bord administrateur.
 */
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class StatistiqueService {

    private final ModuleRepository moduleRepository;
    private final CoursRepository coursRepository;
    private final QuizRepository quizRepository;
    private final QuestionRepository questionRepository;
    private final ReponseRepository reponseRepository;

    public long countModules() {
        return moduleRepository.count();
    }

    public long countCours() {
        return coursRepository.count();
    }

    public long countQuiz() {
        return quizRepository.count();
    }

    public long countQuestions() {
        return questionRepository.count();
    }

    public long countReponses() {
        return reponseRepository.count();
    }

    public long countQuizByModule(Long moduleId) {
        return quizRepository.countByCours_Module_Id(moduleId);
    }

    public long countQuestionsByQuiz(Long quizId) {
        return questionRepository.countByQuiz_Id(quizId);
    }

    public DashboardStatsDTO getGlobalStats() {
        double moyenne = 0.0;
        Double avg = quizRepository.averageScoreMax();
        if (avg != null) {
            moyenne = Math.round(avg * 100.0) / 100.0;
        }
        return new DashboardStatsDTO(
                countModules(),
                countCours(),
                countQuiz(),
                countQuestions(),
                countReponses(),
                moyenne
        );
    }
}
