package tn.esprit.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import tn.esprit.backend.Entity.Reponse;

@RepositoryRestResource(exported = false)
public interface ReponseRepository extends JpaRepository<Reponse, Long> {

    java.util.List<Reponse> findByQuestion_Id(Long questionId);
}
