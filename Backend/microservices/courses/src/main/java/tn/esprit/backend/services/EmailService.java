package tn.esprit.backend.services;

import jakarta.annotation.PostConstruct;
import jakarta.mail.AuthenticationFailedException;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

/**
 * Envoi d’emails (SMTP). Pour Gmail : mot de passe d’application + même compte que {@code spring.mail.username}.
 */
@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender mailSender;

    @Value("${spring.mail.username:}")
    private String expediteur;

    @Value("${spring.mail.password:}")
    private String motDePasseMail;

    @PostConstruct
    void normaliserIdentifiantsMail() {
        if (expediteur != null) {
            expediteur = expediteur.trim();
        }
        if (motDePasseMail != null) {
            motDePasseMail = motDePasseMail.replace(" ", "").trim();
        }
    }

    public void envoyerTexte(String destinataire, String sujet, String corps) {
        envoyerMime(destinataire, sujet, corps, null, null);
    }

    /**
     * Email texte avec une pièce jointe PDF (certificat).
     */
    public void envoyerTexteAvecPdf(String destinataire, String sujet, String corps, String nomPieceJointe, byte[] pdf) {
        envoyerMime(destinataire, sujet, corps, nomPieceJointe, pdf);
    }

    private void envoyerMime(String destinataire, String sujet, String corps, String nomPieceJointe, byte[] pdf) {
        verifierConfigurationSmtp();
        String to = destinataire != null ? destinataire.trim() : "";
        if (!StringUtils.hasText(to)) {
            throw new IllegalStateException("Adresse destinataire vide.");
        }
        boolean avecPieceJointe = pdf != null && pdf.length > 0 && StringUtils.hasText(nomPieceJointe);
        try {
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, avecPieceJointe, "UTF-8");
            helper.setFrom(adresseExpediteur());
            helper.setTo(to);
            helper.setSubject(sujet != null ? sujet : "");
            helper.setText(corps != null ? corps : "", false);
            if (avecPieceJointe) {
                helper.addAttachment(nomPieceJointe.trim(), new ByteArrayResource(pdf));
            }
            mailSender.send(mimeMessage);
        } catch (MessagingException e) {
            if (causeEstEchecAuth(e)) {
                throw new IllegalStateException(messageAuthentificationEchouee(), e);
            }
            throw new IllegalStateException("Impossible de préparer ou d’envoyer l’email : " + resumeErreur(e), e);
        } catch (org.springframework.mail.MailAuthenticationException e) {
            throw new IllegalStateException(messageAuthentificationEchouee(), e);
        } catch (MailException e) {
            if (causeEstEchecAuth(e)) {
                throw new IllegalStateException(messageAuthentificationEchouee(), e);
            }
            throw new IllegalStateException("Échec d’envoi SMTP : " + resumeErreur(e), e);
        }
    }

    private InternetAddress adresseExpediteur() throws MessagingException {
        String from = expediteur.trim();
        try {
            return new InternetAddress(from, "Fluency e-learning", "UTF-8");
        } catch (Exception e) {
            throw new MessagingException("Adresse expéditeur invalide : " + from, e);
        }
    }

    private void verifierConfigurationSmtp() {
        if (!StringUtils.hasText(expediteur)) {
            throw new IllegalStateException(
                    "spring.mail.username est vide : définissez SPRING_MAIL_USERNAME ou spring.mail.username "
                            + "dans config/mail-secret.properties (même compte Gmail que le mot de passe d’application).");
        }
        if (!StringUtils.hasText(motDePasseMail)) {
            throw new IllegalStateException(
                    "spring.mail.password est vide : pour Gmail, définissez SPRING_MAIL_PASSWORD avec un "
                            + "mot de passe d’application (Google Compte > Sécurité > Validation en deux étapes > "
                            + "Mots de passe des applications). Collez les 16 caractères sans espaces.");
        }
    }

    private static boolean causeEstEchecAuth(Throwable e) {
        for (Throwable t = e; t != null; t = t.getCause()) {
            if (t instanceof AuthenticationFailedException) {
                return true;
            }
            String m = t.getMessage();
            if (m != null && (m.contains("535") || m.contains("534") || m.contains("Authentication failed"))) {
                return true;
            }
        }
        return false;
    }

    private static String resumeErreur(Throwable e) {
        String m = e.getMessage();
        if (StringUtils.hasText(m)) {
            return m;
        }
        Throwable c = e.getCause();
        return c != null && StringUtils.hasText(c.getMessage()) ? c.getMessage() : e.getClass().getSimpleName();
    }

    private static String messageAuthentificationEchouee() {
        return "Authentification SMTP refusée (Gmail). Vérifiez : (1) validation en deux étapes activée ; "
                + "(2) mot de passe d’application (16 caractères) dans SPRING_MAIL_PASSWORD ou mail-secret.properties, "
                + "sans espaces ; (3) spring.mail.username / SPRING_MAIL_USERNAME = exactement le même compte Gmail "
                + "où ce mot de passe d’application a été créé (une incohérence entre les deux comptes provoque l’erreur 535).";
    }
}
