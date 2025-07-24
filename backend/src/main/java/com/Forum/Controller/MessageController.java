package com.Forum.Controller;

import com.Forum.Model.ForumThread;
import com.Forum.Model.Message;
import com.Forum.Repository.MessageRepository;
import com.Forum.Service.MessageService;
import com.Forum.DTO.Message.Create.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:1420")
@RestController
@RequestMapping("/api")
public class MessageController {

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private MessageService messageService;

    @GetMapping(value = "/thread/{threadId}/messages")
    public List<Message> getMessages(@PathVariable Long threadId) {
        return messageRepository.findByMessageThreadIdOrderByMessageCreationTimeAsc(threadId);
    }

    @GetMapping(value = "/message/{messageId}")
    public Optional<Message> getMessage(@PathVariable Long messageId) {
        return messageRepository.findById(messageId);
    }

    @PostMapping(value = "/thread/{id}/message/new")
    //todo: add id in URI as parameter
    public Message createMessage(@RequestBody CreateRequest newMessage) {
        return messageRepository.save(messageService.toNewEntity(newMessage));
    }
}
