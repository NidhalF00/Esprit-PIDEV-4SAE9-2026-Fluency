package tn.spring.quiz.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;
import tn.spring.quiz.Models.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    @Transactional
    void deleteAllByQuiz_Id(Long quizId);
}
