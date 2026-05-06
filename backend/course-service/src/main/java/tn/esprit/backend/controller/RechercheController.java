package tn.esprit.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.backend.Entity.Cours;
import tn.esprit.backend.Entity.Module;
import tn.esprit.backend.services.RechercheService;

import java.util.List;

@RestController
@RequestMapping("/api/recherche")
@RequiredArgsConstructor
public class RechercheController {

    private final RechercheService rechercheService;

    @GetMapping("/modules")
    public ResponseEntity<List<Module>> rechercherModules(
            @RequestParam(required = false) String motCle,
            @RequestParam(required = false) String niveau,
            @RequestParam(required = false) String categorie) {
        return ResponseEntity.ok(rechercheService.rechercherModules(motCle, niveau, categorie));
    }

    @GetMapping("/cours")
    public ResponseEntity<List<Cours>> rechercherCours(
            @RequestParam(required = false) String titre,
            @RequestParam(required = false) String typeContenu,
            @RequestParam(required = false) Boolean publie) {
        return ResponseEntity.ok(rechercheService.rechercherCours(titre, typeContenu, publie));
    }

    @GetMapping("/cours/type/{typeContenu}")
    public ResponseEntity<List<Cours>> parType(@PathVariable String typeContenu) {
        return ResponseEntity.ok(rechercheService.rechercherCoursParType(typeContenu));
    }
}
