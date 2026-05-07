package tn.esprit.courses.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.courses.Entity.Certificat;
import tn.esprit.courses.dto.CertificatGenerationRequestDTO;
import tn.esprit.courses.dto.CertificatResponseDTO;
import tn.esprit.courses.services.CertificatService;

import java.util.List;

@RestController
@RequestMapping("/api/certificats")
@RequiredArgsConstructor
public class CertificatController {

    private final CertificatService certificatService;

    @GetMapping
    public ResponseEntity<List<CertificatResponseDTO>> getAll() {
        return ResponseEntity.ok(certificatService.toDtoList(certificatService.getAllCertificats()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<CertificatResponseDTO> getById(@PathVariable Long id) {
        return ResponseEntity.ok(certificatService.toDto(certificatService.getCertificatById(id)));
    }

    /**
     * Télécharge le certificat au format PDF (généré à la réussite du quiz ; régénéré si absent en base).
     */
    @GetMapping(value = "/{id}/pdf", produces = MediaType.APPLICATION_PDF_VALUE)
    public ResponseEntity<byte[]> telechargerPdf(@PathVariable Long id) {
        Certificat c = certificatService.getOuGenererPdfCertificat(id);
        String filename = c.getNomFichierPdf() != null ? c.getNomFichierPdf() : "certificat.pdf";
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + filename + "\"")
                .contentType(MediaType.APPLICATION_PDF)
                .body(c.getFichierPdf());
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<CertificatResponseDTO>> getByUser(@PathVariable Long userId) {
        return ResponseEntity.ok(certificatService.toDtoList(certificatService.getCertificatsByUser(userId)));
    }

    @GetMapping("/code/{code}")
    public ResponseEntity<CertificatResponseDTO> getByCode(@PathVariable String code) {
        return ResponseEntity.ok(certificatService.toDto(certificatService.getCertificatByCode(code)));
    }

    /**
     * Génération manuelle (ex. admin / Postman). Refuse si un certificat existe déjà pour ce couple user/quiz.
     */
    @PostMapping("/generer")
    public ResponseEntity<CertificatResponseDTO> generer(@RequestBody CertificatGenerationRequestDTO body) {
        if (body.getUserId() == null || body.getQuizId() == null || body.getScore() == null || body.getPourcentage() == null) {
            throw new IllegalArgumentException("userId, quizId, score et pourcentage sont obligatoires.");
        }
        if (certificatService.existsByUserIdAndQuizId(body.getUserId(), body.getQuizId())) {
            throw new IllegalArgumentException("Un certificat existe déjà pour cet utilisateur et ce quiz.");
        }
        var cert = certificatService.genererCertificat(body.getUserId(), body.getQuizId(), body.getScore(), body.getPourcentage());
        try {
            certificatService.envoyerCertificatParEmail(cert);
        } catch (Exception ignored) {
            // email échoué : le certificat reste avec emailEnvoye = false
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(certificatService.toDto(
                certificatService.getCertificatById(cert.getId())));
    }
}
