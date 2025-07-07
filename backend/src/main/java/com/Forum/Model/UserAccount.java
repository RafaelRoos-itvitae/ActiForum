package com.Forum.Model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;
import lombok.*;

@Data
@Table
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class UserAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter private Long id;

    @Column(nullable = false)
    @Getter @Setter private String userName;
    @Column(nullable = false)
    @Getter @Setter private String userEmail;
    @Column(nullable = false)
    @Getter @Setter private String userPassword; // insecure
    @Column(nullable = false)
    @Getter @Setter private boolean userIsAdmin;
    @Column(nullable = false)
    @Getter @Setter private boolean userIsBanned;

    @OneToMany(mappedBy = "threadUser")
    @JsonBackReference
    private List<ForumThread> userThreads;

    @OneToMany(mappedBy = "messageUser")
    private List<Message> userMessages;

    @OneToMany(mappedBy = "notificationUser")
    private List<Notification> userNotifications;

    @Column(nullable = false)
    @Getter @Setter private String userBio;
    @Column(nullable = false)
    @Getter @Setter private String userImageURL;
}
