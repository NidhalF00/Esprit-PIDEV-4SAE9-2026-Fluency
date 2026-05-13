package tn.spring.gateway.Controllers;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestClientResponseException;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@RequestMapping("/api/tutor-cvs")
public class TutorCvProxyController {

    private static final String EDIT_TOKEN_HEADER = "X-CV-EDIT-TOKEN";

    private final RestTemplate restTemplate;

    @Value("${gateway.services.user-url}")
    private String userServiceUrl;

    public TutorCvProxyController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    private String tutorCvBase() {
        return userServiceUrl + "/api/tutor-cvs";
    }

    @PostMapping
    public ResponseEntity<String> create(@RequestBody Object body, HttpServletRequest request) {
        return forward(tutorCvBase(), HttpMethod.POST, body, request);
    }

    @PostMapping("/check-english")
    public ResponseEntity<String> checkEnglish(@RequestBody Object body, HttpServletRequest request) {
        return forward(tutorCvBase() + "/check-english", HttpMethod.POST, body, request, false);
    }

    @GetMapping("/{id}")
    public ResponseEntity<String> getById(@PathVariable Long id, HttpServletRequest request) {
        return forward(tutorCvBase() + "/" + id, HttpMethod.GET, null, request);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> update(
            @PathVariable Long id,
            @RequestBody Object body,
            HttpServletRequest request
    ) {
        return forward(tutorCvBase() + "/" + id, HttpMethod.PUT, body, request);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id, HttpServletRequest request) {
        return forward(tutorCvBase() + "/" + id, HttpMethod.DELETE, null, request);
    }

    private ResponseEntity<String> forward(String url, HttpMethod method, Object body, HttpServletRequest request) {
        return forward(url, method, body, request, true);
    }

    private ResponseEntity<String> forward(
            String url,
            HttpMethod method,
            Object body,
            HttpServletRequest request,
            boolean includeEditToken
    ) {
        HttpHeaders headers = requestHeaders(request, body, includeEditToken);
        HttpEntity<Object> entity = new HttpEntity<>(body, headers);

        try {
            ResponseEntity<String> response = restTemplate.exchange(url, method, entity, String.class);
            return ResponseEntity
                    .status(response.getStatusCode())
                    .headers(responseHeaders(response.getHeaders()))
                    .body(response.getBody());
        } catch (RestClientResponseException ex) {
            return ResponseEntity
                    .status(ex.getStatusCode())
                    .headers(responseHeaders(ex.getResponseHeaders()))
                    .body(ex.getResponseBodyAsString());
        } catch (RestClientException ex) {
            return ResponseEntity
                    .status(503)
                    .body("{\"error\":\"UPSTREAM_SERVICE_UNAVAILABLE\"}");
        }
    }

    private HttpHeaders requestHeaders(HttpServletRequest request, Object body, boolean includeEditToken) {
        HttpHeaders headers = new HttpHeaders();

        String editToken = request.getHeader(EDIT_TOKEN_HEADER);
        if (includeEditToken && editToken != null) {
            headers.set(EDIT_TOKEN_HEADER, editToken);
        }

        String accept = request.getHeader(HttpHeaders.ACCEPT);
        if (accept != null) {
            headers.set(HttpHeaders.ACCEPT, accept);
        }

        String contentType = request.getHeader(HttpHeaders.CONTENT_TYPE);
        if (contentType != null) {
            headers.set(HttpHeaders.CONTENT_TYPE, contentType);
        }

        if (body != null && headers.getContentType() == null) {
            headers.setContentType(MediaType.APPLICATION_JSON);
        }

        return headers;
    }

    private HttpHeaders responseHeaders(HttpHeaders sourceHeaders) {
        HttpHeaders headers = new HttpHeaders();
        if (sourceHeaders == null) {
            return headers;
        }

        MediaType contentType = sourceHeaders.getContentType();
        if (contentType != null) {
            headers.setContentType(contentType);
        }

        List<String> cookies = sourceHeaders.get(HttpHeaders.SET_COOKIE);
        if (cookies != null) {
            headers.put(HttpHeaders.SET_COOKIE, cookies);
        }

        return headers;
    }
}
