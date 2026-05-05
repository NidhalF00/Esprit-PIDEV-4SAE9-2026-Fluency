package tn.esprit.backend.client;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;
import tn.esprit.backend.dto.PredictInferenceRequest;
import tn.esprit.backend.dto.PredictInferenceResponse;

@Component
@RequiredArgsConstructor
public class PythonPredictClient {

    private final RestClient pythonPredictRestClient;

    public PredictInferenceResponse infer(PredictInferenceRequest request) {
        return pythonPredictRestClient.post()
                .uri("/infer")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .body(request)
                .retrieve()
                .body(PredictInferenceResponse.class);
    }
}
