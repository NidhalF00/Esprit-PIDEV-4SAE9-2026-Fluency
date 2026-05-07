package tn.esprit.courses.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "cours")
public class Cours {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "titre", nullable = false, length = 255)
    private String titre;

    @Column(name = "contenu", length = 10000)
    private String contenu;

    @Column(name = "ordre_cours")
    private Integer ordreCours;

    @Column(name = "duree")
    private Integer duree;

    @Column(name = "type_contenu", length = 100)
    private String typeContenu;

    @Column(name = "url_ressource", length = 500)
    private String urlRessource;

    @Column(name = "gratuit")
    private Boolean gratuit;

    @Column(name = "publie")
    private Boolean publie;

    /** Nom du fichier PDF original (affichage / téléchargement). */
    @Column(name = "nom_fichier_pdf", length = 255)
    private String nomFichierPdf;

    /** Contenu binaire du PDF (non inclus dans les réponses JSON pour éviter des réponses énormes). */
    @Lob
    @Column(name = "fichier_pdf", columnDefinition = "LONGBLOB")
    private byte[] fichierPdf;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "module_id", nullable = false)
    @JsonBackReference
    private Module module;

    @OneToMany(mappedBy = "cours", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Quiz> quizzes = new ArrayList<>();

    public Cours() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getContenu() {
        return contenu;
    }

    public void setContenu(String contenu) {
        this.contenu = contenu;
    }

    public Integer getOrdreCours() {
        return ordreCours;
    }

    public void setOrdreCours(Integer ordreCours) {
        this.ordreCours = ordreCours;
    }

    public Integer getDuree() {
        return duree;
    }

    public void setDuree(Integer duree) {
        this.duree = duree;
    }

    public String getTypeContenu() {
        return typeContenu;
    }

    public void setTypeContenu(String typeContenu) {
        this.typeContenu = typeContenu;
    }

    public String getUrlRessource() {
        return urlRessource;
    }

    public void setUrlRessource(String urlRessource) {
        this.urlRessource = urlRessource;
    }

    public Boolean getGratuit() {
        return gratuit;
    }

    public void setGratuit(Boolean gratuit) {
        this.gratuit = gratuit;
    }

    public Boolean getPublie() {
        return publie;
    }

    public void setPublie(Boolean publie) {
        this.publie = publie;
    }

    public String getNomFichierPdf() {
        return nomFichierPdf;
    }

    public void setNomFichierPdf(String nomFichierPdf) {
        this.nomFichierPdf = nomFichierPdf;
    }

    @JsonIgnore
    public byte[] getFichierPdf() {
        return fichierPdf;
    }

    public void setFichierPdf(byte[] fichierPdf) {
        this.fichierPdf = fichierPdf;
    }

    public Long getModuleId() {
        return module != null ? module.getId() : null;
    }

    public Module getModule() {
        return module;
    }

    public void setModule(Module module) {
        this.module = module;
    }

    public List<Quiz> getQuizzes() {
        return quizzes;
    }

    public void setQuizzes(List<Quiz> quizzes) {
        this.quizzes = quizzes;
    }
}
