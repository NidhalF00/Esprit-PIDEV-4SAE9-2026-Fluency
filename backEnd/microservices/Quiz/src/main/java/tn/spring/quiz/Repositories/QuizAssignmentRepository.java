package tn.spring.quiz.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.spring.quiz.Models.QuizAssignment;

import java.util.List;
import java.util.UUID;

public interface QuizAssignmentRepository extends JpaRepository<QuizAssignment, Long> {
    boolean existsByQuiz_IdAndStudentId(Long quizId, UUID studentId);
    List<QuizAssignment> findByStudentIdOrderByAssignedAtDesc(UUID studentId);
}
