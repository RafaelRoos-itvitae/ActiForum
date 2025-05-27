package com.Forum.Repository;

import com.Forum.Model.ForumThread;

import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ThreadRepository extends JpaRepository<ForumThread, Long> {
    List<ForumThread> findByOrderByThreadCreationTimeDesc();
}
