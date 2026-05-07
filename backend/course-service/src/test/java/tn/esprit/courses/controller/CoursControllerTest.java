package tn.esprit.courses.controller;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mock.web.MockMultipartFile;
import tn.esprit.courses.Entity.Cours;
import tn.esprit.courses.services.CoursService;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@ExtendWith(MockitoExtension.class)
class CoursControllerTest {

    @InjectMocks
    CoursController coursController;

    @Mock
    private CoursService coursService;

    @Test
    void shouldReturnAllCours() {
        List<Cours> coursList = Arrays.asList(
                createCours(1L, "Cours 1"),
                createCours(2L, "Cours 2")
        );

        Mockito.when(coursService.getAll()).thenReturn(coursList);
        ResponseEntity<List<Cours>> responseEntity = coursController.getAll();
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(coursList, responseEntity.getBody());
    }

    @Test
    void shouldReturnCoursById() {
        Cours cours = createCours(1L, "Cours 1");

        Mockito.when(coursService.getById(1L)).thenReturn(cours);
        ResponseEntity<Cours> responseEntity = coursController.getById(1L);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(cours, responseEntity.getBody());
    }

    @Test
    void shouldCreateCours() {
        Cours cours = createCours(null, "New Cours");
        Cours created = createCours(1L, "New Cours");

        Mockito.when(coursService.create(Mockito.any(Cours.class), Mockito.eq(1L))).thenReturn(created);

        ResponseEntity<Cours> responseEntity = coursController.create(cours, 1L);
        assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
        assertEquals(created, responseEntity.getBody());
    }

    @Test
    void shouldCreateCoursAvecPdf() {
        Cours cours = createCours(null, "New Cours");
        Cours created = createCours(1L, "New Cours");
        MockMultipartFile pdfFile = new MockMultipartFile("fichierPdf", "test.pdf", MediaType.APPLICATION_PDF_VALUE, "test content".getBytes());

        Mockito.when(coursService.create(Mockito.any(Cours.class), Mockito.eq(1L), Mockito.any())).thenReturn(created);

        ResponseEntity<Cours> responseEntity = coursController.createAvecPdf(1L, cours, pdfFile);
        assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
        assertEquals(created, responseEntity.getBody());
    }

    @Test
    void shouldUpdateCours() {
        Cours cours = createCours(null, "Updated Cours");
        Cours updated = createCours(1L, "Updated Cours");

        Mockito.when(coursService.update(Mockito.eq(1L), Mockito.any(Cours.class), Mockito.eq(2L))).thenReturn(updated);

        ResponseEntity<Cours> responseEntity = coursController.update(1L, cours, 2L);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(updated, responseEntity.getBody());
    }

    @Test
    void shouldUpdateCoursAvecPdf() {
        Cours cours = createCours(null, "Updated Cours");
        Cours updated = createCours(1L, "Updated Cours");
        MockMultipartFile pdfFile = new MockMultipartFile("fichierPdf", "test.pdf", MediaType.APPLICATION_PDF_VALUE, "test content".getBytes());

        Mockito.when(coursService.update(Mockito.eq(1L), Mockito.any(Cours.class), Mockito.eq(2L), Mockito.any())).thenReturn(updated);

        ResponseEntity<Cours> responseEntity = coursController.updateAvecPdf(1L, 2L, cours, pdfFile);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(updated, responseEntity.getBody());
    }

    @Test
    void shouldTelechargerFichierPdf() {
        Cours cours = createCours(1L, "Cours with PDF");
        cours.setFichierPdf("test pdf content".getBytes());
        cours.setNomFichierPdf("test.pdf");

        Mockito.when(coursService.getById(1L)).thenReturn(cours);

        ResponseEntity<byte[]> responseEntity = coursController.telechargerFichierPdf(1L);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertNotNull(responseEntity.getBody());
        assertEquals(MediaType.APPLICATION_PDF, responseEntity.getHeaders().getContentType());
        assertEquals("attachment; filename=\"test.pdf\"", responseEntity.getHeaders().getFirst(HttpHeaders.CONTENT_DISPOSITION));
    }

    @Test
    void shouldReturnNotFoundWhenPdfNotExists() {
        Cours cours = createCours(1L, "Cours without PDF");

        Mockito.when(coursService.getById(1L)).thenReturn(cours);

        ResponseEntity<byte[]> responseEntity = coursController.telechargerFichierPdf(1L);
        assertEquals(HttpStatus.NOT_FOUND, responseEntity.getStatusCode());
    }

    @Test
    void shouldDeleteCours() {
        Mockito.doNothing().when(coursService).delete(1L);
        ResponseEntity<Void> responseEntity = coursController.delete(1L);
        assertEquals(HttpStatus.NO_CONTENT, responseEntity.getStatusCode());
    }

    private Cours createCours(Long id, String titre) {
        Cours cours = new Cours();
        cours.setId(id);
        cours.setTitre(titre);
        cours.setContenu("Contenu du cours");
        cours.setOrdreCours(1);
        cours.setDuree(60);
        cours.setTypeContenu("VIDEO");
        cours.setUrlRessource("http://example.com");
        cours.setGratuit(true);
        cours.setPublie(true);
        return cours;
    }
}
