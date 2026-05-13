package tn.spring.user.Services;

import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import tn.spring.user.DTOs.TutorCvEnglishCheckRequest;
import tn.spring.user.DTOs.TutorCvEnglishCheckResponse;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

class TutorCvEnglishCheckServiceTest {

    @Test
    void checkParsesLanguageToolSuggestions() {
        TutorCvEnglishCheckService service = new TutorCvEnglishCheckService((text, language) ->
                new TutorCvEnglishCheckService.LanguageToolRawResponse(200, languageToolResponse())
        );

        TutorCvEnglishCheckResponse response = service.check(request("I have 3 year experience."));

        assertTrue(response.isAvailable());
        assertEquals(1, response.getIssueCount());
        assertEquals("Your CV is almost ready. Review the suggestions below.", response.getQualityMessage());
        assertEquals("Possible agreement issue.", response.getSuggestions().get(0).getMessage());
        assertEquals("years", response.getSuggestions().get(0).getReplacements().get(0));
        assertEquals("Grammar", response.getSuggestions().get(0).getCategory());
    }

    @Test
    void checkReturnsCleanMessageWhenNoIssues() {
        TutorCvEnglishCheckService service = new TutorCvEnglishCheckService((text, language) ->
                new TutorCvEnglishCheckService.LanguageToolRawResponse(200, "{\"matches\":[]}")
        );

        TutorCvEnglishCheckResponse response = service.check(request("I have three years of experience."));

        assertTrue(response.isAvailable());
        assertEquals(0, response.getIssueCount());
        assertEquals("Your CV text looks clean. You can still review it before applying.", response.getQualityMessage());
    }

    @Test
    void checkReturnsUnavailableWhenLanguageToolFails() {
        TutorCvEnglishCheckService service = new TutorCvEnglishCheckService((text, language) ->
                new TutorCvEnglishCheckService.LanguageToolRawResponse(429, "")
        );

        TutorCvEnglishCheckResponse response = service.check(request("I have 3 year experience."));

        assertFalse(response.isAvailable());
        assertEquals(0, response.getIssueCount());
        assertTrue(response.getSuggestions().isEmpty());
        assertEquals("English check is temporarily unavailable. You can still save and print your CV.", response.getQualityMessage());
    }

    @Test
    void checkRejectsBlankText() {
        TutorCvEnglishCheckService service = new TutorCvEnglishCheckService((text, language) ->
                new TutorCvEnglishCheckService.LanguageToolRawResponse(200, "{\"matches\":[]}")
        );

        ResponseStatusException ex = assertThrows(
                ResponseStatusException.class,
                () -> service.check(request(" "))
        );

        assertEquals(HttpStatus.BAD_REQUEST, ex.getStatusCode());
    }

    @Test
    void checkRejectsVeryLongText() {
        TutorCvEnglishCheckService service = new TutorCvEnglishCheckService((text, language) ->
                new TutorCvEnglishCheckService.LanguageToolRawResponse(200, "{\"matches\":[]}")
        );

        ResponseStatusException ex = assertThrows(
                ResponseStatusException.class,
                () -> service.check(request("a".repeat(4001)))
        );

        assertEquals(HttpStatus.BAD_REQUEST, ex.getStatusCode());
    }

    private TutorCvEnglishCheckRequest request(String text) {
        return TutorCvEnglishCheckRequest.builder()
                .text(text)
                .language("en-US")
                .build();
    }

    private String languageToolResponse() {
        return """
                {
                  "matches": [
                    {
                      "message": "Possible agreement issue.",
                      "shortMessage": "Agreement",
                      "context": { "text": "I have 3 year experience." },
                      "replacements": [
                        { "value": "years" },
                        { "value": "Year" }
                      ],
                      "rule": {
                        "id": "AGREEMENT_TEST",
                        "category": { "name": "Grammar" }
                      }
                    }
                  ]
                }
                """;
    }
}
