package tn.spring.gateway.Controllers;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/api/quiz-attempts")
public class QuizAttemptProxyController {

    private final ProxyForwarder proxy;

    @Value("${gateway.services.quiz-url}")
    private String quizServiceUrl;

    public QuizAttemptProxyController(ProxyForwarder proxy) {
        this.proxy = proxy;
    }

    private String quizAttemptBase() {
        return quizServiceUrl + "/api/quiz-attempts";
    }

    @PostMapping("/submit")
    public ResponseEntity<String> submitQuiz(@RequestBody Object body, HttpServletRequest req) {
        return proxy.forward(quizAttemptBase() + "/submit", HttpMethod.POST, body, req);
    }

    @GetMapping("/status")
    public ResponseEntity<String> getQuizStatus(@RequestParam Long quizId,
                                                @RequestParam String studentId,
                                                HttpServletRequest req) {
        String url = UriComponentsBuilder.fromUriString(quizAttemptBase() + "/status")
                .queryParam("quizId", quizId)
                .queryParam("studentId", studentId)
                .toUriString();

        return proxy.forward(url, HttpMethod.GET, null, req);
    }
}
