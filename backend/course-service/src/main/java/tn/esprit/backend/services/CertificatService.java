package tn.esprit.backend.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import tn.esprit.backend.Entity.Certificat;
import tn.esprit.backend.Entity.Quiz;
import tn.esprit.backend.Entity.User;
import tn.esprit.backend.Repository.CertificatRepository;
import tn.esprit.backend.Repository.QuizRepository;
import tn.esprit.backend.Repository.UserRepository;
import tn.esprit.backend.dto.CertificatResponseDTO;
import tn.esprit.backend.dto.QuizResultDTO;
import tn.esprit.backend.exception.ResourceNotFoundException;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

/**
 * Génération, persistance et envoi par email des certificats de réussite aux quiz.
 */
@Service
@RequiredArgsConstructor
@Transactional
public class CertificatService {

    private static final String PREFIXE_CODE = "CERT-";
    private static final int MAX_TENTATIVES_CODE_UNIQUE = 15;

    private final CertificatRepository certificatRepository;
    private final UserRepository userRepository;
    private final QuizRepository quizRepository;
    private final EmailService emailService;
    private final CertificatPdfService certificatPdfService;

    public String genererCodeCertificat() {
        String datePart = LocalDateTime.now().format(DateTimeFormatter.BASIC_ISO_DATE);
        String randomPart = UUID.randomUUID().toString().replace("-", "").substring(0, 6).toUpperCase();
        return PREFIXE_CODE + datePart + "-" + randomPart;
    }

    /**
     * Génère un code unique en base (réessaie si collision).
     */
    public String genererCodeCertificatUnique() {
        for (int i = 0; i < MAX_TENTATIVES_CODE_UNIQUE; i++) {
            String code = genererCodeCertificat();
            if (!certificatRepository.existsByCodeCertificat(code)) {
                return code;
            }
        }
        throw new IllegalStateException("Impossible de générer un code certificat unique.");
    }

    public Certificat genererCertificat(Long userId, Long quizId, Double score, Double pourcentage) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Utilisateur introuvable avec l'id : " + userId));
        Quiz quiz = quizRepository.findByIdWithCoursAndModule(quizId)
                .orElseThrow(() -> new ResourceNotFoundException("Quiz introuvable avec l'id : " + quizId));

        Certificat cert = new Certificat();
        cert.setCodeCertificat(genererCodeCertificatUnique());
        cert.setDateObtention(LocalDateTime.now());
        cert.setScore(score);
        cert.setPourcentage(pourcentage);
        cert.setEmailEnvoye(false);
        cert.setUser(user);
        cert.setQuiz(quiz);
        if (quiz.getCours() != null && quiz.getCours().getModule() != null) {
            cert.setModule(quiz.getCours().getModule());
        }
        Certificat saved = certificatRepository.save(cert);
        byte[] pdf = certificatPdfService.genererDepuisCertificat(saved);
        saved.setFichierPdf(pdf);
        saved.setNomFichierPdf(nomFichierPdfPourCode(saved.getCodeCertificat()));
        return certificatRepository.save(saved);
    }

    /**
     * Charge le certificat avec les relations nécessaires au PDF, et génère le fichier s’il manque (anciennes lignes).
     */
    public Certificat getOuGenererPdfCertificat(Long certificatId) {
        Certificat c = certificatRepository.findByIdForPdf(certificatId)
                .orElseThrow(() -> new ResourceNotFoundException("Certificat introuvable avec l'id : " + certificatId));
        if (c.getFichierPdf() != null && c.getFichierPdf().length > 0) {
            return c;
        }
        byte[] pdf = certificatPdfService.genererDepuisCertificat(c);
        c.setFichierPdf(pdf);
        c.setNomFichierPdf(nomFichierPdfPourCode(c.getCodeCertificat()));
        return certificatRepository.save(c);
    }

    private static String nomFichierPdfPourCode(String codeCertificat) {
        String safe = codeCertificat != null ? codeCertificat.replaceAll("[^a-zA-Z0-9_-]", "_") : "certificat";
        return "certificat-" + safe + ".pdf";
    }

    public void envoyerCertificatParEmail(Certificat certificat) {
        User user = certificat.getUser();
        if (user == null || !StringUtils.hasText(user.getEmail())) {
            return;
        }
        Quiz quiz = certificat.getQuiz();
        String titreQuiz = quiz != null ? quiz.getTitre() : "Quiz";
        String nom = user.getNom() != null ? user.getNom() : "Étudiant";

        String corps = "Bonjour " + nom + ",\n\n"
                + "Félicitations, vous avez réussi le quiz « " + titreQuiz + " ».\n\n"
                + "Votre score : " + certificat.getScore() + "\n"
                + "Votre pourcentage : " + certificat.getPourcentage() + " %\n"
                + "Code du certificat : " + certificat.getCodeCertificat() + "\n"
                + "Date d'obtention : "
                + certificat.getDateObtention().format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm"))
                + "\n\n"
                + "Vous trouverez en pièce jointe le certificat au format PDF.\n\n"
                + "Cordialement,\nL'équipe e-learning";

        String nomPiece = certificat.getNomFichierPdf() != null ? certificat.getNomFichierPdf() : "certificat.pdf";
        if (certificat.getFichierPdf() != null && certificat.getFichierPdf().length > 0) {
            emailService.envoyerTexteAvecPdf(user.getEmail(), "Votre certificat de réussite (PDF)", corps, nomPiece,
                    certificat.getFichierPdf());
        } else {
            emailService.envoyerTexte(user.getEmail(), "Votre certificat de réussite", corps);
        }
        certificat.setEmailEnvoye(true);
        certificatRepository.save(certificat);
    }

    public List<Certificat> getCertificatsByUser(Long userId) {
        if (!userRepository.existsById(userId)) {
            throw new ResourceNotFoundException("Utilisateur introuvable avec l'id : " + userId);
        }
        return certificatRepository.findByUser_IdOrderByDateObtentionDesc(userId);
    }

    public Certificat getCertificatById(Long id) {
        return certificatRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Certificat introuvable avec l'id : " + id));
    }

    public Certificat getCertificatByCode(String code) {
        return certificatRepository.findByCodeCertificat(code)
                .orElseThrow(() -> new ResourceNotFoundException("Certificat introuvable pour le code : " + code));
    }

    public List<Certificat> getAllCertificats() {
        return certificatRepository.findAll();
    }

    /**
     * Après correction du quiz : si réussi et {@code userId} fourni, crée le certificat (une seule fois par user/quiz) et envoie l’email.
     */
    public void appliquerCertificatSiReussi(QuizResultDTO resultat, Long userId, String userName, String userEmail) {
        resultat.setCertificatGenere(false);
        resultat.setCertificatDejaObtenu(false);
        resultat.setCertificatId(null);
        resultat.setCodeCertificat(null);
        resultat.setMessageCertificat(null);
        resultat.setCertificatPdfUrl(null);
        resultat.setEmailEnvoye(false);
        resultat.setPdfDisponible(false);

        if (!resultat.isValide() || userId == null) {
            if (resultat.isValide() && userId == null) {
                resultat.setMessageCertificat("Quiz réussi : indiquez userId dans le corps pour générer un certificat.");
            }
            return;
        }

        User u = userRepository.findById(userId).orElseGet(() -> {
            User newUser = new User();
            newUser.setId(userId);
            newUser.setRole("STUDENT");
            return newUser;
        });
        boolean needsSave = false;
        if (userName != null && !userName.isBlank() && (u.getNom() == null || u.getNom().equals("Étudiant"))) {
            u.setNom(userName);
            needsSave = true;
        } else if (u.getNom() == null) {
            u.setNom("Étudiant");
            needsSave = true;
        }
        if (userEmail != null && !userEmail.isBlank() && (u.getEmail() == null || u.getEmail().isBlank())) {
            u.setEmail(userEmail);
            needsSave = true;
        }
        if (needsSave || u.getId() == null) {
            userRepository.save(u);
        }

        if (certificatRepository.existsByUser_IdAndQuiz_Id(userId, resultat.getQuizId())) {
            Certificat existant = certificatRepository.findByUser_IdAndQuiz_Id(userId, resultat.getQuizId()).orElseThrow();
            resultat.setCertificatDejaObtenu(true);
            resultat.setCertificatId(existant.getId());
            resultat.setCodeCertificat(existant.getCodeCertificat());
            resultat.setCertificatPdfUrl("/api/certificats/" + existant.getId() + "/pdf");
            resultat.setMessageCertificat("Certificat déjà obtenu pour ce quiz (aucun nouvel email envoyé).");
            boolean pdfOk = existant.getFichierPdf() != null && existant.getFichierPdf().length > 0;
            resultat.setPdfDisponible(pdfOk);
            resultat.setEmailEnvoye(Boolean.TRUE.equals(existant.getEmailEnvoye()));
            return;
        }

        Certificat cert = genererCertificat(userId, resultat.getQuizId(), resultat.getScore(), resultat.getPourcentage());
        resultat.setCertificatGenere(true);
        resultat.setCertificatId(cert.getId());
        resultat.setCodeCertificat(cert.getCodeCertificat());
        resultat.setCertificatPdfUrl("/api/certificats/" + cert.getId() + "/pdf");
        resultat.setPdfDisponible(cert.getFichierPdf() != null && cert.getFichierPdf().length > 0);

        try {
            if (StringUtils.hasText(cert.getUser().getEmail())) {
                envoyerCertificatParEmail(cert);
                resultat.setMessageCertificat("Certificat créé et email envoyé.");
                resultat.setEmailEnvoye(true);
            } else {
                resultat.setMessageCertificat("Certificat créé : ajoutez un email sur le profil utilisateur pour l'envoi automatique.");
                resultat.setEmailEnvoye(false);
            }
        } catch (Exception ex) {
            resultat.setMessageCertificat("Certificat créé mais l'email n'a pas pu être envoyé : " + ex.getMessage());
            resultat.setEmailEnvoye(false);
        }
    }

    public CertificatResponseDTO toDto(Certificat c) {
        boolean pdfDispo = c.getFichierPdf() != null && c.getFichierPdf().length > 0;
        String pdfUrl = pdfDispo ? "/api/certificats/" + c.getId() + "/pdf" : null;
        return new CertificatResponseDTO(
                c.getId(),
                c.getCodeCertificat(),
                c.getDateObtention(),
                c.getScore(),
                c.getPourcentage(),
                c.getEmailEnvoye(),
                c.getUser() != null ? c.getUser().getId() : null,
                c.getQuiz() != null ? c.getQuiz().getId() : null,
                c.getModule() != null ? c.getModule().getId() : null,
                c.getUser() != null ? c.getUser().getNom() : null,
                c.getQuiz() != null ? c.getQuiz().getTitre() : null,
                c.getModule() != null ? c.getModule().getTitre() : null,
                pdfDispo,
                pdfUrl
        );
    }

    public List<CertificatResponseDTO> toDtoList(List<Certificat> list) {
        return list.stream().map(this::toDto).collect(Collectors.toList());
    }

    public boolean existsByUserIdAndQuizId(Long userId, Long quizId) {
        return certificatRepository.existsByUser_IdAndQuiz_Id(userId, quizId);
    }
}
