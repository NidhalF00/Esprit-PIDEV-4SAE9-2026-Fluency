package com.Forum.Forum.Services;

import com.Forum.Forum.Repository.IBadWordRepository;
import com.Forum.Forum.entity.BadWord;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.Arrays;
import java.util.List;

@Service
@AllArgsConstructor
public class ImplServiceBadWord {

    private IBadWordRepository badWordRepository;

    // Check if text contains a bad word — returns the word found or null
    public String checkContent(String content) {
        List<BadWord> badWords = badWordRepository.findAll();
        String lower = content.toLowerCase();
        for (BadWord bw : badWords) {
            if (lower.contains(bw.getWord().toLowerCase())) {
                return bw.getWord();
            }
        }
        return null;
    }

    public List<BadWord> getAll() {
        return badWordRepository.findAll();
    }

    public BadWord add(String word) {
        BadWord bw = new BadWord();
        bw.setWord(word.toLowerCase().trim());
        return badWordRepository.save(bw);
    }

    public void delete(Long id) {
        badWordRepository.deleteById(id);
    }

    // Default bad words added on first startup
    public void initDefaultWords() {
        List<String> defaults = Arrays.asList(
                "stupid", "idiot", "hate", "kill",
                "dumb", "moron", "loser", "shut up",
                "fool", "jerk"
        );
        for (String word : defaults) {
            if (badWordRepository.findByWordIgnoreCase(word).isEmpty()) {
                add(word);
            }
        }
    }
}