package tn.spring.user.Services;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import tn.spring.user.DTOs.TutorCvEnglishCheckRequest;
import tn.spring.user.DTOs.TutorCvEnglishCheckResponse;
import tn.spring.user.DTOs.TutorCvEnglishSuggestion;

import java.io.IOException;
import java.net.URI;
import java.net.URLEncoder;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.time.Duration;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class TutorCvEnglishCheckService {

    private static final String LANGUAGE_TOOL_URL = "https://api.languagetool.org/v2/check";
    private static final String DEFAULT_LANGUAGE = "en-US";
    private static final int MAX_TEXT_LENGTH = 4000;
    private static final int MAX_SUGGESTIONS = 8;
    private static final int MAX_REPLACEMENTS = 4;
    private static final String UNAVAILABLE_MESSAGE =
            "English check is temporarily unavailable. You can still save and print your CV.";

    private final LanguageToolClient languageToolClient;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public TutorCvEnglishCheckService() {
        this(new HttpLanguageToolClient());
    }

    TutorCvEnglishCheckService(LanguageToolClient languageToolClient) {
        this.languageToolClient = languageToolClient;
    }

    public TutorCvEnglishCheckResponse check(TutorCvEnglishCheckRequest request) {
        String text = validateText(request);
        String language = normalizeLanguage(request);

        try {
            LanguageToolRawResponse rawResponse = languageToolClient.check(text, language);
            if (rawResponse.statusCode() < 200 || rawResponse.statusCode() >= 300) {
                return unavailableResponse();
            }

            return parseLanguageToolResponse(rawResponse.body());
        } catch (IOException | InterruptedException | RuntimeException ex) {
            if (ex instanceof InterruptedException) {
                Thread.currentThread().interrupt();
            }
            return unavailableResponse();
        }
    }

    private String validateText(TutorCvEnglishCheckRequest request) {
        if (request == null || request.getText() == null || request.getText().trim().isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "CV text is required for English quality check.");
        }

        String text = request.getText().trim();
        if (text.length() > MAX_TEXT_LENGTH) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "CV text is too long for this demo check.");
        }

        return text;
    }

    private String normalizeLanguage(TutorCvEnglishCheckRequest request) {
        if (request == null || request.getLanguage() == null || request.getLanguage().trim().isEmpty()) {
            return DEFAULT_LANGUAGE;
        }

        return request.getLanguage().trim();
    }

    private TutorCvEnglishCheckResponse parseLanguageToolResponse(String body) throws IOException {
        JsonNode matches = objectMapper.readTree(body).path("matches");
        if (!matches.isArray()) {
            return unavailableResponse();
        }

        List<TutorCvEnglishSuggestion> suggestions = new ArrayList<>();
        for (JsonNode match : matches) {
            if (suggestions.size() >= MAX_SUGGESTIONS) {
                break;
            }

            suggestions.add(toSuggestion(match));
        }

        return TutorCvEnglishCheckResponse.builder()
                .available(true)
                .issueCount(matches.size())
                .suggestions(suggestions)
                .qualityMessage(qualityMessage(matches.size()))
                .build();
    }

    private TutorCvEnglishSuggestion toSuggestion(JsonNode match) {
        return TutorCvEnglishSuggestion.builder()
                .message(text(match.path("message")))
                .shortMessage(text(match.path("shortMessage")))
                .context(text(match.path("context").path("text")))
                .replacements(replacements(match.path("replacements")))
                .category(text(match.path("rule").path("category").path("name")))
                .ruleId(text(match.path("rule").path("id")))
                .build();
    }

    private List<String> replacements(JsonNode replacementsNode) {
        if (!replacementsNode.isArray()) {
            return Collections.emptyList();
        }

        List<String> values = new ArrayList<>();
        for (JsonNode replacement : replacementsNode) {
            if (values.size() >= MAX_REPLACEMENTS) {
                break;
            }

            String value = text(replacement.path("value"));
            if (!value.isBlank()) {
                values.add(value);
            }
        }

        return values;
    }

    private String qualityMessage(int issueCount) {
        if (issueCount == 0) {
            return "Your CV text looks clean. You can still review it before applying.";
        }

        if (issueCount <= 3) {
            return "Your CV is almost ready. Review the suggestions below.";
        }

        return "Your CV needs language improvements before applying.";
    }

    private String text(JsonNode node) {
        return node.isMissingNode() || node.isNull() ? "" : node.asText("");
    }

    private TutorCvEnglishCheckResponse unavailableResponse() {
        return TutorCvEnglishCheckResponse.builder()
                .available(false)
                .issueCount(0)
                .suggestions(Collections.emptyList())
                .qualityMessage(UNAVAILABLE_MESSAGE)
                .build();
    }

    interface LanguageToolClient {
        LanguageToolRawResponse check(String text, String language) throws IOException, InterruptedException;
    }

    record LanguageToolRawResponse(int statusCode, String body) {
    }

    private static class HttpLanguageToolClient implements LanguageToolClient {

        private final HttpClient httpClient = HttpClient.newBuilder()
                .connectTimeout(Duration.ofSeconds(3))
                .build();

        @Override
        public LanguageToolRawResponse check(String text, String language) throws IOException, InterruptedException {
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(LANGUAGE_TOOL_URL))
                    .timeout(Duration.ofSeconds(5))
                    .header("Content-Type", "application/x-www-form-urlencoded")
                    .POST(HttpRequest.BodyPublishers.ofString(formBody(text, language)))
                    .build();

            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
            return new LanguageToolRawResponse(response.statusCode(), response.body());
        }

        private String formBody(String text, String language) {
            return "text=" + URLEncoder.encode(text, StandardCharsets.UTF_8)
                    + "&language=" + URLEncoder.encode(language, StandardCharsets.UTF_8);
        }
    }
}
