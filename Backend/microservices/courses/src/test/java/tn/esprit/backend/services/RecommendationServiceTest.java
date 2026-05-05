package tn.esprit.backend.services;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import tn.esprit.backend.Entity.Cours;
import tn.esprit.backend.Entity.Module;
import tn.esprit.backend.Repository.CoursRepository;
import tn.esprit.backend.Repository.ModuleRepository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class RecommendationServiceTest {

    @InjectMocks
    RecommendationService recommendationService;

    @Mock
    private ModuleRepository moduleRepository;

    @Mock
    private CoursRepository coursRepository;

    @Test
    void shouldRecommendModulesByNiveau() {
        List<Module> modules = Arrays.asList(
                createModule(1L, "Java Basics", "BEGINNER"),
                createModule(2L, "Python Basics", "BEGINNER")
        );

        when(moduleRepository.findByNiveauIgnoreCase("BEGINNER"))
                .thenReturn(modules);

        List<Module> result = recommendationService.recommanderModulesParNiveau("BEGINNER");

        assertEquals(2, result.size());
        assertEquals("Java Basics", result.get(0).getTitre());
        verify(moduleRepository).findByNiveauIgnoreCase("BEGINNER");
    }

    @Test
    void shouldReturnEmptyListWhenNiveauIsNull() {
        List<Module> result = recommendationService.recommanderModulesParNiveau(null);

        assertTrue(result.isEmpty());
    }

    @Test
    void shouldReturnEmptyListWhenNiveauIsBlank() {
        List<Module> result = recommendationService.recommanderModulesParNiveau("   ");

        assertTrue(result.isEmpty());
    }

    @Test
    void shouldTrimAndNormalizeNiveauInput() {
        List<Module> modules = Arrays.asList(
                createModule(1L, "Advanced Java", "ADVANCED")
        );

        when(moduleRepository.findByNiveauIgnoreCase("ADVANCED"))
                .thenReturn(modules);

        List<Module> result = recommendationService.recommanderModulesParNiveau("  ADVANCED  ");

        assertEquals(1, result.size());
        verify(moduleRepository).findByNiveauIgnoreCase("ADVANCED");
    }

    @Test
    void shouldRecommendModulesByCategorie() {
        List<Module> modules = Arrays.asList(
                createModule(1L, "Web Development", "WEB"),
                createModule(2L, "React Basics", "WEB")
        );

        when(moduleRepository.findByCategorieIgnoreCase("WEB"))
                .thenReturn(modules);

        List<Module> result = recommendationService.recommanderModulesParCategorie("WEB");

        assertEquals(2, result.size());
        assertEquals("Web Development", result.get(0).getTitre());
        verify(moduleRepository).findByCategorieIgnoreCase("WEB");
    }

    @Test
    void shouldReturnEmptyListWhenCategorieIsNull() {
        List<Module> result = recommendationService.recommanderModulesParCategorie(null);

        assertTrue(result.isEmpty());
    }

    @Test
    void shouldReturnEmptyListWhenCategorieIsBlank() {
        List<Module> result = recommendationService.recommanderModulesParCategorie("   ");

        assertTrue(result.isEmpty());
    }

    @Test
    void shouldTrimAndNormalizeCategorieInput() {
        List<Module> modules = Arrays.asList(
                createModule(1L, "Mobile Dev", "MOBILE")
        );

        when(moduleRepository.findByCategorieIgnoreCase("MOBILE"))
                .thenReturn(modules);

        List<Module> result = recommendationService.recommanderModulesParCategorie("  MOBILE  ");

        assertEquals(1, result.size());
        verify(moduleRepository).findByCategorieIgnoreCase("MOBILE");
    }

    @Test
    void shouldRecommendAllCoursOrderedByOrdre() {
        List<Cours> courses = Arrays.asList(
                createCours(1L, "Cours 1", 1),
                createCours(2L, "Cours 2", 2),
                createCours(3L, "Cours 3", 3)
        );

        when(coursRepository.findByModule_IdOrderByOrdreCoursAsc(1L))
                .thenReturn(courses);

        List<Cours> result = recommendationService.recommanderCoursSuivants(1L);

        assertEquals(3, result.size());
        assertEquals(1, result.get(0).getOrdreCours());
        assertEquals(2, result.get(1).getOrdreCours());
        assertEquals(3, result.get(2).getOrdreCours());
        verify(coursRepository).findByModule_IdOrderByOrdreCoursAsc(1L);
    }

    @Test
    void shouldReturnEmptyListWhenModuleHasNoCours() {
        when(coursRepository.findByModule_IdOrderByOrdreCoursAsc(999L))
                .thenReturn(new ArrayList<>());

        List<Cours> result = recommendationService.recommanderCoursSuivants(999L);

        assertTrue(result.isEmpty());
        verify(coursRepository).findByModule_IdOrderByOrdreCoursAsc(999L);
    }

    @Test
    void shouldRecommendCoursAfterOrdre() {
        List<Cours> courses = Arrays.asList(
                createCours(2L, "Cours 2", 2),
                createCours(3L, "Cours 3", 3)
        );

        when(coursRepository.findByModule_IdAndOrdreCoursGreaterThanOrderByOrdreCoursAsc(1L, 1))
                .thenReturn(courses);

        List<Cours> result = recommendationService.recommanderCoursApresOrdre(1L, 1);

        assertEquals(2, result.size());
        assertTrue(result.stream().allMatch(c -> c.getOrdreCours() > 1));
        verify(coursRepository).findByModule_IdAndOrdreCoursGreaterThanOrderByOrdreCoursAsc(1L, 1);
    }

    @Test
    void shouldReturnAllCoursWhenOrdreIsNull() {
        List<Cours> courses = Arrays.asList(
                createCours(1L, "Cours 1", 1),
                createCours(2L, "Cours 2", 2),
                createCours(3L, "Cours 3", 3)
        );

        when(coursRepository.findByModule_IdOrderByOrdreCoursAsc(1L))
                .thenReturn(courses);

        List<Cours> result = recommendationService.recommanderCoursApresOrdre(1L, null);

        assertEquals(3, result.size());
        verify(coursRepository).findByModule_IdOrderByOrdreCoursAsc(1L);
    }

    @Test
    void shouldRecommendCoursAfterOrdreZero() {
        List<Cours> courses = Arrays.asList(
                createCours(1L, "Cours 1", 1),
                createCours(2L, "Cours 2", 2),
                createCours(3L, "Cours 3", 3)
        );

        when(coursRepository.findByModule_IdAndOrdreCoursGreaterThanOrderByOrdreCoursAsc(1L, 0))
                .thenReturn(courses);

        List<Cours> result = recommendationService.recommanderCoursApresOrdre(1L, 0);

        assertEquals(3, result.size());
        verify(coursRepository).findByModule_IdAndOrdreCoursGreaterThanOrderByOrdreCoursAsc(1L, 0);
    }

    @Test
    void shouldReturnEmptyListWhenNoCoursAfterOrdre() {
        when(coursRepository.findByModule_IdAndOrdreCoursGreaterThanOrderByOrdreCoursAsc(1L, 5))
                .thenReturn(new ArrayList<>());

        List<Cours> result = recommendationService.recommanderCoursApresOrdre(1L, 5);

        assertTrue(result.isEmpty());
        verify(coursRepository).findByModule_IdAndOrdreCoursGreaterThanOrderByOrdreCoursAsc(1L, 5);
    }

    private Module createModule(Long id, String titre, String categorie) {
        Module module = new Module();
        module.setId(id);
        module.setTitre(titre);
        module.setCategorie(categorie);
        return module;
    }

    private Cours createCours(Long id, String titre, Integer ordre) {
        Cours cours = new Cours();
        cours.setId(id);
        cours.setTitre(titre);
        cours.setOrdreCours(ordre);
        return cours;
    }
}




