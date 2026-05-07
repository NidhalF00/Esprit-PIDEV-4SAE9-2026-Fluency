package tn.esprit.courses.controller;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import tn.esprit.courses.Entity.Cours;
import tn.esprit.courses.Entity.Module;
import tn.esprit.courses.services.RecommendationService;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@ExtendWith(MockitoExtension.class)
class RecommendationControllerTest {

    @InjectMocks
    RecommendationController recommendationController;

    @Mock
    private RecommendationService recommendationService;

    @Test
    void shouldReturnModulesByNiveau() {
        List<Module> modules = Arrays.asList(
                createModule(1L, "Java Basics", "BEGINNER"),
                createModule(2L, "Python Basics", "BEGINNER")
        );

        Mockito.when(recommendationService.recommanderModulesParNiveau("BEGINNER"))
                .thenReturn(modules);

        ResponseEntity<List<Module>> responseEntity = recommendationController.parNiveau("BEGINNER");

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(modules, responseEntity.getBody());
        assertEquals(2, responseEntity.getBody().size());
    }

    @Test
    void shouldHandleEmptyNiveauParam() {
        Mockito.when(recommendationService.recommanderModulesParNiveau(""))
                .thenReturn(List.of());

        ResponseEntity<List<Module>> responseEntity = recommendationController.parNiveau("");

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertTrue(responseEntity.getBody().isEmpty());
    }

    @Test
    void shouldReturnEmptyListWhenNiveauNotFound() {
        Mockito.when(recommendationService.recommanderModulesParNiveau("ADVANCED"))
                .thenReturn(List.of());

        ResponseEntity<List<Module>> responseEntity = recommendationController.parNiveau("ADVANCED");

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertTrue(responseEntity.getBody().isEmpty());
    }

    @Test
    void shouldReturnModulesByCategorie() {
        List<Module> modules = Arrays.asList(
                createModule(1L, "Web Development", "WEB"),
                createModule(2L, "React Basics", "WEB")
        );

        Mockito.when(recommendationService.recommanderModulesParCategorie("WEB"))
                .thenReturn(modules);

        ResponseEntity<List<Module>> responseEntity = recommendationController.parCategorie("WEB");

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(modules, responseEntity.getBody());
        assertEquals(2, responseEntity.getBody().size());
    }

    @Test
    void shouldReturnEmptyListWhenCategorieNotFound() {
        Mockito.when(recommendationService.recommanderModulesParCategorie("UNKNOWN"))
                .thenReturn(List.of());

        ResponseEntity<List<Module>> responseEntity = recommendationController.parCategorie("UNKNOWN");

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertTrue(responseEntity.getBody().isEmpty());
    }

    @Test
    void shouldReturnCoursDuModule() {
        List<Cours> courses = Arrays.asList(
                createCours(1L, "Cours 1", 1),
                createCours(2L, "Cours 2", 2),
                createCours(3L, "Cours 3", 3)
        );

        Mockito.when(recommendationService.recommanderCoursSuivants(1L))
                .thenReturn(courses);

        ResponseEntity<List<Cours>> responseEntity = recommendationController.coursDuModule(1L);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(courses, responseEntity.getBody());
        assertEquals(3, responseEntity.getBody().size());
    }

    @Test
    void shouldReturnEmptyCoursListWhenModuleNotFound() {
        Mockito.when(recommendationService.recommanderCoursSuivants(999L))
                .thenReturn(List.of());

        ResponseEntity<List<Cours>> responseEntity = recommendationController.coursDuModule(999L);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertTrue(responseEntity.getBody().isEmpty());
    }

    @Test
    void shouldReturnCoursApresOrdre() {
        List<Cours> courses = Arrays.asList(
                createCours(2L, "Cours 2", 2),
                createCours(3L, "Cours 3", 3)
        );

        Mockito.when(recommendationService.recommanderCoursApresOrdre(1L, 1))
                .thenReturn(courses);

        ResponseEntity<List<Cours>> responseEntity = recommendationController.coursApresOrdre(1L, 1);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(courses, responseEntity.getBody());
        assertEquals(2, responseEntity.getBody().size());
    }

    @Test
    void shouldReturnAllCoursWhenOrdreIsZero() {
        List<Cours> courses = Arrays.asList(
                createCours(1L, "Cours 1", 1),
                createCours(2L, "Cours 2", 2),
                createCours(3L, "Cours 3", 3)
        );

        Mockito.when(recommendationService.recommanderCoursApresOrdre(1L, 0))
                .thenReturn(courses);

        ResponseEntity<List<Cours>> responseEntity = recommendationController.coursApresOrdre(1L, 0);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(3, responseEntity.getBody().size());
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






