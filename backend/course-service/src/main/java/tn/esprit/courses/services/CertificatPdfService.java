package tn.esprit.courses.services;

import com.openhtmltopdf.outputdevice.helper.BaseRendererBuilder.PageSizeUnits;
import com.openhtmltopdf.pdfboxout.PdfRendererBuilder;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StreamUtils;
import tn.esprit.courses.Entity.Certificat;
import tn.esprit.courses.Entity.Cours;
import tn.esprit.courses.Entity.Module;
import tn.esprit.courses.Entity.Quiz;
import tn.esprit.courses.Entity.User;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.UncheckedIOException;
import java.nio.charset.StandardCharsets;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

/**
 * Génère un PDF de certificat à partir d'un modèle HTML/CSS (rendu OpenHTMLToPDF).
 */
@Service
public class CertificatPdfService {

    private static final DateTimeFormatter DATE_ISO = DateTimeFormatter.ISO_LOCAL_DATE_TIME;

    public byte[] genererDepuisCertificat(Certificat certificat) {
        User user = certificat.getUser();
        Quiz quiz = certificat.getQuiz();
        String titulaire = user != null && user.getNom() != null ? user.getNom() : "Participant";
        String titreQuiz = quiz != null && quiz.getTitre() != null ? quiz.getTitre() : "Quiz";
        String titreCours = "";
        String titreModule = "";
        if (quiz != null && quiz.getCours() != null) {
            Cours cours = quiz.getCours();
            if (cours.getTitre() != null) {
                titreCours = cours.getTitre();
            }
            Module mod = cours.getModule();
            if (mod != null && mod.getTitre() != null) {
                titreModule = mod.getTitre();
            }
        }
        Double scoreMax = quiz != null ? quiz.getScoreMax() : null;
        String detailEval = construireDetailEvaluation(titreCours, titreModule);
        Long certId = certificat.getId();
        String pdfPath = certId != null ? "/api/certificats/" + certId + "/pdf" : "—";
        String badgeEmail = Boolean.TRUE.equals(certificat.getEmailEnvoye())
                ? "E-mail envoyé"
                : "E-mail non envoyé";

        String scoreTxt = formaterScore(certificat.getScore(), scoreMax);
        String pctTxt = certificat.getPourcentage() != null
                ? String.format(Locale.FRANCE, "%.2f %%", certificat.getPourcentage())
                : "—";
        String dateIso = certificat.getDateObtention() != null
                ? certificat.getDateObtention().format(DATE_ISO)
                : "—";
        String code = certificat.getCodeCertificat() != null ? certificat.getCodeCertificat() : "—";

        String html = remplirTemplate(
                esc(titulaire),
                esc(titreQuiz),
                esc(detailEval),
                esc(scoreTxt),
                esc(pctTxt),
                esc(code),
                esc(dateIso),
                esc(badgeEmail),
                esc(pdfPath)
        );
        return htmlVersPdf(html);
    }

    private static String construireDetailEvaluation(String cours, String module) {
        if (!cours.isEmpty() && !module.isEmpty()) {
            return "Cours : " + cours + " — Module : " + module;
        }
        if (!cours.isEmpty()) {
            return "Cours : " + cours;
        }
        if (!module.isEmpty()) {
            return "Module : " + module;
        }
        return " ";
    }

    private static String formaterScore(Double score, Double scoreMax) {
        if (score == null) {
            return "—";
        }
        String s = String.format(Locale.FRANCE, "%.2f", score);
        if (scoreMax != null && scoreMax > 0) {
            return s + " / " + String.format(Locale.FRANCE, "%.2f", scoreMax);
        }
        return s;
    }

    private static String esc(String s) {
        if (s == null) {
            return "";
        }
        return s.replace("&", "&amp;")
                .replace("<", "&lt;")
                .replace(">", "&gt;")
                .replace("\"", "&quot;");
    }

    private String remplirTemplate(
            String titulaire,
            String titreEvaluation,
            String detailEvaluation,
            String score,
            String pourcentage,
            String code,
            String dateIso,
            String badgeEmail,
            String pdfPath
    ) {
        try {
            ClassPathResource res = new ClassPathResource("templates/certificat-pdf.html");
            String tpl = new String(StreamUtils.copyToByteArray(res.getInputStream()), StandardCharsets.UTF_8);
            return tpl.replace("{{TITULAIRE}}", titulaire)
                    .replace("{{TITRE_EVALUATION}}", titreEvaluation)
                    .replace("{{DETAIL_EVALUATION}}", detailEvaluation)
                    .replace("{{SCORE}}", score)
                    .replace("{{POURCENTAGE}}", pourcentage)
                    .replace("{{CODE}}", code)
                    .replace("{{DATE_ISO}}", dateIso)
                    .replace("{{BADGE_EMAIL}}", badgeEmail)
                    .replace("{{PDF_PATH}}", pdfPath);
        } catch (IOException e) {
            throw new IllegalStateException("Modèle HTML certificat introuvable (templates/certificat-pdf.html).", e);
        }
    }

    private byte[] htmlVersPdf(String html) {
        ByteArrayOutputStream os = new ByteArrayOutputStream();
        PdfRendererBuilder builder = new PdfRendererBuilder();
        builder.useFastMode();
        builder.useDefaultPageSize(210, 297, PageSizeUnits.MM);
        builder.useFont(() -> {
            try {
                return new ClassPathResource("fonts/DejaVuSans.ttf").getInputStream();
            } catch (IOException e) {
                throw new UncheckedIOException(e);
            }
        }, "DejaVu Sans");
        builder.withHtmlContent(html, null);
        builder.toStream(os);
        try {
            builder.run();
        } catch (IOException e) {
            throw new IllegalStateException("Impossible de générer le PDF du certificat.", e);
        }
        return os.toByteArray();
    }
}
