package com.Forum.Forum.Services;




import com.Forum.Forum.entity.Topic;
import com.Forum.Forum.entity.TopicDTO;

import java.util.List;

public interface IServiceTopic {
    public TopicDTO create(TopicDTO dto, Long categoryId);
    TopicDTO createForModule(TopicDTO dto, Long categoryId, Long moduleId);
    TopicDTO createForCours(TopicDTO dto, Long categoryId, Long coursId);
    List<Topic> getAll();
    Topic getById(Long id);
    public List<TopicDTO> getByCategory(Long categoryId);
    List<TopicDTO> getByModule(Long moduleId);
    List<TopicDTO> getByCours(Long coursId);
    long countByModule(Long moduleId);
    public TopicDTO update(Long id, TopicDTO dto);
    void delete(Long id);
    List<TopicDTO> searchTopics(String title, Long categoryId, String dateFrom);
}
