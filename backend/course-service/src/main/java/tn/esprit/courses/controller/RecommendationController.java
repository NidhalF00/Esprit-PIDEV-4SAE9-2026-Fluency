package tn.esprit.courses.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.courses.Entity.Cours;
import tn.esprit.courses.Entity.Module;
import tn.esprit.courses.services.RecommendationService;

import java.util.List;

@RestController
@RequestMapping("/api/recommandations")
@RequiredArgsConstructor
public class RecommendationController {

    private final RecommendationService recommendationService;

    @GetMapping("/modules/niveau/{niveau}")
    public ResponseEntity<List<Module>> parNiveau(@PathVariable String niveau) {
        return ResponseEntity.ok(recommendationService.recommanderModulesParNiveau(niveau));
    }

    @GetMapping("/modules/categorie/{categorie}")
    public ResponseEntity<List<Module>> parCategorie(@PathVariable String categorie) {
        return ResponseEntity.ok(recommendationService.recommanderModulesParCategorie(categorie));
    }

    @GetMapping("/cours/module/{moduleId}")
    public ResponseEntity<List<Cours>> coursDuModule(@PathVariable Long moduleId) {
        return ResponseEntity.ok(recommendationService.recommanderCoursSuivants(moduleId));
    }

    @GetMapping("/cours/module/{moduleId}/apres/{ordre}")
    public ResponseEntity<List<Cours>> coursApresOrdre(
            @PathVariable Long moduleId,
            @PathVariable Integer ordre) {
        return ResponseEntity.ok(recommendationService.recommanderCoursApresOrdre(moduleId, ordre));
    }
}
