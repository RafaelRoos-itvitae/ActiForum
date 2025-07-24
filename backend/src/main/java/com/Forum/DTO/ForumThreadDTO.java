package com.Forum.DTO;

import java.sql.Timestamp;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Builder;

import java.util.List;

import com.Forum.Model.ForumThread;
import com.Forum.Model.UserAccount;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ForumThreadDTO {
    private Long id;
    private String threadName;
    private String threadContent;
    private ForumThreadUser threadUser;
    private List<Long> messageIds;
    private Timestamp threadCreationTime;
    private Timestamp threadUpdateTime;
    
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public class ForumThreadUser {
        private Long Id;
        private String userName;
        private String userImageURL;
    }

    public ForumThreadDTO(ForumThread forumThread) {
        id = forumThread.getId();
        // setId(forumThread.getId());
        threadName = forumThread.getThreadName();
        threadContent = forumThread.getThreadContent();
        threadCreationTime = forumThread.getThreadCreationTime();
        threadUpdateTime = forumThread.getThreadUpdateTime();
        
        UserAccount user = forumThread.getThreadUser();
        threadUser = new ForumThreadDTO.ForumThreadUser(
            user.getId(), user.getUserName(), user.getUserImageURL() 
        );
    }
}
