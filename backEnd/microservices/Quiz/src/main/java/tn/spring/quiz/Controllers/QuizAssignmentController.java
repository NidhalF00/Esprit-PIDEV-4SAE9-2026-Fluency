package tn.spring.quiz.Controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.spring.quiz.DTO.AssignQuizRequest;
import tn.spring.quiz.DTO.AssignedQuizResponse;
import tn.spring.quiz.Models.QuizAssignment;
import tn.spring.quiz.Services.QuizAssignmentService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/quiz-assignments")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class QuizAssignmentController {

    private final QuizAssignmentService quizAssignmentService;

    @PostMapping
    public ResponseEntity<QuizAssignment> assignQuiz(@RequestBody AssignQuizRequest request) {
        return ResponseEntity.ok(quizAssignmentService.assignQuiz(request));
    }

    @GetMapping("/student/{studentId}/quizzes")
    public ResponseEntity<List<AssignedQuizResponse>> getAssignedQuizzesByStudent(@PathVariable UUID studentId) {
        return ResponseEntity.ok(quizAssignmentService.getAssignedQuizzesByStudent(studentId));
    }
}
