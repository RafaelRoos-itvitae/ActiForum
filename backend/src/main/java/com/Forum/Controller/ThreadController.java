package com.Forum.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.Forum.Repository.ThreadRepository;
import com.Forum.Model.ForumThread;

import java.util.List;

@RestController
@RequestMapping("api")
public class ThreadController {

    @Autowired
    private ThreadRepository threadRepository;

    @GetMapping(value = "/threads/")
    public List<ForumThread> getForumThreads() {
        return threadRepository.findByOrderByThreadCreationTimeDesc();
    }
}