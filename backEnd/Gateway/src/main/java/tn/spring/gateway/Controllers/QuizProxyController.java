package tn.spring.gateway.Controllers;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/quiz")
public class QuizProxyController {

    private final ProxyForwarder proxy;

    @Value("${gateway.services.quiz-url}")
    private String quizServiceUrl;

    public QuizProxyController(ProxyForwarder proxy) {
        this.proxy = proxy;
    }

    private String quizServiceBase() {
        return quizServiceUrl + "/api/quizzes";
    }

    // GET all quizzes
    @GetMapping("/all")
    public ResponseEntity<String> getAllQuizzes(HttpServletRequest req) {
        // 🔹 juste forward vers /api/quizzes
        return proxy.forward(quizServiceBase(), HttpMethod.GET, null, req);
    }

    // GET quiz by id
    @GetMapping("/{id}")
    public ResponseEntity<String> getQuizById(@PathVariable Long id, HttpServletRequest req) {
        return proxy.forward(quizServiceBase() + "/" + id, HttpMethod.GET, null, req);
    }

    // GET quizzes by course
    @GetMapping("/course/{courseId}")
    public ResponseEntity<String> getQuizzesByCourse(@PathVariable Long courseId, HttpServletRequest req) {
        return proxy.forward(quizServiceBase() + "/course/" + courseId, HttpMethod.GET, null, req);
    }

    @GetMapping("/{quizId}/questions")
    public ResponseEntity<String> getQuizQuestions(@PathVariable Long quizId, HttpServletRequest req) {
        return proxy.forward(quizServiceBase() + "/" + quizId + "/questions", HttpMethod.GET, null, req);
    }

    @GetMapping("/questions/{questionId}/answers")
    public ResponseEntity<String> getQuestionAnswers(@PathVariable Long questionId, HttpServletRequest req) {
        return proxy.forward(quizServiceBase() + "/questions/" + questionId + "/answers", HttpMethod.GET, null, req);
    }

    @PostMapping("/course/{courseId}")
    public ResponseEntity<String> createQuiz(@PathVariable Long courseId,
                                             @RequestBody Object body,
                                             HttpServletRequest req) {
        return proxy.forward(quizServiceBase() + "/course/" + courseId, HttpMethod.POST, body, req);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateQuiz(@PathVariable Long id,
                                             @RequestBody Object body,
                                             HttpServletRequest req) {
        return proxy.forward(quizServiceBase() + "/" + id, HttpMethod.PUT, body, req);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteQuiz(@PathVariable Long id, HttpServletRequest req) {
        return proxy.forward(quizServiceBase() + "/" + id, HttpMethod.DELETE, null, req);
    }

    @PostMapping("/quizAddQuestion/{quizId}")
    public ResponseEntity<String> addQuestion(@PathVariable Long quizId,
                                              @RequestBody Object body,
                                              HttpServletRequest req) {
        return proxy.forward(quizServiceBase() + "/quizAddQuestion/" + quizId, HttpMethod.POST, body, req);
    }

    @PutMapping("/question/{questionId}")
    public ResponseEntity<String> updateQuestion(@PathVariable Long questionId,
                                                 @RequestBody Object body,
                                                 HttpServletRequest req) {
        return proxy.forward(quizServiceBase() + "/question/" + questionId, HttpMethod.PUT, body, req);
    }

    @DeleteMapping("/question/{questionId}")
    public ResponseEntity<String> deleteQuestion(@PathVariable Long questionId, HttpServletRequest req) {
        return proxy.forward(quizServiceBase() + "/question/" + questionId, HttpMethod.DELETE, null, req);
    }

    @PostMapping("/{questionId}/answers")
    public ResponseEntity<String> addAnswer(@PathVariable Long questionId,
                                            @RequestBody Object body,
                                            HttpServletRequest req) {
        return proxy.forward(quizServiceBase() + "/" + questionId + "/answers", HttpMethod.POST, body, req);
    }

    @PutMapping("/answers/{answerId}")
    public ResponseEntity<String> updateAnswer(@PathVariable Long answerId,
                                               @RequestBody Object body,
                                               HttpServletRequest req) {
        return proxy.forward(quizServiceBase() + "/answers/" + answerId, HttpMethod.PUT, body, req);
    }

    @DeleteMapping("/answers/{answerId}")
    public ResponseEntity<String> deleteAnswer(@PathVariable Long answerId, HttpServletRequest req) {
        return proxy.forward(quizServiceBase() + "/answers/" + answerId, HttpMethod.DELETE, null, req);
    }
}
