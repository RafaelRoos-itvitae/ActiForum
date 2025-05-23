package com.Forum.Model;

import java.sql.Timestamp;
import java.util.List;

import jakarta.persistence.*;
import lombok.*;

@Data
@Table
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter private Long id;

    @Column(nullable = false, length = 8191)
    @Getter @Setter private String message_Content;

    @ManyToOne
    @JoinColumn(name = "message_Thread")
    ForumThread message_Thread;

    @ManyToOne
    @JoinColumn(name = "message_User")
    UserAccount message_User;

    @OneToMany(mappedBy = "notification_Message")
    List<Notification> message_Notifications;


    // time of creation and time of last edit
    @Column(nullable = false, name = "message_creationtime")
    @Getter @Setter private Timestamp message_CreationTime;
    @Column(nullable = true, name = "message_edittime")
    @Getter @Setter private Timestamp message_EditTime;
}
