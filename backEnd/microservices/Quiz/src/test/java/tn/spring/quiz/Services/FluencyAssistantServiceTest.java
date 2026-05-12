package tn.spring.quiz.Services;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import tn.spring.quiz.DTO.AssistantChatRequest;
import tn.spring.quiz.DTO.AssistantChatResponse;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

class FluencyAssistantServiceTest {

    private FluencyAssistantService fluencyAssistantService;

    @BeforeEach
    void setUp() {
        fluencyAssistantService = new FluencyAssistantService(new ObjectMapper(), "", "gemini-1.5-flash");
    }

    @Test
    void chat_whenMessageIsEmpty_returnsGeneralFallback() {
        AssistantChatResponse response = fluencyAssistantService.chat(requestWithMessage("   "));

        assertEquals("GENERAL", response.getCategory());
        assertFalse(response.isAiUsed());
        assertNotNull(response.getReply());
        assertFalse(response.getSuggestions().isEmpty());
    }

    @Test
    void chat_whenGeminiKeyIsMissing_returnsFallbackWithoutAi() {
        AssistantChatResponse response = fluencyAssistantService.chat(requestWithMessage("How can I improve my English?"));

        assertEquals("GENERAL", response.getCategory());
        assertFalse(response.isAiUsed());
        assertNotNull(response.getReply());
        assertFalse(response.getSuggestions().isEmpty());
    }

    @Test
    void chat_whenMessageMentionsQuiz_returnsQuizCategory() {
        AssistantChatResponse response = fluencyAssistantService.chat(requestWithMessage("How do I take a placement quiz?"));

        assertEquals("QUIZ", response.getCategory());
        assertFalse(response.isAiUsed());
    }

    @Test
    void chat_whenMessageMentionsPronunciation_returnsPronunciationCategory() {
        AssistantChatResponse response = fluencyAssistantService.chat(requestWithMessage("Can I practice pronunciation?"));

        assertEquals("PRONUNCIATION", response.getCategory());
        assertFalse(response.isAiUsed());
        assertTrue(response.getReply().contains("Use the Pronunciation Helper on your Student Home page."));
    }

    @Test
    void chat_whenMessageMentionsCertificate_returnsCertificateCategory() {
        AssistantChatResponse response = fluencyAssistantService.chat(requestWithMessage("How do I generate my certificate?"));

        assertEquals("CERTIFICATE", response.getCategory());
        assertFalse(response.isAiUsed());
        assertTrue(response.getReply().contains("Certificates or membership options become available"));
    }

    @Test
    void chat_whenMessageMentionsLevel_returnsLevelCategory() {
        AssistantChatResponse response = fluencyAssistantService.chat(requestWithMessage("What is the A2 level?"));

        assertEquals("LEVEL", response.getCategory());
        assertFalse(response.isAiUsed());
        assertTrue(response.getReply().contains("A1 means beginner, A2 means elementary, and B1 means intermediate."));
    }

    @Test
    void chat_whenFailedQuizMessage_returnsPracticalRecoveryFallback() {
        AssistantChatResponse response = fluencyAssistantService.chat(
                requestWithMessage("I failed my placement quiz and got a low score.")
        );

        assertEquals("QUIZ", response.getCategory());
        assertFalse(response.isAiUsed());
        assertEquals(
                "Do not worry if you failed a placement quiz. Review the questions you missed, practice basic grammar and vocabulary, then try again when you feel ready. Use the Pronunciation Helper for difficult words and ask your tutor for a focused revision plan.",
                response.getReply()
        );
        assertEquals(
                List.of("Review missed questions", "Practice A1 basics", "Use Pronunciation Helper", "Ask a tutor"),
                response.getSuggestions()
        );
    }

    @Test
    void chat_whenPlacementQuizMessage_returnsPlacementSpecificFallback() {
        AssistantChatResponse response = fluencyAssistantService.chat(
                requestWithMessage("How does the placement test work?")
        );

        assertEquals("QUIZ", response.getCategory());
        assertFalse(response.isAiUsed());
        assertEquals(
                "Placement quizzes help estimate your English level before you continue in the platform. They usually check vocabulary, grammar, and reading comprehension. Complete the quiz carefully so your tutor can guide you to the right A1, A2, or B1 path.",
                response.getReply()
        );
        assertEquals(
                List.of("Take a placement quiz", "Check quiz feedback", "Review grammar", "Ask about A1/A2/B1"),
                response.getSuggestions()
        );
    }

    @Test
    void chat_whenOutOfScopeQuestion_returnsEnglishLearningRedirect() {
        AssistantChatResponse response = fluencyAssistantService.chat(requestWithMessage("What time is it?"));

        assertEquals("GENERAL", response.getCategory());
        assertFalse(response.isAiUsed());
        assertEquals(
                "I am focused on English learning support. I can help with placement quizzes, pronunciation practice, English levels, certificates, courses, and tutor guidance.",
                response.getReply()
        );
        assertEquals(
                List.of("Take a placement quiz", "Practice pronunciation", "Ask about English levels", "Ask a tutor"),
                response.getSuggestions()
        );
    }

    @Test
    void chat_whenTutorMessage_returnsTutorGuidedAnswer() {
        AssistantChatResponse response = fluencyAssistantService.chat(requestWithMessage("When should I ask a tutor?"));

        assertEquals("TUTOR", response.getCategory());
        assertFalse(response.isAiUsed());
        assertTrue(response.getReply().contains("Ask a tutor when you are blocked, failed a quiz, or need a clear learning plan."));
    }

    @Test
    void extractGeminiReply_whenResponseHasMultipleTextParts_joinsAllParts() throws Exception {
        String geminiResponse = """
                {
                  "candidates": [
                    {
                      "content": {
                        "parts": [
                          { "text": "Start by reviewing your quiz feedback." },
                          { "text": "Then practice grammar and vocabulary every day." }
                        ]
                      }
                    }
                  ]
                }
                """;

        String reply = fluencyAssistantService.extractGeminiReply(geminiResponse);

        assertEquals(
                "Start by reviewing your quiz feedback. Then practice grammar and vocabulary every day.",
                reply
        );
    }

    @Test
    void chat_whenGeminiReplyAndRetryAreTooShort_returnsFallbackWithoutAi() {
        FluencyAssistantService service = serviceWithGeminiReplies("Don't worry, failing", "Practice more");

        AssistantChatResponse response = service.chat(requestWithMessage("I failed my placement quiz."));

        assertEquals("QUIZ", response.getCategory());
        assertFalse(response.isAiUsed());
        assertEquals(
                "Do not worry if you failed a placement quiz. Review the questions you missed, practice basic grammar and vocabulary, then try again when you feel ready. Use the Pronunciation Helper for difficult words and ask your tutor for a focused revision plan.",
                response.getReply()
        );
    }

    @Test
    void chat_whenGeminiReplyIsUsable_returnsAiResponse() {
        FluencyAssistantService service = serviceWithGeminiReply(
                "Do not worry about one failed placement quiz. Review your mistakes, practice grammar and vocabulary, then try another quiz when you feel ready."
        );

        AssistantChatResponse response = service.chat(requestWithMessage("I failed my placement quiz."));

        assertEquals("QUIZ", response.getCategory());
        assertTrue(response.isAiUsed());
        assertTrue(response.getReply().contains("Review your mistakes"));
        assertFalse(response.getSuggestions().isEmpty());
    }

    @Test
    void chat_whenFirstGeminiReplyIsShortAndRetryIsUsable_returnsRetryAiResponse() {
        FluencyAssistantService service = serviceWithGeminiReplies(
                "Practice more",
                "Review your placement quiz feedback and choose two grammar points to practice today. Use pronunciation practice for difficult words, then ask your tutor for focused exercises."
        );

        AssistantChatResponse response = service.chat(requestWithMessage("I failed my placement quiz."));

        assertEquals("QUIZ", response.getCategory());
        assertTrue(response.isAiUsed());
        assertTrue(response.getReply().contains("Review your placement quiz feedback"));
        assertFalse(response.getSuggestions().isEmpty());
    }

    @Test
    void buildGeminiRequestBody_containsCompletePromptAndGenerationConfig() throws Exception {
        String requestBody = fluencyAssistantService.buildGeminiRequestBody(
                "I failed my placement quiz. What should I do to improve my English?"
        );

        JsonNode root = new ObjectMapper().readTree(requestBody);
        String prompt = root.path("contents")
                .path(0)
                .path("parts")
                .path(0)
                .path("text")
                .asText();
        JsonNode generationConfig = root.path("generationConfig");

        assertEquals("user", root.path("contents").path(0).path("role").asText());
        assertTrue(prompt.contains("Context: You are Fluency Assistant for an English learning platform."));
        assertTrue(prompt.contains("Answer in 3 complete short sentences with at least 25 words total."));
        assertTrue(prompt.contains("Give practical next steps."));
        assertTrue(prompt.contains("Student question: I failed my placement quiz. What should I do to improve my English?"));
        assertEquals(0.7, generationConfig.path("temperature").asDouble());
        assertEquals(256, generationConfig.path("maxOutputTokens").asInt());
        assertEquals(0.95, generationConfig.path("topP").asDouble());
    }

    @Test
    void buildGeminiRequestBody_whenRetrying_containsStrongerRetryPrompt() throws Exception {
        String requestBody = fluencyAssistantService.buildGeminiRequestBody(
                "I failed my placement quiz. What should I do to improve my English?",
                true
        );

        JsonNode root = new ObjectMapper().readTree(requestBody);
        String prompt = root.path("contents")
                .path(0)
                .path("parts")
                .path(0)
                .path("text")
                .asText();

        assertTrue(prompt.contains("Your previous answer was too short."));
        assertTrue(prompt.contains("Rewrite a complete helpful answer in 3 short sentences."));
        assertTrue(prompt.contains("Use at least 25 words total."));
        assertTrue(prompt.contains("Student question: I failed my placement quiz. What should I do to improve my English?"));
    }

    private AssistantChatRequest requestWithMessage(String message) {
        AssistantChatRequest request = new AssistantChatRequest();
        request.setMessage(message);
        return request;
    }

    private FluencyAssistantService serviceWithGeminiReply(String reply) {
        return serviceWithGeminiReplies(reply, reply);
    }

    private FluencyAssistantService serviceWithGeminiReplies(String firstReply, String retryReply) {
        return new FluencyAssistantService(new ObjectMapper(), "test-key", "gemini-1.5-flash") {
            @Override
            String callGemini(String message, boolean retry) {
                return retry ? retryReply : firstReply;
            }
        };
    }
}
