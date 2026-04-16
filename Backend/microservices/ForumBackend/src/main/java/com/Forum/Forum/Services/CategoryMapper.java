package com.Forum.Forum.Services;

import com.Forum.Forum.entity.Category;
import com.Forum.Forum.entity.CategoryDTO;

public class CategoryMapper {

    public static CategoryDTO toDTO(Category category) {
        CategoryDTO dto = new CategoryDTO();
        dto.setId(category.getId());
        dto.setName(category.getName());
        dto.setDescription(category.getDescription());
        dto.setCreatedAt(category.getCreatedAt());        // ✅ existing
        dto.setTopicCount(                                // ✅ NEW
                category.getTopics() != null ? category.getTopics().size() : 0
        );
        return dto;
    }
}