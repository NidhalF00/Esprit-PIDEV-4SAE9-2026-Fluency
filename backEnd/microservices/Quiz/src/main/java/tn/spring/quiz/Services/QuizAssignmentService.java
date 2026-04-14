package tn.spring.quiz.Services;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;
import tn.spring.quiz.DTO.AssignQuizRequest;
import tn.spring.quiz.DTO.AssignedQuizResponse;
import tn.spring.quiz.Models.Quiz;
import tn.spring.quiz.Models.QuizAssignment;
import tn.spring.quiz.Repositories.QuizAssignmentRepository;
import tn.spring.quiz.Repositories.QuizRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class QuizAssignmentService {

    private final QuizAssignmentRepository quizAssignmentRepository;
    private final QuizRepository quizRepository;

    @Transactional
    public QuizAssignment assignQuiz(AssignQuizRequest request) {
        if (request == null || request.getQuizId() == null || request.getStudentId() == null || request.getTutorId() == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "quizId, studentId and tutorId are required");
        }

        Quiz quiz = quizRepository.findById(request.getQuizId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Quiz not found"));

        boolean alreadyAssigned = quizAssignmentRepository.existsByQuiz_IdAndStudentId(request.getQuizId(), request.getStudentId());
        if (alreadyAssigned) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Quiz already assigned to this student");
        }

        QuizAssignment assignment = new QuizAssignment();
        assignment.setQuiz(quiz);
        assignment.setStudentId(request.getStudentId());
        assignment.setTutorId(request.getTutorId());
        assignment.setAssignedAt(LocalDateTime.now());

        return quizAssignmentRepository.save(assignment);
    }

    @Transactional(readOnly = true)
    public List<AssignedQuizResponse> getAssignedQuizzesByStudent(UUID studentId) {
        if (studentId == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "studentId is required");
        }

        return quizAssignmentRepository.findByStudentIdOrderByAssignedAtDesc(studentId)
                .stream()
                .map(assignment -> AssignedQuizResponse.builder()
                        .quizId(assignment.getQuiz().getId())
                        .title(assignment.getQuiz().getTitle())
                        .passingScore(assignment.getQuiz().getPassingScore())
                        .courseId(
                                assignment.getQuiz().getCourse() != null
                                        ? assignment.getQuiz().getCourse().getCourseid()
                                        : null
                        )
                        .assignedAt(assignment.getAssignedAt())
                        .build()
                )
                .toList();
    }
}
