package tn.esprit.courses.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.courses.Entity.Quiz;
import tn.esprit.courses.services.QuizService;

import java.util.List;

@RestController
@RequestMapping("/api/quizzes")
@RequiredArgsConstructor
public class QuizController {

    private final QuizService quizService;

    @GetMapping
    public ResponseEntity<List<Quiz>> getAll() {
        return ResponseEntity.ok(quizService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Quiz> getById(@PathVariable Long id) {
        return ResponseEntity.ok(quizService.getById(id));
    }

    @PostMapping
    public ResponseEntity<Quiz> create(
            @RequestBody Quiz quiz,
            @RequestParam Long coursId) {
        Quiz created = quizService.create(quiz, coursId);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Quiz> update(
            @PathVariable Long id,
            @RequestBody Quiz quiz,
            @RequestParam(required = false) Long coursId) {
        return ResponseEntity.ok(quizService.update(id, quiz, coursId));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        quizService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
