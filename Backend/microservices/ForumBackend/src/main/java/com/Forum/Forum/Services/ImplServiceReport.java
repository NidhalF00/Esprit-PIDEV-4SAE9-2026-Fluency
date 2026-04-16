package com.Forum.Forum.Services;

import com.Forum.Forum.Repository.IReplyRepository;
import com.Forum.Forum.Repository.IReportRepository;
import com.Forum.Forum.entity.Reply;
import com.Forum.Forum.entity.Report;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@AllArgsConstructor
public class ImplServiceReport {

    private IReportRepository reportRepository;
    private IReplyRepository replyRepository;
    private EmailService emailService;

    public Report create(Long replyId, String reason) {
        Reply reply = replyRepository.findById(replyId)
                .orElseThrow(() -> new RuntimeException("Reply not found"));

        Report report = new Report();
        report.setReply(reply);
        report.setReason(Report.ReportReason.valueOf(reason));
        report.setStatus(Report.ReportStatus.PENDING);

        Report saved = reportRepository.save(report);

        // Notify admin by email
        emailService.notifyAdminReport(
                reply.getContent(),
                reason,
                reply.getTopic().getTitle()
        );

        return saved;
    }

    public List<Report> getAll() {
        return reportRepository.findAll();
    }

    public List<Report> getPending() {
        return reportRepository.findByStatus(Report.ReportStatus.PENDING);
    }

    public Report updateStatus(Long id, String status) {
        Report report = reportRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Report not found"));
        report.setStatus(Report.ReportStatus.valueOf(status));
        return reportRepository.save(report);
    }
}