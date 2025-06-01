package com.Forum.Controller;

import com.Forum.Model.Message;
import com.Forum.Repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class MessageController {

    @Autowired
    private MessageRepository messageRepository;

    @GetMapping(value = "/thread/{threadId}/message")
    public List<Message> getMessages(@PathVariable Long threadId) {
        return messageRepository.findByMessageThreadIdOrderByMessageCreationTimeAsc(threadId);
    }
}
