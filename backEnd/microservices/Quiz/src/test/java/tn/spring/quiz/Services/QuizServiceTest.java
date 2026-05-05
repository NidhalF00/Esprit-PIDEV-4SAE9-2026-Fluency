package tn.spring.quiz.Services;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import tn.spring.quiz.Models.Course;
import tn.spring.quiz.Models.Quiz;
import tn.spring.quiz.Repositories.AnswerRepository;
import tn.spring.quiz.Repositories.CourseRepository;
import tn.spring.quiz.Repositories.QuestionRepository;
import tn.spring.quiz.Repositories.QuizAssignmentRepository;
import tn.spring.quiz.Repositories.QuizAttemptRepository;
import tn.spring.quiz.Repositories.QuizRepository;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertSame;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class QuizServiceTest {

    @Mock
    private QuizRepository quizRepository;

    @Mock
    private CourseRepository courseRepository;

    @Mock
    private QuestionRepository questionRepository;

    @Mock
    private AnswerRepository answerRepository;

    @Mock
    private QuizAssignmentRepository quizAssignmentRepository;

    @Mock
    private QuizAttemptRepository quizAttemptRepository;

    @InjectMocks
    private QuizService quizService;

    @Test
    void createQuiz_whenCourseExists_attachesCourseInitializesDefaultsAndSavesQuiz() {
        Long courseId = 1L;
        Course course = new Course();
        course.setCourseid(courseId);

        Quiz quizToCreate = new Quiz();
        quizToCreate.setTitle("Placement Quiz");
        quizToCreate.setPassingScore(10);
        quizToCreate.setQuestions(null);

        when(courseRepository.findById(courseId)).thenReturn(Optional.of(course));
        when(quizRepository.save(any(Quiz.class))).thenAnswer(invocation -> invocation.getArgument(0));

        Quiz savedQuiz = quizService.createQuiz(courseId, quizToCreate);

        assertSame(course, savedQuiz.getCourse());
        assertEquals(70, savedQuiz.getPassingScore());
        assertNotNull(savedQuiz.getQuestions());
        assertTrue(savedQuiz.getQuestions().isEmpty());
        assertSame(quizToCreate, savedQuiz);

        verify(courseRepository).findById(courseId);
        verify(quizRepository).save(quizToCreate);
    }
}
