package com.Forum.Forum.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReplyDTO {
    private Long id;
    private String content;
    private LocalDateTime createdAt;
    private Long topicId;
}
