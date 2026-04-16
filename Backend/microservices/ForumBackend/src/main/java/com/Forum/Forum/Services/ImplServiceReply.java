package com.Forum.Forum.Services;

import com.Forum.Forum.Repository.IReplyRepository;
import com.Forum.Forum.Repository.ITopicRepository;
import com.Forum.Forum.entity.Reply;
import com.Forum.Forum.entity.ReplyDTO;
import com.Forum.Forum.entity.Topic;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@AllArgsConstructor
public class ImplServiceReply implements IServiceReply {

    private IReplyRepository replyRepository;
    private ITopicRepository topicRepository;
    private EmailService emailService;
    private ImplServiceBadWord badWordService; //

    @Override
    public ReplyDTO create(Reply reply, Long topicId) {
        Topic topic = topicRepository.findById(topicId)
                .orElseThrow(() -> new RuntimeException("Topic not found"));

        // ✅ Check bad words BEFORE saving
        String foundWord = badWordService.checkContent(reply.getContent());
        if (foundWord != null) {
            throw new RuntimeException("INAPPROPRIATE_CONTENT");
        }

        reply.setTopic(topic);
        Reply savedReply = replyRepository.save(reply);

        // Send email to topic author
        if (topic.getAuthorEmail() != null && !topic.getAuthorEmail().isEmpty()) {
            emailService.notifyTopicAuthor(
                    topic.getAuthorEmail(),
                    topic.getTitle(),
                    savedReply.getContent()
            );
        }

        return ReplyMapper.toDTO(savedReply);
    }

    @Override
    public List<Reply> getByTopic(Long topicId) {
        return replyRepository.findByTopicId(topicId);
    }

    @Override
    public Reply update(Long id, Reply reply) {
        // ✅ Check bad words on update too
        String foundWord = badWordService.checkContent(reply.getContent());
        if (foundWord != null) {
            throw new RuntimeException("INAPPROPRIATE_CONTENT");
        }

        Reply existing = replyRepository.findById(id).orElseThrow();
        existing.setContent(reply.getContent());
        return replyRepository.save(existing);
    }

    @Override
    public void delete(Long id) {
        replyRepository.deleteById(id);
    }
}