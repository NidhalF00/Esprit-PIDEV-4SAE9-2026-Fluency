package tn.spring.quiz.Services;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import tn.spring.quiz.DTO.AssignQuizRequest;
import tn.spring.quiz.DTO.AssignedQuizResponse;
import tn.spring.quiz.Models.Course;
import tn.spring.quiz.Models.Quiz;
import tn.spring.quiz.Models.QuizAssignment;
import tn.spring.quiz.Repositories.QuizAssignmentRepository;
import tn.spring.quiz.Repositories.QuizRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertSame;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class QuizAssignmentServiceTest {

    @Mock
    private QuizAssignmentRepository quizAssignmentRepository;

    @Mock
    private QuizRepository quizRepository;

    @InjectMocks
    private QuizAssignmentService quizAssignmentService;

    @Test
    void assignQuiz_whenRequestIsNull_throwsBadRequest() {
        ResponseStatusException exception = assertThrows(
                ResponseStatusException.class,
                () -> quizAssignmentService.assignQuiz(null)
        );

        assertEquals(HttpStatus.BAD_REQUEST, exception.getStatusCode());
    }

    @Test
    void assignQuiz_whenQuizDoesNotExist_throwsNotFound() {
        AssignQuizRequest request = validRequest();
        when(quizRepository.findById(request.getQuizId())).thenReturn(Optional.empty());

        ResponseStatusException exception = assertThrows(
                ResponseStatusException.class,
                () -> quizAssignmentService.assignQuiz(request)
        );

        assertEquals(HttpStatus.NOT_FOUND, exception.getStatusCode());
        verify(quizAssignmentRepository, never()).save(any(QuizAssignment.class));
    }

    @Test
    void assignQuiz_whenAlreadyAssigned_throwsConflict() {
        AssignQuizRequest request = validRequest();
        Quiz quiz = new Quiz();
        quiz.setId(request.getQuizId());

        when(quizRepository.findById(request.getQuizId())).thenReturn(Optional.of(quiz));
        when(quizAssignmentRepository.existsByQuiz_IdAndStudentId(request.getQuizId(), request.getStudentId()))
                .thenReturn(true);

        ResponseStatusException exception = assertThrows(
                ResponseStatusException.class,
                () -> quizAssignmentService.assignQuiz(request)
        );

        assertEquals(HttpStatus.CONFLICT, exception.getStatusCode());
        verify(quizAssignmentRepository, never()).save(any(QuizAssignment.class));
    }

    @Test
    void assignQuiz_whenValidRequest_savesAssignment() {
        AssignQuizRequest request = validRequest();
        Quiz quiz = new Quiz();
        quiz.setId(request.getQuizId());

        when(quizRepository.findById(request.getQuizId())).thenReturn(Optional.of(quiz));
        when(quizAssignmentRepository.existsByQuiz_IdAndStudentId(request.getQuizId(), request.getStudentId()))
                .thenReturn(false);
        when(quizAssignmentRepository.save(any(QuizAssignment.class)))
                .thenAnswer(invocation -> invocation.getArgument(0));

        QuizAssignment savedAssignment = quizAssignmentService.assignQuiz(request);

        assertSame(quiz, savedAssignment.getQuiz());
        assertEquals(request.getStudentId(), savedAssignment.getStudentId());
        assertEquals(request.getTutorId(), savedAssignment.getTutorId());
        assertNotNull(savedAssignment.getAssignedAt());

        ArgumentCaptor<QuizAssignment> assignmentCaptor = ArgumentCaptor.forClass(QuizAssignment.class);
        verify(quizAssignmentRepository).save(assignmentCaptor.capture());

        QuizAssignment assignmentPassedToSave = assignmentCaptor.getValue();
        assertSame(quiz, assignmentPassedToSave.getQuiz());
        assertEquals(request.getStudentId(), assignmentPassedToSave.getStudentId());
        assertEquals(request.getTutorId(), assignmentPassedToSave.getTutorId());
        assertNotNull(assignmentPassedToSave.getAssignedAt());
    }

    @Test
    void getAssignedQuizzesByStudent_whenStudentIdIsNull_throwsBadRequest() {
        ResponseStatusException exception = assertThrows(
                ResponseStatusException.class,
                () -> quizAssignmentService.getAssignedQuizzesByStudent(null)
        );

        assertEquals(HttpStatus.BAD_REQUEST, exception.getStatusCode());
    }

    @Test
    void getAssignedQuizzesByStudent_whenAssignmentsExist_returnsResponseList() {
        UUID studentId = UUID.randomUUID();
        LocalDateTime assignedAt = LocalDateTime.now();

        Course course = new Course();
        course.setCourseid(12L);

        Quiz quiz = new Quiz();
        quiz.setId(5L);
        quiz.setTitle("Grammar Quiz");
        quiz.setPassingScore(70);
        quiz.setCourse(course);

        QuizAssignment assignment = new QuizAssignment();
        assignment.setQuiz(quiz);
        assignment.setStudentId(studentId);
        assignment.setTutorId(UUID.randomUUID());
        assignment.setAssignedAt(assignedAt);

        when(quizAssignmentRepository.findByStudentIdOrderByAssignedAtDesc(studentId))
                .thenReturn(List.of(assignment));

        List<AssignedQuizResponse> responses = quizAssignmentService.getAssignedQuizzesByStudent(studentId);

        assertEquals(1, responses.size());

        AssignedQuizResponse response = responses.get(0);
        assertEquals(quiz.getId(), response.getQuizId());
        assertEquals(quiz.getTitle(), response.getTitle());
        assertEquals(quiz.getPassingScore(), response.getPassingScore());
        assertEquals(course.getCourseid(), response.getCourseId());
        assertEquals(assignedAt, response.getAssignedAt());
    }

    private AssignQuizRequest validRequest() {
        AssignQuizRequest request = new AssignQuizRequest();
        request.setQuizId(1L);
        request.setStudentId(UUID.randomUUID());
        request.setTutorId(UUID.randomUUID());
        return request;
    }
}
