package tn.spring.quiz.Controllers;


import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tn.spring.quiz.Enums.ApplicationStatus;
import tn.spring.quiz.Models.Application;
import tn.spring.quiz.Models.InterviewSlot;
import tn.spring.quiz.Repositories.ApplicationRepository;
import tn.spring.quiz.Repositories.InterviewSlotRepository;
import tn.spring.quiz.Services.ApplicationService;
import tn.spring.quiz.Services.EmailService;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/applications")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ApplicationController {

    private final ApplicationService applicationService;
    private final ApplicationRepository applicationRepository;
    private final InterviewSlotRepository interviewSlotRepository;
    private final EmailService emailService;

    @PostMapping("/submit")
    public ResponseEntity<?> submitApplication(
            @RequestParam("email") String email,
            @RequestParam("file") MultipartFile file
    ) throws IOException {

        String uploadDir = "uploads/";
        String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();

        Path path = Paths.get(uploadDir + fileName);
        Files.createDirectories(path.getParent());
        Files.write(path, file.getBytes());

        Application app = applicationService.submitApplication(email, path.toString());

        return ResponseEntity.ok(app);
    }

    @PostMapping("/{id}/slots")
    @PreAuthorize("hasAnyAuthority('ADMIN', 'SUPER_ADMIN')")
    public ResponseEntity<?> createSlots(
            @PathVariable Long id,
            @RequestBody List<LocalDateTime> slots
    ) {

        // 1️⃣ Vérifier que la candidature existe
        Application application = applicationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Application not found"));

        // 2️⃣ Vérifier que des créneaux sont fournis
        if (slots == null || slots.isEmpty()) {
            return ResponseEntity.badRequest().body("No slots provided");
        }

        // 3️⃣ Créer les InterviewSlots
        List<InterviewSlot> createdSlots = new ArrayList<>();

        for (LocalDateTime slotTime : slots) {
            InterviewSlot slot = new InterviewSlot();
            slot.setStartTime(slotTime);
            slot.setBooked(false);
            slot.setApplication(application);

            createdSlots.add(slot);
        }

        interviewSlotRepository.saveAll(createdSlots);

        // 4️⃣ Mettre à jour le statut
        application.setStatus(ApplicationStatus.INTERVIEW_SCHEDULED);
        applicationRepository.save(application);

        // 5️⃣ Envoyer email au teacher
        String subject = "Interview Scheduling";
        String text = """
            Dear Candidate,

            Your application is under review.
            Please log in and choose your preferred interview slot.

            Best regards,
            Admin Team
            """;

        emailService.sendEmail(application.getEmail(), subject, text);

        // 6️⃣ Réponse OK
        return ResponseEntity.ok(createdSlots);
    }
    @GetMapping
    @PreAuthorize("hasAnyAuthority('ADMIN', 'SUPER_ADMIN')")
    public ResponseEntity<List<Application>> getAllApplications() {
        List<Application> applications = applicationService.getAllApplications();
        return ResponseEntity.ok(applications);
    }

    @PostMapping("/{id}/schedule")
    @PreAuthorize("hasAnyAuthority('ADMIN', 'SUPER_ADMIN')")
    public ResponseEntity<?> scheduleInterview(
            @PathVariable Long id,
            @RequestParam("link") String link
    ) {
        // 1️⃣ Récupérer l'application
        Application application = applicationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Application not found"));

        // 2️⃣ Mettre à jour le statut de l'application
        application.setStatus(ApplicationStatus.INTERVIEW_SCHEDULED);
        applicationRepository.save(application);

        // 3️⃣ Envoyer email avec le lien
        String subject = "Interview Scheduled";
        String text = """
        Dear Candidate,

        Your interview has been scheduled.
        Please use the following link to join your interview:

        %s

        Best regards,
        Admin Team
        """.formatted(link);

        emailService.sendEmail(application.getEmail(), subject, text);

        return ResponseEntity.ok("Interview scheduled and email sent!");
    }
    @PutMapping("/{id}/statusA")
    @PreAuthorize("hasAnyAuthority('ADMIN', 'SUPER_ADMIN')")
    public ResponseEntity<?> updateStatusAcceptedEndpoint(
            @PathVariable Long id,
            @RequestParam String status,
            @RequestParam String teacherEmail,
            @RequestParam String teacherPassword) {

        try {
            applicationService.updateStatusAccepted(id, status, teacherEmail, teacherPassword);
            return ResponseEntity.ok("Status updated and email sent successfully");
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error while updating status or sending email");
        }
    }
    @PutMapping("/{id}/statusR")
    @PreAuthorize("hasAnyAuthority('ADMIN', 'SUPER_ADMIN')")
    public ResponseEntity<?> updateStatusRejectedEndpoint(
            @PathVariable Long id,
            @RequestParam String status) {  // Plus besoin du teacherEmail/password ici
        try {
            applicationService.updateStatusRejected(id, status);
            return ResponseEntity.ok("Status updated and email sent successfully");
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error while updating status or sending email");
        }
    }
    @GetMapping("/download/{id}")
    @PreAuthorize("hasAnyAuthority('ADMIN', 'SUPER_ADMIN')")
    public ResponseEntity<Resource> downloadCv(@PathVariable Long id) throws IOException {
        Application app = applicationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Application not found"));
        Path filePath = Paths.get(app.getCvPath());
        if (!Files.exists(filePath)) {
            throw new RuntimeException("File not found: " + filePath);
        }
        org.springframework.core.io.Resource resource = new org.springframework.core.io.UrlResource(filePath.toUri());
        String fileName = filePath.getFileName().toString();
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileName + "\"")
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(resource);
    }

}
