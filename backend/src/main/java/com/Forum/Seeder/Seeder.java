package com.Forum.Seeder;

import com.Forum.Model.*;
import com.Forum.Repository.*;
import lombok.Builder;

import java.sql.Timestamp;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Seeder implements CommandLineRunner {
    private final UserRepository userRepository;
    private final ThreadRepository threadRepository;
    private final MessageRepository messageRepository;
    private final NotificationRepository notificationRepository;

    public Seeder(UserRepository userRepository, ThreadRepository threadRepository, MessageRepository messageRepository, NotificationRepository notificationRepository) {
        this.userRepository = userRepository;
        this.threadRepository = threadRepository;
        this.messageRepository = messageRepository;
        this.notificationRepository = notificationRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        UserAccount userAccount = UserAccount.builder().user_Name("Rafael").user_Email("rafael.roos@adaptio.corp").user_Password("Tartaglia").user_IsAdmin(true).user_IsBanned(false).user_Bio("Hello, world!").user_ImageURL("https://avatars.githubusercontent.com/u/206535046?v=4").build();
        userRepository.save(userAccount);
        ForumThread forumThread = ForumThread.builder().thread_Name("Testing").thread_User(userAccount).thread_CreationTime(new java.sql.Timestamp(1748001600L * 1000)).thread_UpdateTime(null).build();
        threadRepository.save(forumThread);
        Message message = Message.builder().message_Content("Lorem ipsum dolor sit amet. @Rafael come look at this.").message_Thread(forumThread).message_User(userAccount).message_CreationTime(new java.sql.Timestamp(1748001600L * 1000)).message_EditTime(null).build();
        messageRepository.save(message);
        Notification notification = Notification.builder().notification_Message(message).notification_User(userAccount).notification_IsMention(true).notification_IsUpdatedThread(true).notification_IsRead(false).build();
        notificationRepository.save(notification);

        System.out.println("Should be seeded now.");
    }
}
