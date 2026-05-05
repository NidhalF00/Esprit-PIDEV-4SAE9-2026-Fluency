package tn.esprit.backend.dto;

import java.util.HashMap;
import java.util.Map;

/**
 * Body JSON pour soumettre un quiz.
 * Les clés de {@code reponsesEtudiant} sont les identifiants de question (en chaîne dans le JSON).
 */
public class QuizSubmissionDTO {

    /** Identifiant de l’étudiant : obligatoire pour créer/envoyer un certificat si le quiz est réussi. */
    private Long userId;

    private Map<String, Long> reponsesEtudiant = new HashMap<>();

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Map<String, Long> getReponsesEtudiant() {
        return reponsesEtudiant;
    }

    public void setReponsesEtudiant(Map<String, Long> reponsesEtudiant) {
        this.reponsesEtudiant = reponsesEtudiant != null ? reponsesEtudiant : new HashMap<>();
    }
}
