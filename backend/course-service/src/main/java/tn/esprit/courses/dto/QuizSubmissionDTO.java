package tn.esprit.courses.dto;

import java.util.HashMap;
import java.util.Map;

/**
 * Body JSON pour soumettre un quiz.
 * Les clés de {@code reponsesEtudiant} sont les identifiants de question (en chaîne dans le JSON).
 */
public class QuizSubmissionDTO {

    /** Identifiant de l’étudiant : obligatoire pour créer/envoyer un certificat si le quiz est réussi. */
    private Long userId;
    private String userName;
    private String userEmail;

    private Map<String, Long> reponsesEtudiant = new HashMap<>();

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }
    public String getUserName() { return userName; }
    public void setUserName(String userName) { this.userName = userName; }
    public String getUserEmail() { return userEmail; }
    public void setUserEmail(String userEmail) { this.userEmail = userEmail; }

    public Map<String, Long> getReponsesEtudiant() {
        return reponsesEtudiant;
    }

    public void setReponsesEtudiant(Map<String, Long> reponsesEtudiant) {
        this.reponsesEtudiant = reponsesEtudiant != null ? reponsesEtudiant : new HashMap<>();
    }
}
