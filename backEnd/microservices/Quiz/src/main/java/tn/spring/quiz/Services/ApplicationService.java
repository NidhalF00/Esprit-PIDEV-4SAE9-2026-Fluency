package tn.spring.quiz.Services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.spring.quiz.Enums.ApplicationStatus;
import tn.spring.quiz.Models.Application;
import tn.spring.quiz.Repositories.ApplicationRepository;

import java.util.List;
@Service
@RequiredArgsConstructor
public class ApplicationService {

    private final ApplicationRepository applicationRepository;
    private final EmailService mailService;

    public Application submitApplication(String email, String cvPath) {
        Application app = new Application();
        app.setEmail(email);  // <-- doit venir du frontend / candidat
        app.setCvPath(cvPath);
        app.setStatus(ApplicationStatus.PENDING);

        return applicationRepository.save(app);
    }

    public List<Application> getAllApplications() {
        return applicationRepository.findAll();
    }

    public void updateStatusAccepted(Long id, String status, String teacherEmail, String teacherPassword) {
        Application app = applicationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Application not found"));

        app.setStatus(ApplicationStatus.valueOf(status));
        applicationRepository.save(app);

        // ✅ Vérification mail candidat
        String candidateEmail = app.getEmail();
        if(candidateEmail == null || candidateEmail.isEmpty()){
            throw new RuntimeException("Candidate email is missing in the application");
        }

        // ✅ ENVOI EMAIL
        String subject = "Votre candidature a été acceptée";
        String body = """
                Bonjour,

                Votre candidature a été acceptée.
                Votre statut est maintenant : %s

                Vous pouvez vous connecter avec ces informations :
                Email : %s
                Password : %s

                Merci.
                """.formatted(status, teacherEmail, teacherPassword);

        System.out.println("Sending ACCEPTED email to: " + candidateEmail); // Debug
        mailService.sendEmail(candidateEmail, subject, body);
    }

    public void updateStatusRejected(Long id, String status) {
        Application app = applicationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Application not found"));

        app.setStatus(ApplicationStatus.valueOf(status));
        applicationRepository.save(app);

        String candidateEmail = app.getEmail();
        if(candidateEmail == null || candidateEmail.isEmpty()){
            throw new RuntimeException("Candidate email is missing in the application");
        }

        // ✅ ENVOI EMAIL
        String subject = "Candidature non retenue";
        String body = """
                Bonjour,

                Votre candidature a été refusée.
                Votre statut est maintenant : %s

                Merci.
                """.formatted(status);

        System.out.println("Sending REJECTED email to: " + candidateEmail); // Debug
        mailService.sendEmail(candidateEmail, subject, body);
    }
}