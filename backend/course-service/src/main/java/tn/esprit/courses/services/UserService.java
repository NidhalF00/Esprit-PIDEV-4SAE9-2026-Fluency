package tn.esprit.courses.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.esprit.courses.Entity.User;
import tn.esprit.courses.Repository.UserRepository;
import tn.esprit.courses.exception.ResourceNotFoundException;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class UserService {

    private final UserRepository userRepository;

    public List<User> getAll() {
        return userRepository.findAll();
    }

    public User getById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Utilisateur introuvable avec l'id : " + id));
    }

    public User create(User user) {
        user.setId(null);
        return userRepository.save(user);
    }

    public User update(Long id, User user) {
        User existing = getById(id);
        existing.setNom(user.getNom());
        existing.setRole(user.getRole());
        existing.setEmail(user.getEmail());
        return userRepository.save(existing);
    }

    public void delete(Long id) {
        User existing = getById(id);
        userRepository.delete(existing);
    }
}
