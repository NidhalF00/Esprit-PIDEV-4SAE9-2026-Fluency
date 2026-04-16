package com.Forum.Forum.Repository;

import com.Forum.Forum.entity.BadWord;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface IBadWordRepository extends JpaRepository<BadWord, Long> {
    Optional<BadWord> findByWordIgnoreCase(String word);
}