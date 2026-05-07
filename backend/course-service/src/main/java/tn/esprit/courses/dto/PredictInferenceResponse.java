package tn.esprit.courses.dto;

public class PredictInferenceResponse {

    public static final String LABEL_KNEW = "KNEW";
    public static final String LABEL_GUESSED = "GUESSED";
    public static final String LABEL_UNCERTAIN = "UNCERTAIN";

    private String label;
    private Double confidence;
    private String reason;

    public static PredictInferenceResponse uncertain(String reason) {
        PredictInferenceResponse response = new PredictInferenceResponse();
        response.setLabel(LABEL_UNCERTAIN);
        response.setReason(reason);
        response.setConfidence(0.0);
        return response;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public Double getConfidence() {
        return confidence;
    }

    public void setConfidence(Double confidence) {
        this.confidence = confidence;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }
}
