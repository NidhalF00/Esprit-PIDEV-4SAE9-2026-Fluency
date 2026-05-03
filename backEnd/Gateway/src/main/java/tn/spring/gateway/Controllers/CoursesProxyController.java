package tn.spring.gateway.Controllers;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/courses")
public class CoursesProxyController {

    private final ProxyForwarder proxy;

    @Value("${gateway.services.quiz-url}")
    private String quizServiceUrl;

    public CoursesProxyController(ProxyForwarder proxy) {
        this.proxy = proxy;
    }

    private String coursesServiceBase() {
        return quizServiceUrl + "/api/courses";
    }

    // ======= COURSES =======
    @GetMapping("/all")
    public ResponseEntity<String> getAllCourses(HttpServletRequest req) {
        // plus de "/courses/all" en double
        return proxy.forward(coursesServiceBase() + "/all", HttpMethod.GET, null, req);
    }

    @GetMapping("/{id}")
    public ResponseEntity<String> getCourseById(@PathVariable Long id, HttpServletRequest req) {
        // plus de "/courses/getCourseById/" en double
        return proxy.forward(coursesServiceBase() + "/getCourseById/" + id, HttpMethod.GET, null, req);
    }
}
