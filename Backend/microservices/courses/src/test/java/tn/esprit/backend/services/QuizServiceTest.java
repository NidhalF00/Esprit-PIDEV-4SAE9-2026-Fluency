package tn.esprit.backend.services;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import tn.esprit.backend.Entity.Cours;
import tn.esprit.backend.Entity.Quiz;
import tn.esprit.backend.Repository.CoursRepository;
import tn.esprit.backend.Repository.QuizRepository;
import tn.esprit.backend.exception.ResourceNotFoundException;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class QuizServiceTest {

    @InjectMocks
    QuizService quizService;

    @Mock
    private QuizRepository quizRepository;

    @Mock
    private CoursRepository coursRepository;

    @Test
    void shouldGetAllQuizzes() {
        List<Quiz> quizzesList = Arrays.asList(
                createQuiz(1L, "Quiz 1"),
                createQuiz(2L, "Quiz 2")
        );

        when(quizRepository.findAll()).thenReturn(quizzesList);

        List<Quiz> result = quizService.getAll();

        assertEquals(2, result.size());
        assertEquals("Quiz 1", result.get(0).getTitre());
        assertEquals("Quiz 2", result.get(1).getTitre());
        verify(quizRepository).findAll();
    }

    @Test
    void shouldGetQuizById() {
        Quiz quiz = createQuiz(1L, "Quiz 1");

        when(quizRepository.findById(1L)).thenReturn(Optional.of(quiz));

        Quiz result = quizService.getById(1L);

        assertNotNull(result);
        assertEquals(1L, result.getId());
        assertEquals("Quiz 1", result.getTitre());
        verify(quizRepository).findById(1L);
    }

    @Test
    void shouldThrowExceptionWhenQuizNotExists() {
        when(quizRepository.findById(1L)).thenReturn(Optional.empty());

        ResourceNotFoundException exception = assertThrows(ResourceNotFoundException.class, () -> {
            quizService.getById(1L);
        });

        assertTrue(exception.getMessage().contains("Quiz introuvable"));
        verify(quizRepository).findById(1L);
    }

    @Test
    void shouldCreateQuiz() {
        Quiz quiz = createQuiz(null, "New Quiz");
        Cours cours = createCours(1L, "Cours 1");
        cours.setQuizzes(new ArrayList<>());
        Quiz saved = createQuiz(1L, "New Quiz");
        saved.setCours(cours);

        when(coursRepository.findById(1L)).thenReturn(Optional.of(cours));
        when(quizRepository.save(any(Quiz.class))).thenReturn(saved);

        Quiz result = quizService.create(quiz, 1L);

        assertNotNull(result);
        assertEquals(1L, result.getId());
        assertEquals("New Quiz", result.getTitre());
        assertEquals(cours, result.getCours());
        verify(coursRepository).findById(1L);
        verify(quizRepository).save(any(Quiz.class));
    }

    @Test
    void shouldThrowExceptionWhenCoursNotFoundForCreate() {
        Quiz quiz = createQuiz(null, "New Quiz");

        when(coursRepository.findById(1L)).thenReturn(Optional.empty());

        ResourceNotFoundException exception = assertThrows(ResourceNotFoundException.class, () -> {
            quizService.create(quiz, 1L);
        });

        assertTrue(exception.getMessage().contains("Cours introuvable"));
        verify(quizRepository, never()).save(any());
    }

    @Test
    void shouldUpdateQuiz() {
        Quiz existing = createQuiz(1L, "Old Titre");
        existing.setCours(createCours(1L, "Cours 1"));
        Quiz updateData = createQuiz(null, "New Titre");
        updateData.setDescription("New Description");
        updateData.setScoreMax(75.0);

        when(quizRepository.findById(1L)).thenReturn(Optional.of(existing));
        when(quizRepository.save(any(Quiz.class))).thenReturn(existing);

        Quiz result = quizService.update(1L, updateData, null);

        assertEquals("New Titre", result.getTitre());
        assertEquals("New Description", result.getDescription());
        assertEquals(75.0, result.getScoreMax());
        verify(quizRepository).findById(1L);
        verify(quizRepository).save(any(Quiz.class));
    }

    @Test
    void shouldUpdateQuizWithNewCours() {
        Quiz existing = createQuiz(1L, "Quiz");
        Cours oldCours = createCours(1L, "Old Cours");
        Cours newCours = createCours(2L, "New Cours");
        oldCours.setQuizzes(new ArrayList<>(Arrays.asList(existing)));
        newCours.setQuizzes(new ArrayList<>());
        existing.setCours(oldCours);

        Quiz updateData = createQuiz(null, "Quiz");

        when(quizRepository.findById(1L)).thenReturn(Optional.of(existing));
        when(coursRepository.findById(2L)).thenReturn(Optional.of(newCours));
        when(quizRepository.save(any(Quiz.class))).thenReturn(existing);

        Quiz result = quizService.update(1L, updateData, 2L);

        assertEquals(newCours, result.getCours());
        verify(quizRepository).findById(1L);
        verify(coursRepository).findById(2L);
        verify(quizRepository).save(any(Quiz.class));
    }

    @Test
    void shouldDeleteQuiz() {
        Quiz existing = createQuiz(1L, "Quiz");
        Cours cours = createCours(1L, "Cours 1");
        cours.setQuizzes(new ArrayList<>(Arrays.asList(existing)));
        existing.setCours(cours);

        when(quizRepository.findById(1L)).thenReturn(Optional.of(existing));

        quizService.delete(1L);

        verify(quizRepository).findById(1L);
        verify(quizRepository).delete(existing);
    }

    @Test
    void shouldThrowExceptionWhenDeletingNonExistentQuiz() {
        when(quizRepository.findById(1L)).thenReturn(Optional.empty());

        ResourceNotFoundException exception = assertThrows(ResourceNotFoundException.class, () -> {
            quizService.delete(1L);
        });

        assertTrue(exception.getMessage().contains("Quiz introuvable"));
        verify(quizRepository, never()).delete(any());
    }

    private Quiz createQuiz(Long id, String titre) {
        Quiz quiz = new Quiz();
        quiz.setId(id);
        quiz.setTitre(titre);
        quiz.setDescription("Description du quiz");
        quiz.setScoreMax(100.0);
        return quiz;
    }

    private Cours createCours(Long id, String titre) {
        Cours cours = new Cours();
        cours.setId(id);
        cours.setTitre(titre);
        return cours;
    }
}
