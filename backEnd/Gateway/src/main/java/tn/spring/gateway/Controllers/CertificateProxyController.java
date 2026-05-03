package tn.spring.gateway.Controllers;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/api/certificates")
public class CertificateProxyController {

    private final ProxyForwarder proxy;
    private final RestTemplate restTemplate;

    @Value("${gateway.services.quiz-url}")
    private String quizServiceUrl;

    public CertificateProxyController(ProxyForwarder proxy, RestTemplate restTemplate) {
        this.proxy = proxy;
        this.restTemplate = restTemplate;
    }

    private String certificateServiceBase() {
        return quizServiceUrl + "/api/certificates";
    }

    @GetMapping("/verify/{id}")
    public ResponseEntity<String> verifyCertificate(@PathVariable Long id, HttpServletRequest req) {
        return proxy.forward(certificateServiceBase() + "/verify/" + id, HttpMethod.GET, null, req);
    }

    @GetMapping("/by-course/{courseId}/student/{studentId}")
    public ResponseEntity<String> getCertificateByCourseAndStudent(@PathVariable Long courseId,
                                                                   @PathVariable String studentId,
                                                                   HttpServletRequest req) {
        return proxy.forward(
                certificateServiceBase() + "/by-course/" + courseId + "/student/" + studentId,
                HttpMethod.GET,
                null,
                req
        );
    }

    @PostMapping("/generate-and-send")
    public ResponseEntity<byte[]> generateAndSend(@RequestBody Object body, HttpServletRequest req) {
        HttpHeaders headers = new HttpHeaders();

        String auth = req.getHeader(HttpHeaders.AUTHORIZATION);
        if (auth != null) {
            headers.set(HttpHeaders.AUTHORIZATION, auth);
        }

        String accept = req.getHeader(HttpHeaders.ACCEPT);
        if (accept != null) {
            headers.set(HttpHeaders.ACCEPT, accept);
        }

        headers.setContentType(MediaType.APPLICATION_JSON);

        ResponseEntity<byte[]> response = restTemplate.exchange(
                certificateServiceBase() + "/generate-and-send",
                HttpMethod.POST,
                new HttpEntity<>(body, headers),
                byte[].class
        );

        HttpHeaders out = new HttpHeaders();
        MediaType contentType = response.getHeaders().getContentType();
        if (contentType != null) {
            out.setContentType(contentType);
        }
        String disposition = response.getHeaders().getFirst(HttpHeaders.CONTENT_DISPOSITION);
        if (disposition != null) {
            out.set(HttpHeaders.CONTENT_DISPOSITION, disposition);
        }

        byte[] responseBody = response.getBody() != null ? response.getBody() : new byte[0];
        return ResponseEntity.status(response.getStatusCode())
                .headers(out)
                .body(responseBody);
    }
}
