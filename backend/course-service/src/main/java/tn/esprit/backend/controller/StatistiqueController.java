package tn.esprit.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.backend.dto.DashboardStatsDTO;
import tn.esprit.backend.services.StatistiqueService;

@RestController
@RequestMapping("/api/statistiques")
@RequiredArgsConstructor
public class StatistiqueController {

    private final StatistiqueService statistiqueService;

    @GetMapping("/global")
    public ResponseEntity<DashboardStatsDTO> global() {
        return ResponseEntity.ok(statistiqueService.getGlobalStats());
    }

    @GetMapping("/modules/count")
    public ResponseEntity<Long> countModules() {
        return ResponseEntity.ok(statistiqueService.countModules());
    }

    @GetMapping("/cours/count")
    public ResponseEntity<Long> countCours() {
        return ResponseEntity.ok(statistiqueService.countCours());
    }

    @GetMapping("/quizzes/count")
    public ResponseEntity<Long> countQuiz() {
        return ResponseEntity.ok(statistiqueService.countQuiz());
    }

    @GetMapping("/questions/count")
    public ResponseEntity<Long> countQuestions() {
        return ResponseEntity.ok(statistiqueService.countQuestions());
    }

    @GetMapping("/reponses/count")
    public ResponseEntity<Long> countReponses() {
        return ResponseEntity.ok(statistiqueService.countReponses());
    }

    @GetMapping("/modules/{moduleId}/quizzes/count")
    public ResponseEntity<Long> countQuizParModule(@PathVariable Long moduleId) {
        return ResponseEntity.ok(statistiqueService.countQuizByModule(moduleId));
    }

    @GetMapping("/quizzes/{quizId}/questions/count")
    public ResponseEntity<Long> countQuestionsParQuiz(@PathVariable Long quizId) {
        return ResponseEntity.ok(statistiqueService.countQuestionsByQuiz(quizId));
    }
}
