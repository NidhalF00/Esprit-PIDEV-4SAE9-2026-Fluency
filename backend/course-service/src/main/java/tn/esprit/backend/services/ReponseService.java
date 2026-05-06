package tn.esprit.backend.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.esprit.backend.Entity.Question;
import tn.esprit.backend.Entity.Reponse;
import tn.esprit.backend.Repository.QuestionRepository;
import tn.esprit.backend.Repository.ReponseRepository;
import tn.esprit.backend.exception.ResourceNotFoundException;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class ReponseService {

    private final ReponseRepository reponseRepository;
    private final QuestionRepository questionRepository;

    public List<Reponse> getAll() {
        return reponseRepository.findAll();
    }

    public List<Reponse> getByQuestionId(Long questionId) {
        return reponseRepository.findByQuestion_Id(questionId);
    }

    public Reponse getById(Long id) {
        return reponseRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Réponse introuvable avec l'id : " + id));
    }

    public Reponse create(Reponse reponse, Long questionId) {
        Question question = questionRepository.findById(questionId)
                .orElseThrow(() -> new ResourceNotFoundException("Question introuvable avec l'id : " + questionId));
        reponse.setId(null);
        reponse.setQuestion(question);
        question.getReponses().add(reponse);
        return reponseRepository.save(reponse);
    }

    public Reponse update(Long id, Reponse reponse, Long questionId) {
        Reponse existing = getById(id);
        existing.setTexte(reponse.getTexte());
        existing.setCorrecte(reponse.getCorrecte());

        if (questionId != null) {
            Question newQuestion = questionRepository.findById(questionId)
                    .orElseThrow(() -> new ResourceNotFoundException("Question introuvable avec l'id : " + questionId));
            Question oldQuestion = existing.getQuestion();
            if (oldQuestion != null && !oldQuestion.getId().equals(newQuestion.getId())) {
                oldQuestion.getReponses().remove(existing);
            }
            existing.setQuestion(newQuestion);
            newQuestion.getReponses().add(existing);
        }

        return reponseRepository.save(existing);
    }

    public void delete(Long id) {
        Reponse existing = getById(id);
        Question question = existing.getQuestion();
        if (question != null) {
            question.getReponses().remove(existing);
        }
        reponseRepository.delete(existing);
    }
}
