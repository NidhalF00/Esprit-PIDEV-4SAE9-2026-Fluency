package tn.esprit.backend.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "certificats")
public class Certificat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "code_certificat", nullable = false, unique = true, length = 64)
    private String codeCertificat;

    @Column(name = "date_obtention", nullable = false)
    private LocalDateTime dateObtention;

    @Column(name = "score")
    private Double score;

    @Column(name = "pourcentage")
    private Double pourcentage;

    @Column(name = "email_envoye")
    private Boolean emailEnvoye = false;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnore
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "quiz_id", nullable = false)
    @JsonIgnore
    private Quiz quiz;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "module_id")
    @JsonIgnore
    private Module module;

    /** PDF du certificat (généré après réussite du quiz). */
    @Lob
    @JsonIgnore
    @Column(name = "fichier_pdf", columnDefinition = "LONGBLOB")
    private byte[] fichierPdf;

    @Column(name = "nom_fichier_pdf", length = 255)
    private String nomFichierPdf;

    public Certificat() {
    }

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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Quiz getQuiz() {
        return quiz;
    }

    public void setQuiz(Quiz quiz) {
        this.quiz = quiz;
    }

    public Module getModule() {
        return module;
    }

    public void setModule(Module module) {
        this.module = module;
    }

    public byte[] getFichierPdf() {
        return fichierPdf;
    }

    public void setFichierPdf(byte[] fichierPdf) {
        this.fichierPdf = fichierPdf;
    }

    public String getNomFichierPdf() {
        return nomFichierPdf;
    }

    public void setNomFichierPdf(String nomFichierPdf) {
        this.nomFichierPdf = nomFichierPdf;
    }
}
