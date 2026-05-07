package tn.esprit.courses.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import tn.esprit.courses.Entity.Quiz;

import java.util.Optional;

@RepositoryRestResource(exported = false)
public interface QuizRepository extends JpaRepository<Quiz, Long> {

    long countByCours_Module_Id(Long moduleId);

    @Query("SELECT COALESCE(AVG(q.scoreMax), 0) FROM Quiz q WHERE q.scoreMax IS NOT NULL")
    Double averageScoreMax();

    @Query("SELECT DISTINCT q FROM Quiz q LEFT JOIN FETCH q.questions WHERE q.id = :id")
    Optional<Quiz> findByIdWithQuestions(@Param("id") Long id);

    @Query("SELECT DISTINCT q FROM Quiz q JOIN FETCH q.cours c JOIN FETCH c.module WHERE q.id = :id")
    Optional<Quiz> findByIdWithCoursAndModule(@Param("id") Long id);
}
