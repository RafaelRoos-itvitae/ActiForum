package com.Forum.Seeder;

import com.Forum.Model.*;
import com.Forum.Repository.*;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;

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
        if (userRepository.count() > 0) { return; }
        UserAccount Rafael = UserAccount.builder().userName("Rafael").userEmail("rafael.roos@adaptio.corp").userPassword("Tartaglia").userIsAdmin(true).userIsBanned(false).userBio("Hello, world!").userImageURL("https://avatars.githubusercontent.com/u/206535046").build();
        userRepository.save(Rafael);
        UserAccount Rafaello = UserAccount.builder().userName("Rafaello").userEmail("rafaello@adaptio.corp").userPassword("Quantum-Protected-Key").userIsAdmin(true).userIsBanned(false).userBio("Not your average neighborhood Rafael.").userImageURL("").build();
        userRepository.save(Rafaello);
        UserAccount Tom = UserAccount.builder().userName("Tom from Accounting").userEmail("tom@adaptio.corp").userPassword("3ff1c13ncy@tTh3W0rkpl@c3").userIsAdmin(false).userIsBanned(true).userBio("free speech absolutist").userImageURL("").build();
        userRepository.save(Tom);
        ForumThread forumThread = ForumThread.builder().threadName("Testing").threadUser(Rafael).threadCreationTime(new java.sql.Timestamp(1748001600L * 1000)).threadUpdateTime(null).build();
        threadRepository.save(forumThread);
        Message message = Message.builder().messageContent("Lorem ipsum dolor sit amet. @Tom, do you copy?").messageThread(forumThread).messageUser(Rafael).messageCreationTime(new Timestamp(1748001600L * 1000)).messageEditTime(null).build();
        messageRepository.save(message);
        Notification notification = Notification.builder().notificationMessage(message).notificationUser(Rafael).notificationIsMention(true).notificationIsUpdatedThread(true).notificationIsRead(false).notificationCreationTime(new Timestamp(1748001600L * 1000)).notificationUpdateTime(new Timestamp(1748001600L * 1000)).build();
        notificationRepository.save(notification);
        ForumThread forumThread1 = ForumThread.builder().threadName("Testing2").threadUser(Rafael).threadCreationTime(new java.sql.Timestamp(1780000000L * 1000)).threadUpdateTime(null).build();
        threadRepository.save(forumThread1);
        Message message1 = Message.builder().messageContent("Lorem ipsum dolor sit amet. @Rafael I am from the future.").messageThread(forumThread1).messageUser(Rafaello).messageCreationTime(new Timestamp(2100000000L * 1000)).messageEditTime(null).build();
        messageRepository.save(message1);
        Message message2 = Message.builder().messageContent("Holy moly! 🤯 Tell me, am I handsome in the future?").messageThread(forumThread1).messageUser(Rafael).messageCreationTime(new Timestamp(1748536486L * 1000)).messageEditTime(null).build();
        messageRepository.save(message2);
        Message message3 = Message.builder().messageContent("I don't think this is the intended use of this forum.").messageThread(forumThread1).messageUser(Tom).messageCreationTime(new Timestamp(174854000L * 1000)).messageEditTime(null).build();
        messageRepository.save(message3);
        System.out.println("Should be seeded now.");
    }
}
