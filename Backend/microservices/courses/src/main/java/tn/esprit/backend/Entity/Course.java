package tn.esprit.backend.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String content;
    private Double coefficient;
    private Integer hoursNumber;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "module_id") // Nom de la colonne dans la table SQL
    @JsonIgnore // Important pour éviter les boucles infinies lors de la conversion JSON
    private Module module;
}
