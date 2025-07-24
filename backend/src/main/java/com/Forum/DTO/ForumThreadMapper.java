package com.Forum.DTO;

import org.springframework.stereotype.Component;

import com.Forum.Model.ForumThread;
import com.Forum.Model.UserAccount;

@Component
public class ForumThreadMapper {
    public ForumThreadDTO tDto(ForumThread forumThread, UserAccount userAccount) {
        ForumThreadDTO dto = new ForumThreadDTO();
        dto.setId(forumThread.getId());
        dto.setThreadName(forumThread.getThreadName());
        dto.setThreadContent(forumThread.getThreadContent());
        dto.setThreadCreationTime(forumThread.getThreadCreationTime());
        dto.setThreadUpdateTime(forumThread.getThreadUpdateTime());
        
        ForumThreadDTO.ForumThreadUser userDto = new ForumThreadDTO().new ForumThreadUser();
        UserAccount user = forumThread.getThreadUser();
        userDto.setId(user.getId());
        userDto.setUserName(user.getUserName());
        userDto.setUserImageURL(user.getUserImageURL());
        dto.setThreadUser(userDto);
        return dto;
    }
}















