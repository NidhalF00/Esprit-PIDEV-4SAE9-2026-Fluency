package tn.esprit.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import tn.esprit.backend.Entity.Module;

import java.util.List;

@RepositoryRestResource(exported = false)
public interface ModuleRepository extends JpaRepository<Module, Long> {

    List<Module> findByNiveauIgnoreCase(String niveau);

    List<Module> findByCategorieIgnoreCase(String categorie);

    @Query("SELECT m FROM Module m WHERE " +
            "(:motCle IS NULL OR TRIM(:motCle) = '' OR LOWER(m.titre) LIKE LOWER(CONCAT('%', :motCle, '%'))) AND " +
            "(:niveau IS NULL OR TRIM(:niveau) = '' OR LOWER(m.niveau) = LOWER(:niveau)) AND " +
            "(:categorie IS NULL OR TRIM(:categorie) = '' OR LOWER(m.categorie) = LOWER(:categorie))")
    List<Module> searchModules(
            @Param("motCle") String motCle,
            @Param("niveau") String niveau,
            @Param("categorie") String categorie);
}
