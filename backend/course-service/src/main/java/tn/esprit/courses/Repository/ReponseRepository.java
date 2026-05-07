package tn.esprit.courses.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import tn.esprit.courses.Entity.Reponse;

@RepositoryRestResource(exported = false)
public interface ReponseRepository extends JpaRepository<Reponse, Long> {

    java.util.List<Reponse> findByQuestion_Id(Long questionId);
}
