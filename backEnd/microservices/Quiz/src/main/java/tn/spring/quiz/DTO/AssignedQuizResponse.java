package tn.spring.quiz.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AssignedQuizResponse {
    private Long quizId;
    private String title;
    private Integer passingScore;
    private Long courseId;
    private LocalDateTime assignedAt;
}
