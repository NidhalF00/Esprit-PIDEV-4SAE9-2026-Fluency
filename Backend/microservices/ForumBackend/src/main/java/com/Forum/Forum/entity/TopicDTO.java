package com.Forum.Forum.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TopicDTO {
    private Long id;
    private Long authorId;
    private Long moduleId;
    private String moduleTitre;
    private Long coursId;
    private String coursTitre;
    private String title;
    private String content;
    private String authorEmail;
    private LocalDateTime createdAt;
    private int replyCount;

}
