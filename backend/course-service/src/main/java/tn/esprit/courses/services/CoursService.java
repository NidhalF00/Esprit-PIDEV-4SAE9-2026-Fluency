package tn.esprit.courses.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.esprit.courses.Entity.Cours;
import tn.esprit.courses.Entity.Module;
import tn.esprit.courses.Repository.CoursRepository;
import tn.esprit.courses.Repository.ModuleRepository;
import tn.esprit.courses.exception.ResourceNotFoundException;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class CoursService {

    private final CoursRepository coursRepository;
    private final ModuleRepository moduleRepository;

    public List<Cours> getAll() {
        return coursRepository.findAll();
    }

    public Cours getById(Long id) {
        return coursRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Cours introuvable avec l'id : " + id));
    }

    public Cours create(Cours cours, Long moduleId) {
        return create(cours, moduleId, null);
    }

    public Cours create(Cours cours, Long moduleId, MultipartFile fichierPdf) {
        Module module = moduleRepository.findById(moduleId)
                .orElseThrow(() -> new ResourceNotFoundException("Module introuvable avec l'id : " + moduleId));
        cours.setId(null);
        attacherFichierPdf(cours, fichierPdf);
        cours.setModule(module);
        module.getCours().add(cours);
        return coursRepository.save(cours);
    }

    public Cours update(Long id, Cours cours, Long moduleId) {
        return update(id, cours, moduleId, null);
    }

    public Cours update(Long id, Cours cours, Long moduleId, MultipartFile fichierPdf) {
        Cours existing = getById(id);
        existing.setTitre(cours.getTitre());
        existing.setContenu(cours.getContenu());
        existing.setOrdreCours(cours.getOrdreCours());
        existing.setDuree(cours.getDuree());
        existing.setTypeContenu(cours.getTypeContenu());
        existing.setUrlRessource(cours.getUrlRessource());
        existing.setGratuit(cours.getGratuit());
        existing.setPublie(cours.getPublie());
        attacherFichierPdf(existing, fichierPdf);

        if (moduleId != null) {
            Module newModule = moduleRepository.findById(moduleId)
                    .orElseThrow(() -> new ResourceNotFoundException("Module introuvable avec l'id : " + moduleId));
            Module oldModule = existing.getModule();
            if (oldModule != null && !oldModule.getId().equals(newModule.getId())) {
                oldModule.getCours().remove(existing);
            }
            existing.setModule(newModule);
            newModule.getCours().add(existing);
        }

        return coursRepository.save(existing);
    }

    public void delete(Long id) {
        Cours existing = getById(id);
        Module module = existing.getModule();
        if (module != null) {
            module.getCours().remove(existing);
        }
        coursRepository.delete(existing);
    }

    /**
     * Si un fichier est fourni, remplace le PDF stocké (création ou mise à jour).
     */
    private void attacherFichierPdf(Cours cours, MultipartFile fichierPdf) {
        if (fichierPdf == null || fichierPdf.isEmpty()) {
            return;
        }
        String name = fichierPdf.getOriginalFilename();
        if (name == null || !name.toLowerCase().endsWith(".pdf")) {
            throw new IllegalArgumentException("Le fichier doit être au format PDF (.pdf).");
        }
        try {
            cours.setNomFichierPdf(name);
            cours.setFichierPdf(fichierPdf.getBytes());
        } catch (IOException e) {
            throw new IllegalArgumentException("Impossible de lire le fichier PDF : " + e.getMessage());
        }
    }
}
