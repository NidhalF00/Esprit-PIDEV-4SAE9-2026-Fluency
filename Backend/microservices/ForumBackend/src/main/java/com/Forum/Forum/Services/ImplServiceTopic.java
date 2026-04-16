package com.Forum.Forum.Services;

import com.Forum.Forum.Repository.ICategoryRepository;
import com.Forum.Forum.Repository.ITopicRepository;
import com.Forum.Forum.client.CoursesCoursClient;
import com.Forum.Forum.client.CoursesModuleClient;
import com.Forum.Forum.client.CoursesUserClient;
import com.Forum.Forum.dto.CoursesCoursDTO;
import com.Forum.Forum.dto.CoursesModuleDTO;
import com.Forum.Forum.dto.CoursesUserDTO;
import com.Forum.Forum.entity.Category;
import com.Forum.Forum.entity.Topic;
import com.Forum.Forum.entity.TopicDTO;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.util.StringUtils;

import java.time.LocalDateTime;
import java.util.List;

@Service
@AllArgsConstructor
public class ImplServiceTopic implements IServiceTopic {

    private ITopicRepository repository;
    private ICategoryRepository categoryRepository;
    private EmailService emailService;
    private CoursesUserClient coursesUserClient;
    private CoursesModuleClient coursesModuleClient;
    private CoursesCoursClient coursesCoursClient;

    @Override
    public TopicDTO create(TopicDTO dto, Long categoryId) {
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Category not found"));

        Topic topic = new Topic();
        topic.setTitle(dto.getTitle());
        topic.setContent(dto.getContent());
        topic.setAuthorEmail(resolveAuthorEmail(dto));
        topic.setCategory(category);
        applyLearningContext(topic, dto);

        Topic saved = repository.save(topic);

        emailService.notifyAdminTopicCreated(
                saved.getTitle(),
                saved.getCategory().getName(),
                saved.getAuthorEmail()
        );

        return TopicMapper.toDTO(saved); // ✅ FIXED
    }

    @Override
    public TopicDTO createForModule(TopicDTO dto, Long categoryId, Long moduleId) {
        dto.setModuleId(moduleId);
        dto.setCoursId(null);
        return create(dto, categoryId);
    }

    @Override
    public TopicDTO createForCours(TopicDTO dto, Long categoryId, Long coursId) {
        dto.setCoursId(coursId);
        return create(dto, categoryId);
    }

    @Override
    public List<Topic> getAll() {
        return repository.findAll();
    }

    @Override
    public Topic getById(Long id) {
        return repository.findById(id).orElseThrow();
    }

    @Override
    public List<TopicDTO> getByCategory(Long categoryId) {
        return repository.findByCategoryId(categoryId)
                .stream()
                .map(TopicMapper::toDTO) // ✅ FIXED — replyCount now included
                .toList();
    }

    @Override
    public List<TopicDTO> getByModule(Long moduleId) {
        return repository.findByModuleIdOrderByCreatedAtDesc(moduleId)
                .stream()
                .map(TopicMapper::toDTO)
                .toList();
    }

    @Override
    public List<TopicDTO> getByCours(Long coursId) {
        return repository.findByCoursIdOrderByCreatedAtDesc(coursId)
                .stream()
                .map(TopicMapper::toDTO)
                .toList();
    }

    @Override
    public long countByModule(Long moduleId) {
        return repository.countByModuleId(moduleId);
    }

    @Override
    public TopicDTO update(Long id, TopicDTO dto) {
        Topic topic = repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Topic not found"));

        topic.setTitle(dto.getTitle());
        topic.setContent(dto.getContent());
        topic.setAuthorEmail(resolveAuthorEmail(dto));

        Topic saved = repository.save(topic);

        return TopicMapper.toDTO(saved); // ✅ FIXED
    }

    @Override
    public void delete(Long id) {
        Topic topic = repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Topic not found"));

        String title = topic.getTitle();
        repository.deleteById(id);

        emailService.notifyAdminTopicDeleted(title);
    }

    @Override
    public List<TopicDTO> searchTopics(String title, Long categoryId, String dateFrom) {
        LocalDateTime date = (dateFrom != null && !dateFrom.isEmpty())
                ? LocalDateTime.parse(dateFrom + "T00:00:00")
                : null;

        return repository.searchTopics(title, categoryId, date)
                .stream()
                .map(TopicMapper::toDTO) // ✅ FIXED — replyCount now included
                .toList();
    }

    private String resolveAuthorEmail(TopicDTO dto) {
        if (StringUtils.hasText(dto.getAuthorEmail())) {
            return dto.getAuthorEmail().trim();
        }
        if (dto.getAuthorId() == null) {
            throw new IllegalArgumentException("authorEmail ou authorId est obligatoire.");
        }
        CoursesUserDTO user = coursesUserClient.getUserById(dto.getAuthorId());
        if (user == null || !StringUtils.hasText(user.getEmail())) {
            throw new IllegalArgumentException("Utilisateur introuvable ou email manquant pour l'id: " + dto.getAuthorId());
        }
        return user.getEmail().trim();
    }

    private void applyLearningContext(Topic topic, TopicDTO dto) {
        if (dto.getCoursId() != null) {
            CoursesCoursDTO cours;
            try {
                cours = coursesCoursClient.getCoursById(dto.getCoursId());
            } catch (Exception ex) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cours introuvable avec l'id: " + dto.getCoursId());
            }
            if (cours == null || cours.getId() == null) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cours introuvable avec l'id: " + dto.getCoursId());
            }
            topic.setCoursId(cours.getId());
            topic.setCoursTitre(cours.getTitre());
            if (cours.getModule() != null && cours.getModule().getId() != null) {
                topic.setModuleId(cours.getModule().getId());
                topic.setModuleTitre(cours.getModule().getTitre());
            }
            return;
        }

        if (dto.getModuleId() != null) {
            CoursesModuleDTO module;
            try {
                module = coursesModuleClient.getModuleById(dto.getModuleId());
            } catch (Exception ex) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Module introuvable avec l'id: " + dto.getModuleId());
            }
            if (module == null || module.getId() == null) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Module introuvable avec l'id: " + dto.getModuleId());
            }
            topic.setModuleId(module.getId());
            topic.setModuleTitre(module.getTitre());
            return;
        }

        topic.setModuleId(null);
        topic.setModuleTitre(null);
        topic.setCoursId(null);
        topic.setCoursTitre(null);
    }
}