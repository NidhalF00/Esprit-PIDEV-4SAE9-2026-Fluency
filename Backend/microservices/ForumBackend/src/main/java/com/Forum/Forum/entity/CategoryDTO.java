package com.Forum.Forum.entity;

import lombok.Data;

import java.time.LocalDate;


import java.time.LocalDate;
@Data

public class CategoryDTO {

    private Long id;
    private String name;
    private String description;
    private LocalDate createdAt;
    private int topicCount;
    // getters & setters
}