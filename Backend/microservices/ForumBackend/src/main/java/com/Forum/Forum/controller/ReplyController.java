package com.Forum.Forum.controller;

import com.Forum.Forum.Services.IServiceReply;
import com.Forum.Forum.Services.ImplServiceReply;
import com.Forum.Forum.entity.Reply;
import com.Forum.Forum.entity.ReplyDTO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@AllArgsConstructor
@RequestMapping("/reply")
public class ReplyController {

    private IServiceReply replyService;

    @PostMapping("/topic/{topicId}")
    public ReplyDTO create(@RequestBody Reply reply,
                           @PathVariable Long topicId) {
        return replyService.create(reply, topicId);
    }



    @GetMapping("/topic/{topicId}")
    public List<ReplyDTO> getByTopic(@PathVariable Long topicId) {
        return replyService.getByTopic(topicId)
                .stream()
                .map(r -> new ReplyDTO(r.getId(), r.getContent(), r.getCreatedAt(), topicId))
                .toList();
    }

    @PutMapping("/{id}")
    public ReplyDTO update(@PathVariable Long id, @RequestBody Reply reply) {
        Reply updated = replyService.update(id, reply);
        return new ReplyDTO(updated.getId(), updated.getContent(), updated.getCreatedAt(), updated.getTopic().getId());
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        replyService.delete(id);
    }
}
