package tn.esprit.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import tn.esprit.backend.Entity.QuizAnswerInference;

import java.util.List;

@RepositoryRestResource(exported = false)
public interface QuizAnswerInferenceRepository extends JpaRepository<QuizAnswerInference, Long> {

    void deleteByQuizIdAndUserId(Long quizId, Long userId);

    void deleteByQuizIdAndUserIdIsNull(Long quizId);

    List<QuizAnswerInference> findByQuizIdAndUserIdOrderByQuestionIdAsc(Long quizId, Long userId);

    List<QuizAnswerInference> findByQuizIdAndUserIdIsNullOrderByQuestionIdAsc(Long quizId);
}
