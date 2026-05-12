package tn.spring.quiz.Services;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import tn.spring.quiz.DTO.AssistantChatRequest;
import tn.spring.quiz.DTO.AssistantChatResponse;

import java.net.URI;
import java.net.URLEncoder;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.time.Duration;
import java.util.List;
import java.util.Locale;

@Service
public class FluencyAssistantService {

    private static final Logger logger = LoggerFactory.getLogger(FluencyAssistantService.class);

    private static final String GENERAL = "GENERAL";
    private static final String QUIZ = "QUIZ";
    private static final String PRONUNCIATION = "PRONUNCIATION";
    private static final String CERTIFICATE = "CERTIFICATE";
    private static final String LEVEL = "LEVEL";
    private static final String COURSE = "COURSE";
    private static final String TUTOR = "TUTOR";
    private static final String FAILED_QUIZ = "FAILED_QUIZ";
    private static final String PLACEMENT_QUIZ = "PLACEMENT_QUIZ";
    private static final String OUT_OF_SCOPE = "OUT_OF_SCOPE";
    private static final String DEFAULT_MODEL = "gemini-1.5-flash";
    private static final String GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/v1beta/models/";
    private static final Duration GEMINI_TIMEOUT = Duration.ofSeconds(4);
    private static final String SYSTEM_PROMPT = """
            Context: You are Fluency Assistant for an English learning platform.
            Rules:
            - Answer in 3 complete short sentences with at least 25 words total.
            - Give practical next steps.
            - Mention placement quizzes, pronunciation practice, or tutor support when relevant.
            - Help with English levels A1/A2/B1, courses, certificates, and learning progress.
            - Never ask for passwords, tokens, or secrets.
            - If the question is outside the platform, redirect politely to English learning help.
            - Do not stop mid-sentence.
            """;
    private static final String RETRY_PROMPT = """
            Your previous answer was too short. Rewrite a complete helpful answer in 3 short sentences.
            Include practical next steps for the student. Mention placement quizzes, pronunciation practice, and tutor support when relevant.
            Use at least 25 words total. Do not ask for passwords, tokens, or secrets. Do not stop mid-sentence.
            """;

    private final ObjectMapper objectMapper;
    private final HttpClient httpClient;
    private final String geminiApiKey;
    private final String geminiModel;

    public FluencyAssistantService(
            ObjectMapper objectMapper,
            @Value("${gemini.api-key:}") String geminiApiKey,
            @Value("${gemini.model:" + DEFAULT_MODEL + "}") String geminiModel) {
        this.objectMapper = objectMapper;
        this.geminiApiKey = geminiApiKey == null ? "" : geminiApiKey.trim();
        this.geminiModel = geminiModel == null || geminiModel.isBlank() ? DEFAULT_MODEL : geminiModel.trim();
        this.httpClient = HttpClient.newBuilder()
                .connectTimeout(GEMINI_TIMEOUT)
                .build();
    }

    public AssistantChatResponse chat(AssistantChatRequest request) {
        String message = request == null || request.getMessage() == null ? "" : request.getMessage().trim();
        String category = categorize(message);
        String fallbackIntent = fallbackIntent(message, category);

        if (message.isBlank()) {
            logGeminiFallback("BLANK_MESSAGE");
            return fallback(category, fallbackIntent);
        }

        if (geminiApiKey.isBlank()) {
            logGeminiDiagnostics("Gemini key configured: false");
            logGeminiFallback("MISSING_KEY");
            return fallback(category, fallbackIntent);
        }

        logGeminiDiagnostics("Gemini key configured: true");
        logGeminiDiagnostics("Gemini model configured: " + geminiModel);
        String aiReply = callGemini(message, false);
        String rejectionReason = getAiReplyRejectionReason(aiReply);
        if (rejectionReason != null) {
            logGeminiDiagnostics("Gemini extracted reply word count: " + countWords(aiReply));
            logGeminiDiagnostics("Gemini reply rejected reason: " + rejectionReason);

            logGeminiDiagnostics("Gemini retry started");
            String retryReply = callGemini(message, true);
            String retryRejectionReason = getAiReplyRejectionReason(retryReply);
            logGeminiDiagnostics("Gemini retry word count: " + countWords(retryReply));
            if (retryRejectionReason == null) {
                logGeminiDiagnostics("Gemini retry accepted");
                return new AssistantChatResponse(retryReply, category, suggestionsFor(fallbackIntent), true);
            }

            logGeminiDiagnostics("Gemini retry rejected reason: " + retryRejectionReason);
            logGeminiFallback("INVALID_REPLY");
            return fallback(category, fallbackIntent);
        }

        return new AssistantChatResponse(aiReply, category, suggestionsFor(fallbackIntent), true);
    }

    private String categorize(String message) {
        String normalized = message == null ? "" : message.toLowerCase(Locale.ROOT);

        if (isFailedQuizMessage(normalized)
                || isPlacementQuizMessage(normalized)
                || containsAny(normalized, "quiz", "test", "score", "question", "answer", "feedback")) {
            return QUIZ;
        }
        if (containsAny(normalized, "pronunciation", "pronounce", "listen", "speak", "speech", "sound")) {
            return PRONUNCIATION;
        }
        if (containsAny(normalized, "certificate", "membership", "generate certificate", "attestation")) {
            return CERTIFICATE;
        }
        if (containsAny(normalized, "level", "a1", "a2", "b1", "beginner", "elementary", "intermediate")) {
            return LEVEL;
        }
        if (containsAny(normalized, "course", "lesson", "learn", "study", "training")) {
            return COURSE;
        }
        if (containsAny(normalized, "tutor", "teacher", "support", "assign", "help me")) {
            return TUTOR;
        }

        return GENERAL;
    }

    private String fallbackIntent(String message, String category) {
        String normalized = message == null ? "" : message.toLowerCase(Locale.ROOT);

        if (isFailedQuizMessage(normalized)) {
            return FAILED_QUIZ;
        }
        if (isPlacementQuizMessage(normalized)) {
            return PLACEMENT_QUIZ;
        }
        if (GENERAL.equals(category) && isOutOfScopeMessage(normalized)) {
            return OUT_OF_SCOPE;
        }

        return category;
    }

    private boolean isFailedQuizMessage(String normalized) {
        return containsAny(normalized, "fail", "failed", "low score", "bad score", "did not pass", "retry");
    }

    private boolean isPlacementQuizMessage(String normalized) {
        return containsAny(normalized, "placement quiz", "placement test", "level test");
    }

    private boolean isOutOfScopeMessage(String normalized) {
        return containsAny(normalized, "what time", "weather", "politics", "random text", "sports", "news");
    }

    private boolean containsAny(String value, String... candidates) {
        for (String candidate : candidates) {
            if (value.contains(candidate)) {
                return true;
            }
        }
        return false;
    }

    private AssistantChatResponse fallback(String category, String fallbackIntent) {
        return new AssistantChatResponse(fallbackReply(fallbackIntent), category, suggestionsFor(fallbackIntent), false);
    }

    private String fallbackReply(String fallbackIntent) {
        return switch (fallbackIntent) {
            case FAILED_QUIZ -> "Do not worry if you failed a placement quiz. Review the questions you missed, practice basic grammar and vocabulary, then try again when you feel ready. Use the Pronunciation Helper for difficult words and ask your tutor for a focused revision plan.";
            case PLACEMENT_QUIZ -> "Placement quizzes help estimate your English level before you continue in the platform. They usually check vocabulary, grammar, and reading comprehension. Complete the quiz carefully so your tutor can guide you to the right A1, A2, or B1 path.";
            case PRONUNCIATION -> "Use the Pronunciation Helper on your Student Home page. Type an English word or sentence, click Listen, then repeat it slowly. This helps you improve speaking confidence before quizzes or tutor sessions.";
            case CERTIFICATE -> "Certificates or membership options become available after you pass the required quiz or complete the needed step. If you do not see the option yet, check your quiz score and ask your tutor what remains to finish.";
            case LEVEL -> "A1 means beginner, A2 means elementary, and B1 means intermediate. If your score is low, start with A1 basics; if it is medium, review A2 grammar and vocabulary. Your placement quiz helps decide the best starting level.";
            case COURSE -> "Courses organize your English learning path. Start with the welcome or placement course, then follow the activities suggested by your tutor.";
            case TUTOR -> "Ask a tutor when you are blocked, failed a quiz, or need a clear learning plan. A tutor can assign placement quizzes, explain mistakes, and suggest the next course level.";
            case QUIZ -> "You can start with the English Placement quizzes. They help evaluate your vocabulary, grammar, and comprehension level. After you submit answers, review the feedback and ask your tutor if you need help.";
            default -> "I am focused on English learning support. I can help with placement quizzes, pronunciation practice, English levels, certificates, courses, and tutor guidance.";
        };
    }

    private List<String> suggestionsFor(String fallbackIntent) {
        return switch (fallbackIntent) {
            case FAILED_QUIZ -> List.of("Review missed questions", "Practice A1 basics", "Use Pronunciation Helper", "Ask a tutor");
            case PLACEMENT_QUIZ -> List.of("Take a placement quiz", "Check quiz feedback", "Review grammar", "Ask about A1/A2/B1");
            case QUIZ -> List.of("Take a placement quiz", "Check quiz feedback", "Review your answers");
            case PRONUNCIATION -> List.of("Practice pronunciation", "Try a short sentence", "Listen and repeat");
            case CERTIFICATE -> List.of("Check your quiz score", "Generate membership", "Ask a tutor");
            case LEVEL -> List.of("Review A1 basics", "Try A2 grammar", "Practice B1 reading");
            case COURSE -> List.of("Open your courses", "Start with Welcome Quizzes", "Ask a tutor for guidance");
            case TUTOR -> List.of("Ask a tutor", "Request a placement quiz", "Review your learning path");
            default -> List.of("Take a placement quiz", "Practice pronunciation", "Ask about English levels", "Ask a tutor");
        };
    }

    String callGemini(String message) {
        return callGemini(message, false);
    }

    String callGemini(String message, boolean retry) {
        try {
            String requestBody = buildGeminiRequestBody(message, retry);
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(buildGeminiUrl()))
                    .timeout(GEMINI_TIMEOUT)
                    .header("Content-Type", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofString(requestBody))
                    .build();

            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
            logGeminiDiagnostics((retry ? "Gemini retry HTTP status: " : "Gemini HTTP status: ") + response.statusCode());
            if (response.statusCode() < 200 || response.statusCode() >= 300) {
                logGeminiFallback("HTTP_ERROR");
                return "";
            }

            return extractGeminiReply(response.body());
        } catch (Exception ignored) {
            logGeminiFallback("EXCEPTION");
            return "";
        }
    }

    private String buildGeminiUrl() {
        String model = geminiModel.startsWith("models/") ? geminiModel.substring("models/".length()) : geminiModel;
        return GEMINI_BASE_URL + model + ":generateContent?key="
                + URLEncoder.encode(geminiApiKey, StandardCharsets.UTF_8);
    }

    String buildGeminiRequestBody(String message) throws Exception {
        return buildGeminiRequestBody(message, false);
    }

    String buildGeminiRequestBody(String message, boolean retry) throws Exception {
        ObjectNode root = objectMapper.createObjectNode();
        ArrayNode contents = root.putArray("contents");
        ObjectNode content = contents.addObject();
        content.put("role", "user");
        ArrayNode parts = content.putArray("parts");
        parts.addObject().put("text", buildPrompt(message, retry));

        ObjectNode generationConfig = root.putObject("generationConfig");
        generationConfig.put("temperature", 0.7);
        generationConfig.put("maxOutputTokens", 256);
        generationConfig.put("topP", 0.95);

        return objectMapper.writeValueAsString(root);
    }

    String buildPrompt(String message) {
        return buildPrompt(message, false);
    }

    String buildPrompt(String message, boolean retry) {
        String prompt = retry ? SYSTEM_PROMPT + "\n" + RETRY_PROMPT : SYSTEM_PROMPT;
        return prompt + "\nStudent question: " + message;
    }

    String extractGeminiReply(String responseBody) throws Exception {
        JsonNode root = objectMapper.readTree(responseBody);
        JsonNode parts = root.path("candidates")
                .path(0)
                .path("content")
                .path("parts");

        if (!parts.isArray()) {
            logGeminiDiagnostics("Gemini response candidates present: false");
            logGeminiDiagnostics("Gemini text parts count: 0");
            logGeminiFallback("NO_CANDIDATES");
            return "";
        }

        logGeminiDiagnostics("Gemini response candidates present: true");
        logGeminiDiagnostics("Gemini text parts count: " + parts.size());

        StringBuilder reply = new StringBuilder();
        for (JsonNode part : parts) {
            String text = part.path("text").asText("").trim();
            if (!text.isBlank()) {
                if (!reply.isEmpty()) {
                    reply.append(' ');
                }
                reply.append(text);
            }
        }

        return reply.toString().replaceAll("\\s+", " ").trim();
    }

    boolean isUsableAiReply(String reply) {
        return getAiReplyRejectionReason(reply) == null;
    }

    private String getAiReplyRejectionReason(String reply) {
        if (reply == null || reply.isBlank()) {
            return "BLANK";
        }

        String normalized = reply.trim();
        if (normalized.split("\\s+").length < 8) {
            return "TOO_SHORT";
        }

        boolean complete = normalized.endsWith(".")
                || normalized.endsWith("!")
                || normalized.endsWith("?")
                || normalized.endsWith("]");
        return complete ? null : "INCOMPLETE";
    }

    private int countWords(String reply) {
        if (reply == null || reply.isBlank()) {
            return 0;
        }
        return reply.trim().split("\\s+").length;
    }

    private void logGeminiDiagnostics(String message) {
        logger.debug(message);
    }

    private void logGeminiFallback(String reason) {
        logger.debug("Gemini fallback used reason: {}", reason);
    }
}
