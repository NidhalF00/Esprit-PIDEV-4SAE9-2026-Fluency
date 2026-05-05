package tn.esprit.backend.dto;

/**
 * Telemetry provided by frontend when a student submits an answer.
 */
public class AnswerSubmissionMetaDTO {

    private Double timeSpentSeconds;
    private Integer answerChanges;
    private Integer textAnswerLength;

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

    public Integer getTextAnswerLength() {
        return textAnswerLength;
    }

    public void setTextAnswerLength(Integer textAnswerLength) {
        this.textAnswerLength = textAnswerLength;
    }
}
