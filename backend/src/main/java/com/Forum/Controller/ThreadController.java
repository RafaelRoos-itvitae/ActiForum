package com.Forum.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Forum.Model.ForumThread;
import com.Forum.Repository.ThreadRepository;

@CrossOrigin(origins = "http://localhost:1420")
@RestController
@RequestMapping("api")
public class ThreadController {

    @Autowired
    private ThreadRepository threadRepository;

    @GetMapping(value = "/thread/{threadId}")
    public Optional<ForumThread> getThread(@PathVariable Long threadId) {
        return threadRepository.findById(threadId);
    }

    @GetMapping(value = "/thread")
    public List<ForumThread> getThreads() {
        return threadRepository.findByOrderByThreadCreationTimeDesc();
    }

    @PostMapping(value = "/thread/new", consumes = "application/json")
    public ForumThread createThread(@RequestBody ForumThread newThread) {
        return threadRepository.save(newThread);
    }
}
