package tn.spring.quiz.Controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.spring.quiz.DTO.AssistantChatRequest;
import tn.spring.quiz.DTO.AssistantChatResponse;
import tn.spring.quiz.Services.FluencyAssistantService;

@RestController
@RequestMapping("/api/assistant")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AssistantController {

    private final FluencyAssistantService fluencyAssistantService;

    @PostMapping("/chat")
    public ResponseEntity<AssistantChatResponse> chat(@RequestBody AssistantChatRequest request) {
        return ResponseEntity.ok(fluencyAssistantService.chat(request));
    }
}
