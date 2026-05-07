package tn.esprit.courses.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.util.StringUtils;

import java.util.Properties;

/**
 * Configuration explicite du transport SMTP (Gmail) pour éviter les échecs d’authentification
 * liés aux propriétés implicites (STARTTLS, confiance du certificat, timeouts).
 */
@Configuration
public class MailConfig {

    @Bean
    public JavaMailSender javaMailSender(
            @Value("${spring.mail.host:smtp.gmail.com}") String host,
            @Value("${spring.mail.port:587}") int port,
            @Value("${spring.mail.username:}") String username,
            @Value("${spring.mail.password:}") String password,
            @Value("${spring.mail.default-encoding:UTF-8}") String defaultEncoding) {

        JavaMailSenderImpl sender = new JavaMailSenderImpl();
        sender.setHost(host);
        sender.setPort(port);
        sender.setDefaultEncoding(StringUtils.hasText(defaultEncoding) ? defaultEncoding.trim() : "UTF-8");
        if (StringUtils.hasText(username)) {
            sender.setUsername(username.trim());
        }
        if (StringUtils.hasText(password)) {
            sender.setPassword(password.replace(" ", "").trim());
        }

        Properties p = new Properties();
        p.put("mail.transport.protocol", "smtp");
        p.put("mail.smtp.auth", "true");
        p.put("mail.smtp.starttls.enable", "true");
        p.put("mail.smtp.starttls.required", "true");
        p.put("mail.smtp.ssl.checkserveridentity", "true");
        p.put("mail.smtp.ssl.trust", host);
        p.put("mail.smtp.connectiontimeout", "15000");
        p.put("mail.smtp.timeout", "15000");
        p.put("mail.smtp.writetimeout", "15000");
        p.put("mail.smtp.quitwait", "false");
        sender.setJavaMailProperties(p);
        return sender;
    }
}
