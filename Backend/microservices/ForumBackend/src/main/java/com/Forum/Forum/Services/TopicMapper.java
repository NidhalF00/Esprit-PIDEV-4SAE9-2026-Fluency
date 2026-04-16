package com.Forum.Forum.Services;


import com.Forum.Forum.entity.Topic;
import com.Forum.Forum.entity.TopicDTO;

public class TopicMapper {
    public static TopicDTO toDTO(Topic topic) {
        TopicDTO dto = new TopicDTO();
        dto.setId(topic.getId());
        dto.setAuthorId(null);
        dto.setModuleId(topic.getModuleId());
        dto.setModuleTitre(topic.getModuleTitre());
        dto.setCoursId(topic.getCoursId());
        dto.setCoursTitre(topic.getCoursTitre());
        dto.setTitle(topic.getTitle());
        dto.setContent(topic.getContent());
        dto.setAuthorEmail(topic.getAuthorEmail());
        dto.setCreatedAt(topic.getCreatedAt());
        dto.setReplyCount(
                topic.getReplies() != null ? topic.getReplies().size() : 0
        );
        return dto;
    }
}
