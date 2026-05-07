package tn.esprit.courses.Entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "quiz_answer_inference")
public class QuizAnswerInference {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "quiz_id", nullable = false)
    private Long quizId;

    @Column(name = "question_id", nullable = false)
    private Long questionId;

    @Column(name = "selected_reponse_id")
    private Long selectedReponseId;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "question_type", length = 100)
    private String questionType;

    @Column(name = "score_awarded")
    private Double scoreAwarded;

    @Column(name = "max_points")
    private Double maxPoints;

    @Column(name = "time_spent_seconds")
    private Double timeSpentSeconds;

    @Column(name = "answer_changes")
    private Integer answerChanges;

    @Column(name = "inference_label", length = 20, nullable = false)
    private String inferenceLabel;

    @Column(name = "inference_reason", length = 1000)
    private String inferenceReason;

    @Column(name = "inference_confidence")
    private Double inferenceConfidence;

    @Column(name = "inference_generated_at", nullable = false)
    private LocalDateTime inferenceGeneratedAt;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getQuizId() {
        return quizId;
    }

    public void setQuizId(Long quizId) {
        this.quizId = quizId;
    }

    public Long getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Long questionId) {
        this.questionId = questionId;
    }

    public Long getSelectedReponseId() {
        return selectedReponseId;
    }

    public void setSelectedReponseId(Long selectedReponseId) {
        this.selectedReponseId = selectedReponseId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getQuestionType() {
        return questionType;
    }

    public void setQuestionType(String questionType) {
        this.questionType = questionType;
    }

    public Double getScoreAwarded() {
        return scoreAwarded;
    }

    public void setScoreAwarded(Double scoreAwarded) {
        this.scoreAwarded = scoreAwarded;
    }

    public Double getMaxPoints() {
        return maxPoints;
    }

    public void setMaxPoints(Double maxPoints) {
        this.maxPoints = maxPoints;
    }

    public Double getTimeSpentSeconds() {
        return timeSpentSeconds;
    }

    public void setTimeSpentSeconds(Double timeSpentSeconds) {
        this.timeSpentSeconds = timeSpentSeconds;
    }

    public Integer getAnswerChanges() {
        return answerChanges;
    }

    public void setAnswerChanges(Integer answerChanges) {
        this.answerChanges = answerChanges;
    }

    public String getInferenceLabel() {
        return inferenceLabel;
    }

    public void setInferenceLabel(String inferenceLabel) {
        this.inferenceLabel = inferenceLabel;
    }

    public String getInferenceReason() {
        return inferenceReason;
    }

    public void setInferenceReason(String inferenceReason) {
        this.inferenceReason = inferenceReason;
    }

    public Double getInferenceConfidence() {
        return inferenceConfidence;
    }

    public void setInferenceConfidence(Double inferenceConfidence) {
        this.inferenceConfidence = inferenceConfidence;
    }

    public LocalDateTime getInferenceGeneratedAt() {
        return inferenceGeneratedAt;
    }

    public void setInferenceGeneratedAt(LocalDateTime inferenceGeneratedAt) {
        this.inferenceGeneratedAt = inferenceGeneratedAt;
    }
}
