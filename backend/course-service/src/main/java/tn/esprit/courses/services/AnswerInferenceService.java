package tn.esprit.courses.services;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import tn.esprit.courses.client.PythonPredictClient;
import tn.esprit.courses.dto.PredictInferenceRequest;
import tn.esprit.courses.dto.PredictInferenceResponse;

@Service
@RequiredArgsConstructor
@Slf4j
public class AnswerInferenceService {

    private final PythonPredictClient pythonPredictClient;

    public PredictInferenceResponse inferWithFallback(PredictInferenceRequest request, Long quizId, Long questionId) {
        try {
            PredictInferenceResponse response = pythonPredictClient.infer(request);
            if (!isValidLabel(response)) {
                log.warn("python-predict returned invalid payload for quizId={}, questionId={}", quizId, questionId);
                return PredictInferenceResponse.uncertain("Invalid response from inference service");
            }
            log.info(
                    "Inference computed for quizId={}, questionId={}, label={}",
                    quizId,
                    questionId,
                    response.getLabel()
            );
            return response;
        } catch (Exception ex) {
            log.warn(
                    "python-predict unavailable for quizId={}, questionId={} -> fallback UNCERTAIN: {}",
                    quizId,
                    questionId,
                    ex.getMessage()
            );
            return PredictInferenceResponse.uncertain("Inference service unavailable");
        }
    }

    private boolean isValidLabel(PredictInferenceResponse response) {
        if (response == null || response.getLabel() == null) {
            return false;
        }
        return PredictInferenceResponse.LABEL_KNEW.equals(response.getLabel())
                || PredictInferenceResponse.LABEL_GUESSED.equals(response.getLabel())
                || PredictInferenceResponse.LABEL_UNCERTAIN.equals(response.getLabel());
    }
}
