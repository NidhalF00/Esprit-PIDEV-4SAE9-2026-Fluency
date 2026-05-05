package tn.esprit.backend.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.esprit.backend.Entity.Cours;
import tn.esprit.backend.Entity.Module;
import tn.esprit.backend.Repository.CoursRepository;
import tn.esprit.backend.Repository.ModuleRepository;

import java.util.List;

/**
 * Recommandations simples de modules et de cours (même niveau, catégorie, ordre dans le module).
 */
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class RecommendationService {

    private final ModuleRepository moduleRepository;
    private final CoursRepository coursRepository;

    public List<Module> recommanderModulesParNiveau(String niveau) {
        if (niveau == null || niveau.isBlank()) {
            return List.of();
        }
        return moduleRepository.findByNiveauIgnoreCase(niveau.trim());
    }

    public List<Module> recommanderModulesParCategorie(String categorie) {
        if (categorie == null || categorie.isBlank()) {
            return List.of();
        }
        return moduleRepository.findByCategorieIgnoreCase(categorie.trim());
    }

    /**
     * Tous les cours du module triés par {@code ordreCours} (parcours suggéré).
     */
    public List<Cours> recommanderCoursSuivants(Long moduleId) {
        return coursRepository.findByModule_IdOrderByOrdreCoursAsc(moduleId);
    }

    /**
     * Cours dont l'ordre est strictement supérieur à {@code ordreActuel} (prochaines leçons).
     */
    public List<Cours> recommanderCoursApresOrdre(Long moduleId, Integer ordreActuel) {
        if (ordreActuel == null) {
            return recommanderCoursSuivants(moduleId);
        }
        return coursRepository.findByModule_IdAndOrdreCoursGreaterThanOrderByOrdreCoursAsc(moduleId, ordreActuel);
    }
}
