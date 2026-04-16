package com.Forum.Forum.Repository;

import com.Forum.Forum.entity.Topic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;

public interface ITopicRepository extends JpaRepository<Topic, Long> {
    List<Topic> findByCategoryId(Long categoryId);
    List<Topic> findByModuleIdOrderByCreatedAtDesc(Long moduleId);
    List<Topic> findByCoursIdOrderByCreatedAtDesc(Long coursId);
    long countByModuleId(Long moduleId);

    @Query("SELECT t FROM Topic t WHERE " +
            "(:title IS NULL OR LOWER(t.title) LIKE LOWER(CONCAT('%', :title, '%'))) AND " +
            "(:categoryId IS NULL OR t.category.id = :categoryId) AND " +
            "(:dateFrom IS NULL OR t.createdAt >= :dateFrom)")
    List<Topic> searchTopics(
            @Param("title") String title,
            @Param("categoryId") Long categoryId,
            @Param("dateFrom") LocalDateTime dateFrom
    );

}
