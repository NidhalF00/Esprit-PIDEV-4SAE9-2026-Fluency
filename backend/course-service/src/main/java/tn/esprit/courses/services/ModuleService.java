package tn.esprit.courses.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.esprit.courses.Entity.Module;
import tn.esprit.courses.Repository.ModuleRepository;
import tn.esprit.courses.exception.ResourceNotFoundException;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class ModuleService {

    private final ModuleRepository moduleRepository;

    public List<Module> getAll() {
        return moduleRepository.findAll();
    }

    public Module getById(Long id) {
        return moduleRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Module introuvable avec l'id : " + id));
    }

    public Module create(Module module) {
        module.setId(null);
        return moduleRepository.save(module);
    }

    public Module update(Long id, Module module) {
        Module existing = getById(id);
        existing.setTitre(module.getTitre());
        existing.setDescription(module.getDescription());
        existing.setNiveau(module.getNiveau());
        existing.setCategorie(module.getCategorie());
        existing.setDureeTotale(module.getDureeTotale());
        existing.setActif(module.getActif());
        return moduleRepository.save(existing);
    }

    public void delete(Long id) {
        Module existing = getById(id);
        moduleRepository.delete(existing);
    }
}
