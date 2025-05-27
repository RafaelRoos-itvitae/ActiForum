package com.Forum.Seeder;

import com.Forum.Model.*;
import com.Forum.Repository.*;

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
        UserAccount userAccount = UserAccount.builder().userName("Rafael").userEmail("rafael.roos@adaptio.corp").userPassword("Tartaglia").userIsAdmin(true).userIsBanned(false).userBio("Hello, world!").userImageURL("https://avatars.githubusercontent.com/u/206535046?v=4").build();
        userRepository.save(userAccount);
        ForumThread forumThread = ForumThread.builder().threadName("Testing").threadUser(userAccount).threadCreationTime(new java.sql.Timestamp(1748001600L * 1000)).threadUpdateTime(null).build();
        threadRepository.save(forumThread);
        Message message = Message.builder().messageContent("Lorem ipsum dolor sit amet. @Rafael come look at this.").messageThread(forumThread).messageUser(userAccount).messageCreationTime(new java.sql.Timestamp(1748001600L * 1000)).messageEditTime(null).build();
        messageRepository.save(message);
        Notification notification = Notification.builder().notificationMessage(message).notificationUser(userAccount).notificationIsMention(true).notificationIsUpdatedThread(true).notificationIsRead(false).build();
        notificationRepository.save(notification);
        ForumThread forumThread2 = ForumThread.builder().threadName("Testing2").threadUser(userAccount).threadCreationTime(new java.sql.Timestamp(1780000000L * 1000)).threadUpdateTime(null).build();
        threadRepository.save(forumThread2);
        Message message2 = Message.builder().messageContent("Lorem ipsum dolor sit amet. @Rafael I am from the future.").messageThread(forumThread2).messageUser(userAccount).messageCreationTime(new java.sql.Timestamp(1780000000L * 1000)).messageEditTime(null).build();
        messageRepository.save(message2);

        System.out.println("Should be seeded now.");
    }
}
