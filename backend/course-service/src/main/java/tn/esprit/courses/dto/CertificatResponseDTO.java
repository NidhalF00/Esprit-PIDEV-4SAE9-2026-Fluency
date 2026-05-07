package tn.esprit.courses.dto;

import java.time.LocalDateTime;

public class CertificatResponseDTO {

    private Long id;
    private String codeCertificat;
    private LocalDateTime dateObtention;
    private Double score;
    private Double pourcentage;
    private Boolean emailEnvoye;
    private Long userId;
    private Long quizId;
    private Long moduleId;
    private String etudiantNom;
    private String quizTitre;
    private String moduleTitre;
    private Boolean pdfDisponible;
    private String certificatPdfUrl;

    public CertificatResponseDTO() {
    }

    public CertificatResponseDTO(Long id, String codeCertificat, LocalDateTime dateObtention,
                                 Double score, Double pourcentage, Boolean emailEnvoye,
                                 Long userId, Long quizId, Long moduleId,
                                 String etudiantNom, String quizTitre, String moduleTitre,
                                 Boolean pdfDisponible, String certificatPdfUrl) {
        this.id = id;
        this.codeCertificat = codeCertificat;
        this.dateObtention = dateObtention;
        this.score = score;
        this.pourcentage = pourcentage;
        this.emailEnvoye = emailEnvoye;
        this.userId = userId;
        this.quizId = quizId;
        this.moduleId = moduleId;
        this.etudiantNom = etudiantNom;
        this.quizTitre = quizTitre;
        this.moduleTitre = moduleTitre;
        this.pdfDisponible = pdfDisponible;
        this.certificatPdfUrl = certificatPdfUrl;
    }

    public String getEtudiantNom() { return etudiantNom; }
    public void setEtudiantNom(String etudiantNom) { this.etudiantNom = etudiantNom; }
    public String getQuizTitre() { return quizTitre; }
    public void setQuizTitre(String quizTitre) { this.quizTitre = quizTitre; }
    public String getModuleTitre() { return moduleTitre; }
    public void setModuleTitre(String moduleTitre) { this.moduleTitre = moduleTitre; }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCodeCertificat() {
        return codeCertificat;
    }

    public void setCodeCertificat(String codeCertificat) {
        this.codeCertificat = codeCertificat;
    }

    public LocalDateTime getDateObtention() {
        return dateObtention;
    }

    public void setDateObtention(LocalDateTime dateObtention) {
        this.dateObtention = dateObtention;
    }

    public Double getScore() {
        return score;
    }

    public void setScore(Double score) {
        this.score = score;
    }

    public Double getPourcentage() {
        return pourcentage;
    }

    public void setPourcentage(Double pourcentage) {
        this.pourcentage = pourcentage;
    }

    public Boolean getEmailEnvoye() {
        return emailEnvoye;
    }

    public void setEmailEnvoye(Boolean emailEnvoye) {
        this.emailEnvoye = emailEnvoye;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getQuizId() {
        return quizId;
    }

    public void setQuizId(Long quizId) {
        this.quizId = quizId;
    }

    public Long getModuleId() {
        return moduleId;
    }

    public void setModuleId(Long moduleId) {
        this.moduleId = moduleId;
    }

    public Boolean getPdfDisponible() {
        return pdfDisponible;
    }

    public void setPdfDisponible(Boolean pdfDisponible) {
        this.pdfDisponible = pdfDisponible;
    }

    public String getCertificatPdfUrl() {
        return certificatPdfUrl;
    }

    public void setCertificatPdfUrl(String certificatPdfUrl) {
        this.certificatPdfUrl = certificatPdfUrl;
    }
}
