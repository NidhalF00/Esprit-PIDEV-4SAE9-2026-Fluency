package tn.esprit.backend.controller;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import tn.esprit.backend.Entity.Quiz;
import tn.esprit.backend.services.QuizService;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(MockitoExtension.class)
class QuizControllerTest {

    @InjectMocks
    QuizController quizController;

    @Mock
    private QuizService quizService;

    @Test
    void shouldReturnAllQuizzes() {
        List<Quiz> quizzesList = Arrays.asList(
                createQuiz(1L, "Quiz 1"),
                createQuiz(2L, "Quiz 2")
        );

        Mockito.when(quizService.getAll()).thenReturn(quizzesList);
        ResponseEntity<List<Quiz>> responseEntity = quizController.getAll();
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(quizzesList, responseEntity.getBody());
    }

    @Test
    void shouldReturnQuizById() {
        Quiz quiz = createQuiz(1L, "Quiz 1");

        Mockito.when(quizService.getById(1L)).thenReturn(quiz);
        ResponseEntity<Quiz> responseEntity = quizController.getById(1L);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(quiz, responseEntity.getBody());
    }

    @Test
    void shouldCreateQuiz() {
        Quiz quiz = createQuiz(null, "New Quiz");
        Quiz created = createQuiz(1L, "New Quiz");

        Mockito.when(quizService.create(Mockito.any(Quiz.class), Mockito.eq(1L))).thenReturn(created);

        ResponseEntity<Quiz> responseEntity = quizController.create(quiz, 1L);
        assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
        assertEquals(created, responseEntity.getBody());
    }

    @Test
    void shouldUpdateQuiz() {
        Quiz quiz = createQuiz(null, "Updated Quiz");
        Quiz updated = createQuiz(1L, "Updated Quiz");

        Mockito.when(quizService.update(Mockito.eq(1L), Mockito.any(Quiz.class), Mockito.eq(2L))).thenReturn(updated);

        ResponseEntity<Quiz> responseEntity = quizController.update(1L, quiz, 2L);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(updated, responseEntity.getBody());
    }

    @Test
    void shouldUpdateQuizWithoutCoursId() {
        Quiz quiz = createQuiz(null, "Updated Quiz");
        Quiz updated = createQuiz(1L, "Updated Quiz");

        Mockito.when(quizService.update(Mockito.eq(1L), Mockito.any(Quiz.class), Mockito.isNull())).thenReturn(updated);

        ResponseEntity<Quiz> responseEntity = quizController.update(1L, quiz, null);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(updated, responseEntity.getBody());
    }

    @Test
    void shouldDeleteQuiz() {
        Mockito.doNothing().when(quizService).delete(1L);
        ResponseEntity<Void> responseEntity = quizController.delete(1L);
        assertEquals(HttpStatus.NO_CONTENT, responseEntity.getStatusCode());
    }

    private Quiz createQuiz(Long id, String titre) {
        Quiz quiz = new Quiz();
        quiz.setId(id);
        quiz.setTitre(titre);
        quiz.setDescription("Description du quiz");
        quiz.setScoreMax(100.0);
        return quiz;
    }
}

