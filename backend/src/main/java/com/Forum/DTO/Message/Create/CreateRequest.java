package com.Forum.DTO.Message.Create;

public record CreateRequest(String messageContent, Long messageThread_id, Long messageUser_id) {
    
}
