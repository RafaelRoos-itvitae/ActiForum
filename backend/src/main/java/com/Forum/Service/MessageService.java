package com.Forum.Service;

import java.sql.Timestamp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Forum.DTO.Message.Create.CreateRequest;
import com.Forum.Model.Message;
import com.Forum.Repository.MessageRepository;
import com.Forum.Repository.ThreadRepository;
import com.Forum.Repository.UserRepository;

@Service
public class MessageService {
    @Autowired
    MessageRepository messageRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ThreadRepository threadRepository;

    public Message toNewEntity(CreateRequest createRequest) {
        Message message = new Message();
        message.setMessageContent(createRequest.messageContent());
        message.setMessageThread(threadRepository.getReferenceById(createRequest.messageThread_id()));
        message.setMessageUser(userRepository.getReferenceById(createRequest.messageUser_id()));
        message.setMessageCreationTime(new Timestamp(System.currentTimeMillis()));
        //todo: validatie
        return message;
    }
}