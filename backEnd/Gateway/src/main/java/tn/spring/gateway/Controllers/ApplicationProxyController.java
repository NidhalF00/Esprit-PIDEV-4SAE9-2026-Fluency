package tn.spring.gateway.Controllers;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/api/applications")
public class ApplicationProxyController {

    private final ProxyForwarder proxy;
    private final RestTemplate restTemplate;

    @Value("${gateway.services.quiz-url}")
    private String quizServiceUrl;

    public ApplicationProxyController(ProxyForwarder proxy, RestTemplate restTemplate) {
        this.proxy = proxy;
        this.restTemplate = restTemplate;
    }

    private String applicationServiceBase() {
        return quizServiceUrl + "/api/applications";
    }

    @GetMapping
    public ResponseEntity<String> getAllApplications(HttpServletRequest req) {
        return proxy.forward(applicationServiceBase(), HttpMethod.GET, null, req);
    }

    @PutMapping("/{id}/statusA")
    public ResponseEntity<String> changeStatusToAccepted(@PathVariable Long id,
                                                         @RequestParam String status,
                                                         @RequestParam String teacherEmail,
                                                         @RequestParam String teacherPassword,
                                                         HttpServletRequest req) {
        String url = UriComponentsBuilder.fromUriString(applicationServiceBase() + "/" + id + "/statusA")
                .queryParam("status", status)
                .queryParam("teacherEmail", teacherEmail)
                .queryParam("teacherPassword", teacherPassword)
                .toUriString();
        return proxy.forward(url, HttpMethod.PUT, null, req);
    }

    @PutMapping("/{id}/statusR")
    public ResponseEntity<String> changeStatusToRejected(@PathVariable Long id,
                                                         @RequestParam String status,
                                                         HttpServletRequest req) {
        String url = UriComponentsBuilder.fromUriString(applicationServiceBase() + "/" + id + "/statusR")
                .queryParam("status", status)
                .toUriString();
        return proxy.forward(url, HttpMethod.PUT, null, req);
    }

    @GetMapping("/download/{id}")
    public ResponseEntity<ByteArrayResource> downloadCv(@PathVariable Long id, HttpServletRequest req) {
        HttpHeaders headers = new HttpHeaders();
        String auth = req.getHeader(HttpHeaders.AUTHORIZATION);
        if (auth != null) {
            headers.set(HttpHeaders.AUTHORIZATION, auth);
        }

        ResponseEntity<byte[]> response = restTemplate.exchange(
                applicationServiceBase() + "/download/" + id,
                HttpMethod.GET,
                new HttpEntity<>(headers),
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

        byte[] body = response.getBody() != null ? response.getBody() : new byte[0];
        return ResponseEntity.status(response.getStatusCode())
                .headers(out)
                .body(new ByteArrayResource(body));
    }
}
