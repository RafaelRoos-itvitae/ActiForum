package com.Forum.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Forum.Model.Message;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {
    
}
