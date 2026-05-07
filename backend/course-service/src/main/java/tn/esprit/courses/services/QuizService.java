package tn.esprit.courses.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.esprit.courses.Entity.Cours;
import tn.esprit.courses.Entity.Quiz;
import tn.esprit.courses.Repository.CoursRepository;
import tn.esprit.courses.Repository.QuizRepository;
import tn.esprit.courses.exception.ResourceNotFoundException;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class QuizService {

    private final QuizRepository quizRepository;
    private final CoursRepository coursRepository;

    public List<Quiz> getAll() {
        return quizRepository.findAll();
    }

    public Quiz getById(Long id) {
        return quizRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Quiz introuvable avec l'id : " + id));
    }

    public Quiz create(Quiz quiz, Long coursId) {
        Cours cours = coursRepository.findById(coursId)
                .orElseThrow(() -> new ResourceNotFoundException("Cours introuvable avec l'id : " + coursId));
        quiz.setId(null);
        quiz.setCours(cours);
        cours.getQuizzes().add(quiz);
        return quizRepository.save(quiz);
    }

    public Quiz update(Long id, Quiz quiz, Long coursId) {
        Quiz existing = getById(id);
        existing.setTitre(quiz.getTitre());
        existing.setDescription(quiz.getDescription());
        existing.setScoreMax(quiz.getScoreMax());
        if (quiz.getActif() != null) existing.setActif(quiz.getActif());

        if (coursId != null) {
            Cours newCours = coursRepository.findById(coursId)
                    .orElseThrow(() -> new ResourceNotFoundException("Cours introuvable avec l'id : " + coursId));
            Cours oldCours = existing.getCours();
            if (oldCours != null && !oldCours.getId().equals(newCours.getId())) {
                oldCours.getQuizzes().remove(existing);
            }
            existing.setCours(newCours);
            newCours.getQuizzes().add(existing);
        }

        return quizRepository.save(existing);
    }

    public void delete(Long id) {
        Quiz existing = getById(id);
        Cours cours = existing.getCours();
        if (cours != null) {
            cours.getQuizzes().remove(existing);
        }
        quizRepository.delete(existing);
    }
}
