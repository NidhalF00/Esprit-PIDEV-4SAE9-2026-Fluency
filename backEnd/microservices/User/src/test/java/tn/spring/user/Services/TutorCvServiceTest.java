package tn.spring.user.Services;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.server.ResponseStatusException;
import tn.spring.user.DTOs.TutorCvCreateResponse;
import tn.spring.user.DTOs.TutorCvRequest;
import tn.spring.user.DTOs.TutorCvResponse;
import tn.spring.user.Models.TutorCv;
import tn.spring.user.Repositories.TutorCvRepository;

import java.time.LocalDateTime;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

class TutorCvServiceTest {

    private TutorCvRepository tutorCvRepository;
    private PasswordEncoder passwordEncoder;
    private TutorCvService tutorCvService;

    @BeforeEach
    void setUp() {
        tutorCvRepository = mock(TutorCvRepository.class);
        passwordEncoder = new BCryptPasswordEncoder();
        tutorCvService = new TutorCvService(tutorCvRepository, passwordEncoder);
    }

    @Test
    void createReturnsIdAndEditTokenWithoutStoringRawToken() {
        when(tutorCvRepository.save(any(TutorCv.class))).thenAnswer(invocation -> {
            TutorCv tutorCv = invocation.getArgument(0);
            tutorCv.setId(1L);
            tutorCv.setCreatedAt(LocalDateTime.now());
            tutorCv.setUpdatedAt(LocalDateTime.now());
            return tutorCv;
        });

        TutorCvCreateResponse response = tutorCvService.create(validRequest());

        assertEquals(1L, response.getId());
        assertNotNull(response.getEditToken());
        assertFalse(response.getEditToken().isBlank());

        when(tutorCvRepository.findById(1L)).thenAnswer(invocation -> {
            TutorCv saved = new TutorCv();
            saved.setId(response.getId());
            saved.setFullName(response.getFullName());
            saved.setEmail(response.getEmail());
            saved.setEnglishLevel(response.getEnglishLevel());
            saved.setEditTokenHash(passwordEncoder.encode(response.getEditToken()));
            saved.setCreatedAt(response.getCreatedAt());
            saved.setUpdatedAt(response.getUpdatedAt());
            return Optional.of(saved);
        });

        TutorCvResponse stored = tutorCvService.getById(1L, response.getEditToken());
        assertEquals("Demo Tutor", stored.getFullName());
    }

    @Test
    void createRejectsMissingRequiredFields() {
        TutorCvRequest request = validRequest();
        request.setFullName(" ");

        ResponseStatusException ex = assertThrows(ResponseStatusException.class, () -> tutorCvService.create(request));

        assertEquals(HttpStatus.BAD_REQUEST, ex.getStatusCode());
    }

    @Test
    void getWithValidTokenWorks() {
        TutorCv tutorCv = existingCv("safe-token");
        when(tutorCvRepository.findById(1L)).thenReturn(Optional.of(tutorCv));

        TutorCvResponse response = tutorCvService.getById(1L, "safe-token");

        assertEquals("Demo Tutor", response.getFullName());
        assertEquals("B2", response.getEnglishLevel());
    }

    @Test
    void getWithMissingOrWrongTokenReturnsForbidden() {
        TutorCv tutorCv = existingCv("safe-token");
        when(tutorCvRepository.findById(1L)).thenReturn(Optional.of(tutorCv));

        ResponseStatusException missing = assertThrows(ResponseStatusException.class, () -> tutorCvService.getById(1L, null));
        ResponseStatusException wrong = assertThrows(ResponseStatusException.class, () -> tutorCvService.getById(1L, "wrong-token"));

        assertEquals(HttpStatus.FORBIDDEN, missing.getStatusCode());
        assertEquals(HttpStatus.FORBIDDEN, wrong.getStatusCode());
    }

    @Test
    void updateWithValidTokenChangesFields() {
        TutorCv tutorCv = existingCv("safe-token");
        when(tutorCvRepository.findById(1L)).thenReturn(Optional.of(tutorCv));
        when(tutorCvRepository.save(any(TutorCv.class))).thenAnswer(invocation -> invocation.getArgument(0));

        TutorCvRequest request = validRequest();
        request.setFullName("Updated Tutor");
        request.setEnglishLevel("C1");

        TutorCvResponse response = tutorCvService.update(1L, "safe-token", request);

        assertEquals("Updated Tutor", response.getFullName());
        assertEquals("C1", response.getEnglishLevel());
    }

    @Test
    void deleteWithValidTokenRemovesCv() {
        TutorCv tutorCv = existingCv("safe-token");
        when(tutorCvRepository.findById(1L)).thenReturn(Optional.of(tutorCv));

        assertDoesNotThrow(() -> tutorCvService.delete(1L, "safe-token"));
        verify(tutorCvRepository).delete(tutorCv);
    }

    @Test
    void notFoundReturnsNotFound() {
        when(tutorCvRepository.findById(99L)).thenReturn(Optional.empty());

        ResponseStatusException ex = assertThrows(ResponseStatusException.class, () -> tutorCvService.getById(99L, "safe-token"));

        assertEquals(HttpStatus.NOT_FOUND, ex.getStatusCode());
    }

    private TutorCvRequest validRequest() {
        return TutorCvRequest.builder()
                .fullName("Demo Tutor")
                .email("tutor.cv@example.com")
                .phone("+21600000000")
                .city("Tunis")
                .country("Tunisia")
                .englishLevel("B2")
                .yearsOfExperience(2)
                .speciality("English grammar")
                .education("Bachelor degree")
                .certifications("TEFL")
                .skills("Speaking, grammar, lesson planning")
                .professionalSummary("English tutor focused on practical student progress.")
                .build();
    }

    private TutorCv existingCv(String editToken) {
        TutorCv tutorCv = new TutorCv();
        tutorCv.setId(1L);
        tutorCv.setFullName("Demo Tutor");
        tutorCv.setEmail("tutor.cv@example.com");
        tutorCv.setEnglishLevel("B2");
        tutorCv.setEditTokenHash(passwordEncoder.encode(editToken));
        tutorCv.setCreatedAt(LocalDateTime.now());
        tutorCv.setUpdatedAt(LocalDateTime.now());

        assertNotEquals(editToken, tutorCv.getEditTokenHash());
        assertTrue(passwordEncoder.matches(editToken, tutorCv.getEditTokenHash()));

        return tutorCv;
    }
}
