package tn.esprit.courses.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @Column(name = "id")
    private Long id;

    @Column(name = "nom", nullable = false, length = 150)
    private String nom;

    @Column(name = "role", nullable = false, length = 80)
    private String role;

    /** Email pour l’envoi des certificats (optionnel pour les anciennes données). */
    @Column(name = "email", length = 255)
    private String email;

    public User() {
    }

    public User(Long id, String nom, String role) {
        this.id = id;
        this.nom = nom;
        this.role = role;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
