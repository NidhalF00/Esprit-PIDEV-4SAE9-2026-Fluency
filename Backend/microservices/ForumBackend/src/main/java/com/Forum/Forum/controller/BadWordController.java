package com.Forum.Forum.controller;

import com.Forum.Forum.Services.ImplServiceBadWord;
import com.Forum.Forum.entity.BadWord;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/badword")
public class BadWordController {

    private ImplServiceBadWord badWordService;

    @GetMapping
    public List<BadWord> getAll() {
        return badWordService.getAll();
    }

    @PostMapping
    public BadWord add(@RequestBody Map<String, String> body) {
        return badWordService.add(body.get("word"));
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        badWordService.delete(id);
    }
}