package com.Forum.Forum.controller;

import com.Forum.Forum.Services.ImplServiceReport;
import com.Forum.Forum.entity.Report;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/report")
public class ReportController {

    private ImplServiceReport reportService;

    @PostMapping("/reply/{replyId}")
    public Report create(
            @PathVariable Long replyId,
            @RequestBody Map<String, String> body) {
        return reportService.create(replyId, body.get("reason"));
    }

    @GetMapping
    public List<Report> getAll() {
        return reportService.getAll();
    }

    @GetMapping("/pending")
    public List<Report> getPending() {
        return reportService.getPending();
    }

    @PutMapping("/{id}/status")
    public Report updateStatus(
            @PathVariable Long id,
            @RequestBody Map<String, String> body) {
        return reportService.updateStatus(id, body.get("status"));
    }
}