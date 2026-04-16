package tn.esprit.backend.services;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import tn.esprit.backend.client.PythonPredictClient;
import tn.esprit.backend.dto.PredictInferenceRequest;
import tn.esprit.backend.dto.PredictInferenceResponse;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class AnswerInferenceServiceTest {

    @Mock
    private PythonPredictClient pythonPredictClient;

    @InjectMocks
    private AnswerInferenceService answerInferenceService;

    @Test
    void shouldReturnInferenceWhenPythonServiceSucceeds() {
        PredictInferenceResponse pythonResponse = new PredictInferenceResponse();
        pythonResponse.setLabel(PredictInferenceResponse.LABEL_KNEW);
        pythonResponse.setReason("Correct and fast");
        pythonResponse.setConfidence(0.93);
        when(pythonPredictClient.infer(any(PredictInferenceRequest.class))).thenReturn(pythonResponse);

        PredictInferenceRequest request = new PredictInferenceRequest();
        request.setQuestionType("MCQ");
        request.setScoreAwarded(2.0);
        request.setMaxPoints(2.0);
        request.setFullyCorrect(true);

        PredictInferenceResponse result = answerInferenceService.inferWithFallback(request, 10L, 20L);

        assertEquals(PredictInferenceResponse.LABEL_KNEW, result.getLabel());
        assertEquals("Correct and fast", result.getReason());
        assertEquals(0.93, result.getConfidence());
    }

    @Test
    void shouldFallbackToUncertainWhenPythonServiceFails() {
        when(pythonPredictClient.infer(any(PredictInferenceRequest.class)))
                .thenThrow(new RuntimeException("timeout"));

        PredictInferenceRequest request = new PredictInferenceRequest();
        request.setQuestionType("MCQ");

        PredictInferenceResponse result = answerInferenceService.inferWithFallback(request, 10L, 20L);

        assertNotNull(result);
        assertEquals(PredictInferenceResponse.LABEL_UNCERTAIN, result.getLabel());
        assertEquals("Inference service unavailable", result.getReason());
    }
}
