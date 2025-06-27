package com.Forum.Model;

import java.sql.Timestamp;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

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
    @Getter @Setter private String messageContent;

    @ManyToOne
    @JoinColumn(name = "messageThread")
    @JsonManagedReference(value = "threadMessages")
    @Getter @Setter ForumThread messageThread;

    @ManyToOne
    @JoinColumn(name = "messageUser")
    @JsonBackReference(value = "userMessages")
    @Getter @Setter UserAccount messageUser;

    @OneToMany(mappedBy = "notificationMessage")
    @JsonBackReference(value = "messageNotifications")
    @JsonIgnore
    @Getter @Setter List<Notification> messageNotifications;


    // time of creation and time of last edit
    @Column(nullable = false)
    @Getter @Setter private Timestamp messageCreationTime;
    @Column(nullable = true)
    @Getter @Setter private Timestamp messageEditTime;
}
