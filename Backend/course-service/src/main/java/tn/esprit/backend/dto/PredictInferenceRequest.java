package tn.esprit.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PredictInferenceRequest {

    @JsonProperty("question_type")
    private String questionType;

    @JsonProperty("time_on_question_sec")
    private Double timeSpentSeconds;

    @JsonProperty("selection_change_count")
    private Integer answerChanges;

    @JsonProperty("max_points")
    private Double maxPoints;

    @JsonProperty("score_awarded")
    private Double scoreAwarded;

    @JsonProperty("is_fully_correct")
    private Boolean fullyCorrect;

    @JsonProperty("text_answer_length")
    private Integer textAnswerLength;

    public String getQuestionType() {
        return questionType;
    }

    public void setQuestionType(String questionType) {
        this.questionType = questionType;
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

    public Double getMaxPoints() {
        return maxPoints;
    }

    public void setMaxPoints(Double maxPoints) {
        this.maxPoints = maxPoints;
    }

    public Double getScoreAwarded() {
        return scoreAwarded;
    }

    public void setScoreAwarded(Double scoreAwarded) {
        this.scoreAwarded = scoreAwarded;
    }

    public Boolean getFullyCorrect() {
        return fullyCorrect;
    }

    public void setFullyCorrect(Boolean fullyCorrect) {
        this.fullyCorrect = fullyCorrect;
    }

    public Integer getTextAnswerLength() {
        return textAnswerLength;
    }

    public void setTextAnswerLength(Integer textAnswerLength) {
        this.textAnswerLength = textAnswerLength;
    }
}
