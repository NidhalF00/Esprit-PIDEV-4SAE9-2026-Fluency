package tn.esprit.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import tn.esprit.backend.Entity.Question;

@RepositoryRestResource(exported = false)
public interface QuestionRepository extends JpaRepository<Question, Long> {

    long countByQuiz_Id(Long quizId);
}
