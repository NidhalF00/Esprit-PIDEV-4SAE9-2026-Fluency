package tn.esprit.backend.Entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "modules")
public class Module {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "titre", nullable = false, length = 255)
    private String titre;

    @Column(name = "description", length = 2000)
    private String description;

    @Column(name = "niveau", length = 100)
    private String niveau;

    @Column(name = "categorie", length = 150)
    private String categorie;

    @Column(name = "duree_totale")
    private Integer dureeTotale;

    @Column(name = "actif")
    private Boolean actif;

    @OneToMany(mappedBy = "module", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<Cours> cours = new ArrayList<>();

    public Module() {
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getNiveau() {
        return niveau;
    }

    public void setNiveau(String niveau) {
        this.niveau = niveau;
    }

    public String getCategorie() {
        return categorie;
    }

    public void setCategorie(String categorie) {
        this.categorie = categorie;
    }

    public Integer getDureeTotale() {
        return dureeTotale;
    }

    public void setDureeTotale(Integer dureeTotale) {
        this.dureeTotale = dureeTotale;
    }

    public Boolean getActif() {
        return actif;
    }

    public void setActif(Boolean actif) {
        this.actif = actif;
    }

    public List<Cours> getCours() {
        return cours;
    }

    public void setCours(List<Cours> cours) {
        this.cours = cours;
    }
}
