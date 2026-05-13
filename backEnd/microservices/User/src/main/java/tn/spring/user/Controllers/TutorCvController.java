package tn.spring.user.Controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.spring.user.DTOs.TutorCvCreateResponse;
import tn.spring.user.DTOs.TutorCvEnglishCheckRequest;
import tn.spring.user.DTOs.TutorCvEnglishCheckResponse;
import tn.spring.user.DTOs.TutorCvRequest;
import tn.spring.user.DTOs.TutorCvResponse;
import tn.spring.user.Services.TutorCvEnglishCheckService;
import tn.spring.user.Services.TutorCvService;

@RestController
@RequestMapping("/api/tutor-cvs")
@RequiredArgsConstructor
public class TutorCvController {

    private static final String EDIT_TOKEN_HEADER = "X-CV-EDIT-TOKEN";

    private final TutorCvService tutorCvService;
    private final TutorCvEnglishCheckService tutorCvEnglishCheckService;

    @PostMapping
    public ResponseEntity<TutorCvCreateResponse> create(@RequestBody TutorCvRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(tutorCvService.create(request));
    }

    @PostMapping("/check-english")
    public ResponseEntity<TutorCvEnglishCheckResponse> checkEnglish(@RequestBody TutorCvEnglishCheckRequest request) {
        return ResponseEntity.ok(tutorCvEnglishCheckService.check(request));
    }

    @GetMapping("/{id}")
    public ResponseEntity<TutorCvResponse> getById(
            @PathVariable Long id,
            @RequestHeader(value = EDIT_TOKEN_HEADER, required = false) String editToken
    ) {
        return ResponseEntity.ok(tutorCvService.getById(id, editToken));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TutorCvResponse> update(
            @PathVariable Long id,
            @RequestHeader(value = EDIT_TOKEN_HEADER, required = false) String editToken,
            @RequestBody TutorCvRequest request
    ) {
        return ResponseEntity.ok(tutorCvService.update(id, editToken, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(
            @PathVariable Long id,
            @RequestHeader(value = EDIT_TOKEN_HEADER, required = false) String editToken
    ) {
        tutorCvService.delete(id, editToken);
        return ResponseEntity.noContent().build();
    }
}
