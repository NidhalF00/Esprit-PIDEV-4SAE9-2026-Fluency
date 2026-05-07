package tn.esprit.courses.dto;

import java.time.LocalDateTime;

public class QuizInferenceResultDTO {

    private Long questionId;
    private Long selectedReponseId;
    private String questionType;
    private Double scoreAwarded;
    private Double maxPoints;
    private String label;
    private String reason;
    private Double confidence;
    private LocalDateTime generatedAt;

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

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public Double getConfidence() {
        return confidence;
    }

    public void setConfidence(Double confidence) {
        this.confidence = confidence;
    }

    public LocalDateTime getGeneratedAt() {
        return generatedAt;
    }

    public void setGeneratedAt(LocalDateTime generatedAt) {
        this.generatedAt = generatedAt;
    }
}
