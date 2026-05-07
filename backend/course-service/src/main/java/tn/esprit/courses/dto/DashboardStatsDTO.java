package tn.esprit.courses.dto;

/**
 * Statistiques globales pour un tableau de bord administrateur.
 */
public class DashboardStatsDTO {

    private long totalModules;
    private long totalCours;
    private long totalQuiz;
    private long totalQuestions;
    private long totalReponses;
    /** Moyenne des {@code scoreMax} des quiz (si aucun score, 0). */
    private double moyenneScoreMaxQuiz;

    public DashboardStatsDTO() {
    }

    public DashboardStatsDTO(long totalModules, long totalCours, long totalQuiz, long totalQuestions,
                             long totalReponses, double moyenneScoreMaxQuiz) {
        this.totalModules = totalModules;
        this.totalCours = totalCours;
        this.totalQuiz = totalQuiz;
        this.totalQuestions = totalQuestions;
        this.totalReponses = totalReponses;
        this.moyenneScoreMaxQuiz = moyenneScoreMaxQuiz;
    }

    public long getTotalModules() {
        return totalModules;
    }

    public void setTotalModules(long totalModules) {
        this.totalModules = totalModules;
    }

    public long getTotalCours() {
        return totalCours;
    }

    public void setTotalCours(long totalCours) {
        this.totalCours = totalCours;
    }

    public long getTotalQuiz() {
        return totalQuiz;
    }

    public void setTotalQuiz(long totalQuiz) {
        this.totalQuiz = totalQuiz;
    }

    public long getTotalQuestions() {
        return totalQuestions;
    }

    public void setTotalQuestions(long totalQuestions) {
        this.totalQuestions = totalQuestions;
    }

    public long getTotalReponses() {
        return totalReponses;
    }

    public void setTotalReponses(long totalReponses) {
        this.totalReponses = totalReponses;
    }

    public double getMoyenneScoreMaxQuiz() {
        return moyenneScoreMaxQuiz;
    }

    public void setMoyenneScoreMaxQuiz(double moyenneScoreMaxQuiz) {
        this.moyenneScoreMaxQuiz = moyenneScoreMaxQuiz;
    }
}
