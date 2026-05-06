package tn.esprit.backend.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.esprit.backend.Entity.Question;
import tn.esprit.backend.Entity.Quiz;
import tn.esprit.backend.Repository.QuestionRepository;
import tn.esprit.backend.Repository.QuizRepository;
import tn.esprit.backend.exception.ResourceNotFoundException;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class QuestionService {

    private final QuestionRepository questionRepository;
    private final QuizRepository quizRepository;

    public List<Question> getAll() {
        return questionRepository.findAll();
    }

    public List<Question> getByQuizId(Long quizId) {
        return questionRepository.findByQuiz_Id(quizId);
    }

    public Question getById(Long id) {
        return questionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Question introuvable avec l'id : " + id));
    }

    public Question create(Question question, Long quizId) {
        Quiz quiz = quizRepository.findById(quizId)
                .orElseThrow(() -> new ResourceNotFoundException("Quiz introuvable avec l'id : " + quizId));
        question.setId(null);
        question.setQuiz(quiz);
        quiz.getQuestions().add(question);
        return questionRepository.save(question);
    }

    public Question update(Long id, Question question, Long quizId) {
        Question existing = getById(id);
        existing.setEnonce(question.getEnonce());
        existing.setTypeQuestion(question.getTypeQuestion());
        existing.setPoints(question.getPoints());

        if (quizId != null) {
            Quiz newQuiz = quizRepository.findById(quizId)
                    .orElseThrow(() -> new ResourceNotFoundException("Quiz introuvable avec l'id : " + quizId));
            Quiz oldQuiz = existing.getQuiz();
            if (oldQuiz != null && !oldQuiz.getId().equals(newQuiz.getId())) {
                oldQuiz.getQuestions().remove(existing);
            }
            existing.setQuiz(newQuiz);
            newQuiz.getQuestions().add(existing);
        }

        return questionRepository.save(existing);
    }

    public void delete(Long id) {
        Question existing = getById(id);
        Quiz quiz = existing.getQuiz();
        if (quiz != null) {
            quiz.getQuestions().remove(existing);
        }
        questionRepository.delete(existing);
    }
}
