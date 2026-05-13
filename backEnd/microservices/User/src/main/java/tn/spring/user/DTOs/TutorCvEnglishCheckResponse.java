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
public class TutorCvEnglishCheckResponse {
    private int issueCount;
    private List<TutorCvEnglishSuggestion> suggestions;
    private String qualityMessage;
    private boolean available;
}
