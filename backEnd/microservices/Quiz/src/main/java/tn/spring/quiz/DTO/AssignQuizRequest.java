package tn.spring.quiz.DTO;

import lombok.Data;

import java.util.UUID;

@Data
public class AssignQuizRequest {
    private Long quizId;
    private UUID studentId;
    private UUID tutorId;
}
