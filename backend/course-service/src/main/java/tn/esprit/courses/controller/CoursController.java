package tn.esprit.courses.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tn.esprit.courses.Entity.Cours;
import tn.esprit.courses.services.CoursService;

import java.util.List;

@RestController
@RequestMapping("/api/cours")
@RequiredArgsConstructor
public class CoursController {

    private final CoursService coursService;

    /**
     * Empêche le binding du fichier multipart sur {@code cours.fichierPdf} (byte[]) :
     * le PDF est traité uniquement via le paramètre {@code fichierPdf}.
     */
    @InitBinder("cours")
    public void initBinderCours(WebDataBinder binder) {
        binder.setDisallowedFields("fichierPdf", "quizzes", "module");
    }

    @GetMapping
    public ResponseEntity<List<Cours>> getAll() {
        return ResponseEntity.ok(coursService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cours> getById(@PathVariable Long id) {
        return ResponseEntity.ok(coursService.getById(id));
    }

    @PostMapping
    public ResponseEntity<Cours> create(
            @RequestBody Cours cours,
            @RequestParam Long moduleId) {
        Cours created = coursService.create(cours, moduleId);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    /**
     * Création avec fichier PDF : Body → form-data (pas raw JSON).
     * Champs texte : titre, contenu, ordreCours, duree, typeContenu, urlRessource, gratuit, publie + moduleId + fichier fichierPdf (type File).
     */
    @PostMapping(value = "/avec-pdf", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Cours> createAvecPdf(
            @RequestParam Long moduleId,
            @ModelAttribute Cours cours,
            @RequestParam(value = "fichierPdf", required = false) MultipartFile fichierPdf) {
        Cours created = coursService.create(cours, moduleId, fichierPdf);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cours> update(
            @PathVariable Long id,
            @RequestBody Cours cours,
            @RequestParam(required = false) Long moduleId) {
        return ResponseEntity.ok(coursService.update(id, cours, moduleId));
    }

    @PutMapping(value = "/{id}/avec-pdf", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Cours> updateAvecPdf(
            @PathVariable Long id,
            @RequestParam(required = false) Long moduleId,
            @ModelAttribute Cours cours,
            @RequestParam(value = "fichierPdf", required = false) MultipartFile fichierPdf) {
        return ResponseEntity.ok(coursService.update(id, cours, moduleId, fichierPdf));
    }

    @GetMapping("/{id}/fichier-pdf")
    public ResponseEntity<byte[]> telechargerFichierPdf(@PathVariable Long id) {
        Cours cours = coursService.getById(id);
        byte[] data = cours.getFichierPdf();
        if (data == null || data.length == 0) {
            return ResponseEntity.notFound().build();
        }
        String filename = cours.getNomFichierPdf() != null ? cours.getNomFichierPdf() : "cours.pdf";
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + filename + "\"")
                .contentType(MediaType.APPLICATION_PDF)
                .body(data);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        coursService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
