package com.Forum.DTO;
import com.Forum.Model.ForumThread;
import lombok.Getter;
import lombok.Setter;
import java.sql.Timestamp;

import com.Forum.Controller.UserController;

@Getter @Setter 
public class CreateForumThreadDTO {
    private String threadName;
    private String threadContent;
    private Long userId;

    public ForumThread toForumThread(UserController userController) {
        ForumThread forumThread = new ForumThread();
        forumThread.setThreadName(threadName);
        forumThread.setThreadContent(threadContent);
        forumThread.setThreadUser(userController.getUserAccount(userId));
        forumThread.setThreadCreationTime(new Timestamp(System.currentTimeMillis()));
        return forumThread;
    }
}
