package tn.spring.user.DTOs;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TutorCvEnglishSuggestion {
    private String message;
    private String shortMessage;
    private String context;
    private List<String> replacements;
    private String category;
    private String ruleId;
}
