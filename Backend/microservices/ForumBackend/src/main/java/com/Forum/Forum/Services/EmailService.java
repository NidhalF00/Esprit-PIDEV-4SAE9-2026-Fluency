package com.Forum.Forum.Services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.lang.Nullable;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class EmailService {

    private static final Logger LOG = LoggerFactory.getLogger(EmailService.class);

    @Nullable
    private final JavaMailSender mailSender;

    @Value("${forum.admin.email:}")
    private String adminEmail;

    public EmailService(@Nullable JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    // ─── Generic send method ───
    private void send(String to, String subject, String body) {
        if (mailSender == null) {
            LOG.warn("Email skipped because JavaMailSender is not configured. Subject={}", subject);
            return;
        }
        if (to == null || to.isBlank()) {
            LOG.warn("Email skipped because destination address is empty. Subject={}", subject);
            return;
        }
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(subject);
        message.setText(body);
        mailSender.send(message);
    }

    // ─── Notify topic author when someone replies ───
    public void notifyTopicAuthor(String authorEmail, String topicTitle, String replyContent) {
        send(
                authorEmail,
                "💬 New reply on your topic : " + topicTitle,
                "Hello,\n\n"
                        + "Someone replied to your topic.\n\n"
                        + "Topic : " + topicTitle + "\n"
                        + "Reply : " + replyContent + "\n\n"
                        + "Visit the forum to see the full discussion.\n\n"
                        + "ForumApp"
        );
    }

    // ─── Notify admin when a new topic is created ───
    public void notifyAdminTopicCreated(String topicTitle, String categoryName, String authorEmail) {
        send(
                adminEmail,
                "📢 New Topic Created : " + topicTitle,
                "Hello Admin,\n\n"
                        + "A new topic has been created.\n\n"
                        + "Title    : " + topicTitle + "\n"
                        + "Category : " + categoryName + "\n"
                        + "Author   : " + authorEmail + "\n\n"
                        + "ForumApp"
        );
    }

    // ─── Notify admin when a topic is deleted ───
    public void notifyAdminTopicDeleted(String topicTitle) {
        send(
                adminEmail,
                "🗑️ Topic Deleted : " + topicTitle,
                "Hello Admin,\n\n"
                        + "The following topic has been deleted.\n\n"
                        + "Title : " + topicTitle + "\n\n"
                        + "ForumApp"
        );
    }
    // ✅ NEW — notify admin when a reply is reported
    public void notifyAdminReport(String replyContent, String reason, String topicTitle) {
        send(adminEmail,
                "🚨 New Report — Reply in : " + topicTitle,
                "Hello Admin,\n\nA reply has been reported.\n\n"
                        + "Topic  : " + topicTitle + "\n"
                        + "Reply  : " + replyContent + "\n"
                        + "Reason : " + reason + "\n"
                        + "Status : PENDING\n\n"
                        + "Please review this report.\n\nForumApp");
    }
}