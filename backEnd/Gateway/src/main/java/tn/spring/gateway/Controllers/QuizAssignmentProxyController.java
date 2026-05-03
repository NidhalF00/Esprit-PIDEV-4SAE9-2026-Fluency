package tn.spring.gateway.Controllers;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/quiz-assignments")
public class QuizAssignmentProxyController {

    private final ProxyForwarder proxy;

    @Value("${gateway.services.quiz-url}")
    private String quizServiceUrl;

    public QuizAssignmentProxyController(ProxyForwarder proxy) {
        this.proxy = proxy;
    }

    private String quizAssignmentBase() {
        return quizServiceUrl + "/api/quiz-assignments";
    }

    @PostMapping
    public ResponseEntity<String> assignQuiz(@RequestBody Object body, HttpServletRequest req) {
        return proxy.forward(quizAssignmentBase(), HttpMethod.POST, body, req);
    }

    @GetMapping("/student/{studentId}/quizzes")
    public ResponseEntity<String> getAssignedQuizzesByStudent(@PathVariable String studentId,
                                                              HttpServletRequest req) {
        return proxy.forward(quizAssignmentBase() + "/student/" + studentId + "/quizzes", HttpMethod.GET, null, req);
    }
}
