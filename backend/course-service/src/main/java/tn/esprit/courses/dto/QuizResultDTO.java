package tn.esprit.courses.dto;

/**
 * Résultat après soumission / correction d'un quiz.
 */
public class QuizResultDTO {

    private Long quizId;
    private double score;
    private double scoreMax;
    private int totalQuestions;
    private int bonnesReponses;
    private int mauvaisesReponses;
    private double pourcentage;
    private boolean valide;

    private boolean certificatGenere;
    private boolean certificatDejaObtenu;
    private Long certificatId;
    private String codeCertificat;
    private String messageCertificat;
    /** GET relatif pour télécharger le PDF du certificat (ex. {@code /api/certificats/12/pdf}). */
    private String certificatPdfUrl;
    /** Indique si la notification email a bien été envoyée (aligné avec le front Angular). */
    private Boolean emailEnvoye;
    /** Indique si un PDF est disponible en téléchargement. */
    private Boolean pdfDisponible;

    public QuizResultDTO() {
    }

    public QuizResultDTO(Long quizId, double score, double scoreMax, int totalQuestions,
                         int bonnesReponses, int mauvaisesReponses, double pourcentage, boolean valide) {
        this.quizId = quizId;
        this.score = score;
        this.scoreMax = scoreMax;
        this.totalQuestions = totalQuestions;
        this.bonnesReponses = bonnesReponses;
        this.mauvaisesReponses = mauvaisesReponses;
        this.pourcentage = pourcentage;
        this.valide = valide;
    }

    public Long getQuizId() {
        return quizId;
    }

    public void setQuizId(Long quizId) {
        this.quizId = quizId;
    }

    public double getScore() {
        return score;
    }

    public void setScore(double score) {
        this.score = score;
    }

    public double getScoreMax() {
        return scoreMax;
    }

    public void setScoreMax(double scoreMax) {
        this.scoreMax = scoreMax;
    }

    public int getTotalQuestions() {
        return totalQuestions;
    }

    public void setTotalQuestions(int totalQuestions) {
        this.totalQuestions = totalQuestions;
    }

    public int getBonnesReponses() {
        return bonnesReponses;
    }

    public void setBonnesReponses(int bonnesReponses) {
        this.bonnesReponses = bonnesReponses;
    }

    public int getMauvaisesReponses() {
        return mauvaisesReponses;
    }

    public void setMauvaisesReponses(int mauvaisesReponses) {
        this.mauvaisesReponses = mauvaisesReponses;
    }

    public double getPourcentage() {
        return pourcentage;
    }

    public void setPourcentage(double pourcentage) {
        this.pourcentage = pourcentage;
    }

    public boolean isValide() {
        return valide;
    }

    public void setValide(boolean valide) {
        this.valide = valide;
    }

    public boolean isCertificatGenere() {
        return certificatGenere;
    }

    public void setCertificatGenere(boolean certificatGenere) {
        this.certificatGenere = certificatGenere;
    }

    public boolean isCertificatDejaObtenu() {
        return certificatDejaObtenu;
    }

    public void setCertificatDejaObtenu(boolean certificatDejaObtenu) {
        this.certificatDejaObtenu = certificatDejaObtenu;
    }

    public Long getCertificatId() {
        return certificatId;
    }

    public void setCertificatId(Long certificatId) {
        this.certificatId = certificatId;
    }

    public String getCodeCertificat() {
        return codeCertificat;
    }

    public void setCodeCertificat(String codeCertificat) {
        this.codeCertificat = codeCertificat;
    }

    public String getMessageCertificat() {
        return messageCertificat;
    }

    public void setMessageCertificat(String messageCertificat) {
        this.messageCertificat = messageCertificat;
    }

    public String getCertificatPdfUrl() {
        return certificatPdfUrl;
    }

    public void setCertificatPdfUrl(String certificatPdfUrl) {
        this.certificatPdfUrl = certificatPdfUrl;
    }

    public Boolean getEmailEnvoye() {
        return emailEnvoye;
    }

    public void setEmailEnvoye(Boolean emailEnvoye) {
        this.emailEnvoye = emailEnvoye;
    }

    public Boolean getPdfDisponible() {
        return pdfDisponible;
    }

    public void setPdfDisponible(Boolean pdfDisponible) {
        this.pdfDisponible = pdfDisponible;
    }
}
