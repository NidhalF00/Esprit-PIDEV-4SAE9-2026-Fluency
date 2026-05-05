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
 * Recherche avec filtres optionnels (paramètres null ou vides ignorés côté requête).
 */
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class RechercheService {

    private final ModuleRepository moduleRepository;
    private final CoursRepository coursRepository;

    public List<Module> rechercherModules(String motCle, String niveau, String categorie) {
        String mc = blankToNull(motCle);
        String niv = blankToNull(niveau);
        String cat = blankToNull(categorie);
        return moduleRepository.searchModules(mc, niv, cat);
    }

    public List<Cours> rechercherCoursParType(String typeContenu) {
        if (typeContenu == null || typeContenu.isBlank()) {
            return List.of();
        }
        return coursRepository.findByTypeContenuIgnoreCase(typeContenu.trim());
    }

    public List<Cours> rechercherCours(String titre, String typeContenu, Boolean publie) {
        String t = blankToNull(titre);
        String tc = blankToNull(typeContenu);
        return coursRepository.searchCours(t, tc, publie);
    }

    private static String blankToNull(String s) {
        if (s == null || s.isBlank()) {
            return null;
        }
        return s.trim();
    }
}
