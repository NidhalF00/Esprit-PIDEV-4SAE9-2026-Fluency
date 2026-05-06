package tn.esprit.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.backend.Entity.Reponse;
import tn.esprit.backend.services.ReponseService;

import java.util.List;

@RestController
@RequestMapping("/api/reponses")
@RequiredArgsConstructor
public class ReponseController {

    private final ReponseService reponseService;

    @GetMapping
    public ResponseEntity<List<Reponse>> getAll() {
        return ResponseEntity.ok(reponseService.getAll());
    }

    @GetMapping("/question/{questionId}")
    public ResponseEntity<List<Reponse>> getByQuestion(@PathVariable Long questionId) {
        return ResponseEntity.ok(reponseService.getByQuestionId(questionId));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Reponse> getById(@PathVariable Long id) {
        return ResponseEntity.ok(reponseService.getById(id));
    }

    @PostMapping
    public ResponseEntity<Reponse> create(
            @RequestBody Reponse reponse,
            @RequestParam Long questionId) {
        Reponse created = reponseService.create(reponse, questionId);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Reponse> update(
            @PathVariable Long id,
            @RequestBody Reponse reponse,
            @RequestParam(required = false) Long questionId) {
        return ResponseEntity.ok(reponseService.update(id, reponse, questionId));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        reponseService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
