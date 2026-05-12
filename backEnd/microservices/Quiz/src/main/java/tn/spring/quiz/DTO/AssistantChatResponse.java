package tn.spring.quiz.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AssistantChatResponse {

    private String reply;
    private String category;
    private List<String> suggestions;
    private boolean aiUsed;
}
