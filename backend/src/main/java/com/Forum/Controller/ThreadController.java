package com.Forum.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Forum.DTO.CreateForumThreadDTO;
import com.Forum.DTO.ForumThreadDTO;
import com.Forum.DTO.ForumThreadMapper;
import com.Forum.Model.ForumThread;
import com.Forum.Repository.ThreadRepository;
import com.Forum.Controller.UserController;

@CrossOrigin(origins = "http://localhost:1420")
@RestController
@RequestMapping("api")
public class ThreadController {

    @Autowired
    private ThreadRepository threadRepository;
    @Autowired
    private ForumThreadMapper forumThreadMapper;
    @Autowired
    private UserController userController;

    @GetMapping(value = "/thread/{threadId}")
    public Optional<ForumThread> getThread(@PathVariable Long threadId) {
        return threadRepository.findById(threadId);
    }

    // @GetMapping(value = "/thread")
    // public List<ForumThread> getThreads() {
    //     return threadRepository.findByOrderByThreadCreationTimeDesc();
    // }

    @PostMapping(value = "/thread/new")
    public ForumThread createThread(@RequestBody CreateForumThreadDTO createThreadDTO) {
        return threadRepository.save(createThreadDTO.toForumThread(userController));
    }

    @GetMapping(value = "/thread")
    public List<ForumThreadDTO> getThreadDTOs() {
        List<ForumThread> forumThreads = threadRepository.findByOrderByThreadCreationTimeDesc();
        return forumThreads.stream()
            .map(forumThread -> new ForumThreadDTO(forumThread))
            .toList();
    }

}
