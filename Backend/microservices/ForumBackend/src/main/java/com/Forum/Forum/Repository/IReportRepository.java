package com.Forum.Forum.Repository;

import com.Forum.Forum.entity.Report;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface IReportRepository extends JpaRepository<Report, Long> {
    List<Report> findByStatus(Report.ReportStatus status);
}