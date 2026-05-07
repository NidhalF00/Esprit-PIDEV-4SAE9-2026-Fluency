package tn.esprit.courses.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.courses.dto.QuizResultDTO;
import tn.esprit.courses.dto.QuizSubmissionDTO;
import tn.esprit.courses.services.QuizCorrectionService;

import java.util.Map;

@RestController
@RequestMapping("/api/quizzes")
@RequiredArgsConstructor
public class QuizCorrectionController {

    private final QuizCorrectionService quizCorrectionService;

    @PostMapping("/{quizId}/submit")
    public ResponseEntity<QuizResultDTO> soumettreQuiz(
            @PathVariable Long quizId,
            @RequestBody QuizSubmissionDTO body) {
        Map<Long, Long> reponses = QuizCorrectionService.toReponsesMap(
                body != null ? body.getReponsesEtudiant() : null);
        Long userId = body != null ? body.getUserId() : null;
        String userName = body != null ? body.getUserName() : null;
        String userEmail = body != null ? body.getUserEmail() : null;
        QuizResultDTO result = quizCorrectionService.corrigerQuiz(quizId, reponses, userId, userName, userEmail);
        return ResponseEntity.ok(result);
    }
}
