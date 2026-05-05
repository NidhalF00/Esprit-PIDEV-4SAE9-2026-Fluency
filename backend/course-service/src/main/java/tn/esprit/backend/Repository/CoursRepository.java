package tn.esprit.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import tn.esprit.backend.Entity.Cours;

import java.util.List;

@RepositoryRestResource(exported = false)
public interface CoursRepository extends JpaRepository<Cours, Long> {

    List<Cours> findByModule_IdOrderByOrdreCoursAsc(Long moduleId);

    List<Cours> findByModule_IdAndOrdreCoursGreaterThanOrderByOrdreCoursAsc(Long moduleId, Integer ordre);

    List<Cours> findByTypeContenuIgnoreCase(String typeContenu);

    @Query("SELECT c FROM Cours c WHERE " +
            "(:titre IS NULL OR TRIM(:titre) = '' OR LOWER(c.titre) LIKE LOWER(CONCAT('%', :titre, '%'))) AND " +
            "(:typeContenu IS NULL OR TRIM(:typeContenu) = '' OR LOWER(c.typeContenu) = LOWER(:typeContenu)) AND " +
            "(:publie IS NULL OR c.publie = :publie)")
    List<Cours> searchCours(
            @Param("titre") String titre,
            @Param("typeContenu") String typeContenu,
            @Param("publie") Boolean publie);
}
