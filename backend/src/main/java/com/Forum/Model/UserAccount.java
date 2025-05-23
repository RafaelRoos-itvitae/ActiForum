package com.Forum.Model;

import java.util.List;

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
    @Getter @Setter private String user_Name;
    @Column(nullable = false)
    @Getter @Setter private String user_Email;
    @Column(nullable = false)
    @Getter @Setter private String user_Password; // insecure
    @Column(nullable = false)
    @Getter @Setter private boolean user_IsAdmin;
    @Column(nullable = false)
    @Getter @Setter private boolean user_IsBanned;

    @OneToMany(mappedBy = "thread_User")
    List<ForumThread> user_Threads;
    @OneToMany(mappedBy = "message_User")
    List<Message> user_Messages;
    @OneToMany(mappedBy = "notification_User")
    List<Notification> user_Notifications;

    @Column(nullable = false)
    @Getter @Setter private String user_Bio;
    @Column(nullable = false)
    @Getter @Setter private String user_ImageURL;
}
