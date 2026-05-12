package tn.spring.gateway.Controllers;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/assistant")
public class AssistantProxyController {

    private final ProxyForwarder proxy;

    @Value("${gateway.services.quiz-url}")
    private String quizServiceUrl;

    public AssistantProxyController(ProxyForwarder proxy) {
        this.proxy = proxy;
    }

    @PostMapping("/chat")
    public ResponseEntity<String> chat(@RequestBody Object body, HttpServletRequest request) {
        return proxy.forward(quizServiceUrl + "/api/assistant/chat", HttpMethod.POST, body, request);
    }
}
