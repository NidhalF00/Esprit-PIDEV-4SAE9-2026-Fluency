package com.Forum.Forum.controller;

import com.Forum.Forum.Services.IServiceTopic;
import com.Forum.Forum.entity.Topic;
import com.Forum.Forum.entity.TopicDTO;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/topic")
public class TopicController {
    private IServiceTopic serviceTopic;

    @PostMapping("/category/{categoryId}")
    public TopicDTO create(
            @RequestBody TopicDTO dto,
            @PathVariable Long categoryId) {
        return serviceTopic.create(dto, categoryId);
    }

    /**
     * Scenario 1: créer un topic lié à un module du microservice courses.
     */
    @PostMapping("/category/{categoryId}/module/{moduleId}")
    public TopicDTO createForModule(
            @RequestBody TopicDTO dto,
            @PathVariable Long categoryId,
            @PathVariable Long moduleId) {
        return serviceTopic.createForModule(dto, categoryId, moduleId);
    }

    /**
     * Scenario 2: créer un topic lié à un cours du microservice courses.
     */
    @PostMapping("/category/{categoryId}/cours/{coursId}")
    public TopicDTO createForCours(
            @RequestBody TopicDTO dto,
            @PathVariable Long categoryId,
            @PathVariable Long coursId) {
        return serviceTopic.createForCours(dto, categoryId, coursId);
    }

    @GetMapping
    public List<Topic> getAll() {
        return serviceTopic.getAll();
    }

    @GetMapping("/category/{categoryId}")
    public List<TopicDTO> getByCategory(@PathVariable Long categoryId) {
        return serviceTopic.getByCategory(categoryId);
    }

    /**
     * Scenario 3: récupérer les discussions liées à un module.
     */
    @GetMapping("/module/{moduleId}")
    public List<TopicDTO> getByModule(@PathVariable Long moduleId) {
        return serviceTopic.getByModule(moduleId);
    }

    @GetMapping("/module/{moduleId}/count")
    public Map<String, Long> countByModule(@PathVariable Long moduleId) {
        return Map.of("moduleId", moduleId, "topicsCount", serviceTopic.countByModule(moduleId));
    }

    @GetMapping("/cours/{coursId}")
    public List<TopicDTO> getByCours(@PathVariable Long coursId) {
        return serviceTopic.getByCours(coursId);
    }

    @PutMapping("/{id}")
    public TopicDTO update(@PathVariable Long id, @RequestBody TopicDTO dto) {
        return serviceTopic.update(id, dto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        serviceTopic.delete(id);
    }

    @GetMapping("/search")
    public List<TopicDTO> search(
            @RequestParam(required = false) String title,
            @RequestParam(required = false) Long categoryId,
            @RequestParam(required = false) String dateFrom) {
        return serviceTopic.searchTopics(title, categoryId, dateFrom);
    }
}
