package tn.spring.user.Services;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;
import tn.spring.user.DTOs.TutorCvCreateResponse;
import tn.spring.user.DTOs.TutorCvRequest;
import tn.spring.user.DTOs.TutorCvResponse;
import tn.spring.user.Models.TutorCv;
import tn.spring.user.Repositories.TutorCvRepository;

import java.security.SecureRandom;
import java.util.Base64;
import java.util.Locale;
import java.util.Set;

@Service
@RequiredArgsConstructor
@Transactional
public class TutorCvService {

    private static final SecureRandom SECURE_RANDOM = new SecureRandom();
    private static final Set<String> VALID_ENGLISH_LEVELS = Set.of("A1", "A2", "B1", "B2", "C1", "C2");

    private final TutorCvRepository tutorCvRepository;
    private final PasswordEncoder passwordEncoder;

    public TutorCvCreateResponse create(TutorCvRequest request) {
        validateRequest(request);

        String editToken = generateEditToken();
        TutorCv tutorCv = new TutorCv();
        applyRequest(tutorCv, request);
        tutorCv.setEditTokenHash(passwordEncoder.encode(editToken));

        TutorCv saved = tutorCvRepository.save(tutorCv);
        return toCreateResponse(saved, editToken);
    }

    @Transactional(readOnly = true)
    public TutorCvResponse getById(Long id, String editToken) {
        TutorCv tutorCv = findById(id);
        validateEditToken(tutorCv, editToken);
        return toResponse(tutorCv);
    }

    public TutorCvResponse update(Long id, String editToken, TutorCvRequest request) {
        validateRequest(request);

        TutorCv tutorCv = findById(id);
        validateEditToken(tutorCv, editToken);
        applyRequest(tutorCv, request);

        return toResponse(tutorCvRepository.save(tutorCv));
    }

    public void delete(Long id, String editToken) {
        TutorCv tutorCv = findById(id);
        validateEditToken(tutorCv, editToken);
        tutorCvRepository.delete(tutorCv);
    }

    private TutorCv findById(Long id) {
        return tutorCvRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Tutor CV not found."));
    }

    private void validateRequest(TutorCvRequest request) {
        if (request == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Tutor CV data is required.");
        }

        requireText(request.getFullName(), "Full name is required.");
        requireText(request.getEmail(), "Email is required.");

        String level = requireText(request.getEnglishLevel(), "English level is required.")
                .toUpperCase(Locale.ROOT);
        if (!VALID_ENGLISH_LEVELS.contains(level)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "English level must be A1, A2, B1, B2, C1, or C2.");
        }

        Integer years = request.getYearsOfExperience();
        if (years != null && years < 0) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Years of experience cannot be negative.");
        }
    }

    private String requireText(String value, String message) {
        if (value == null || value.trim().isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, message);
        }
        return value.trim();
    }

    private void validateEditToken(TutorCv tutorCv, String editToken) {
        if (editToken == null || editToken.trim().isEmpty()) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "CV edit token is required.");
        }

        if (!passwordEncoder.matches(editToken.trim(), tutorCv.getEditTokenHash())) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Invalid CV edit token.");
        }
    }

    private void applyRequest(TutorCv tutorCv, TutorCvRequest request) {
        tutorCv.setFullName(normalize(request.getFullName()));
        tutorCv.setEmail(normalize(request.getEmail()));
        tutorCv.setPhone(normalize(request.getPhone()));
        tutorCv.setCity(normalize(request.getCity()));
        tutorCv.setCountry(normalize(request.getCountry()));
        tutorCv.setEnglishLevel(normalize(request.getEnglishLevel()).toUpperCase(Locale.ROOT));
        tutorCv.setYearsOfExperience(request.getYearsOfExperience());
        tutorCv.setSpeciality(normalize(request.getSpeciality()));
        tutorCv.setEducation(normalize(request.getEducation()));
        tutorCv.setCertifications(normalize(request.getCertifications()));
        tutorCv.setSkills(normalize(request.getSkills()));
        tutorCv.setProfessionalSummary(normalize(request.getProfessionalSummary()));
    }

    private String normalize(String value) {
        return value == null ? null : value.trim();
    }

    private String generateEditToken() {
        byte[] bytes = new byte[32];
        SECURE_RANDOM.nextBytes(bytes);
        return Base64.getUrlEncoder().withoutPadding().encodeToString(bytes);
    }

    private TutorCvResponse toResponse(TutorCv tutorCv) {
        return TutorCvResponse.builder()
                .id(tutorCv.getId())
                .fullName(tutorCv.getFullName())
                .email(tutorCv.getEmail())
                .phone(tutorCv.getPhone())
                .city(tutorCv.getCity())
                .country(tutorCv.getCountry())
                .englishLevel(tutorCv.getEnglishLevel())
                .yearsOfExperience(tutorCv.getYearsOfExperience())
                .speciality(tutorCv.getSpeciality())
                .education(tutorCv.getEducation())
                .certifications(tutorCv.getCertifications())
                .skills(tutorCv.getSkills())
                .professionalSummary(tutorCv.getProfessionalSummary())
                .createdAt(tutorCv.getCreatedAt())
                .updatedAt(tutorCv.getUpdatedAt())
                .build();
    }

    private TutorCvCreateResponse toCreateResponse(TutorCv tutorCv, String editToken) {
        return TutorCvCreateResponse.builder()
                .id(tutorCv.getId())
                .fullName(tutorCv.getFullName())
                .email(tutorCv.getEmail())
                .phone(tutorCv.getPhone())
                .city(tutorCv.getCity())
                .country(tutorCv.getCountry())
                .englishLevel(tutorCv.getEnglishLevel())
                .yearsOfExperience(tutorCv.getYearsOfExperience())
                .speciality(tutorCv.getSpeciality())
                .education(tutorCv.getEducation())
                .certifications(tutorCv.getCertifications())
                .skills(tutorCv.getSkills())
                .professionalSummary(tutorCv.getProfessionalSummary())
                .createdAt(tutorCv.getCreatedAt())
                .updatedAt(tutorCv.getUpdatedAt())
                .editToken(editToken)
                .build();
    }
}
