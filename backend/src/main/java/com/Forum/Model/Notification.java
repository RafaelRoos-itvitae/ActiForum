package com.Forum.Model;

import java.sql.Timestamp;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;
import lombok.*;

@Data
@Table
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter private Long id;
    
    @ManyToOne
    @JoinColumn
    @JsonBackReference(value = "userNotifications")
    @Getter @Setter UserAccount notificationUser;

    @ManyToOne
    @JoinColumn
    @JsonManagedReference(value = "messageNotifications")
    @Getter @Setter Message notificationMessage;

    // @ManyToOne
    // @JoinColumn
    // @JsonBackReference(value = "threadNotifications")

    @Column(nullable = false)
    @Getter @Setter private boolean notificationIsUpdatedThread;
    @Column(nullable = false)
    @Getter @Setter private boolean notificationIsMention;
    @Column(nullable = false)
    @Getter @Setter private boolean notificationIsRead;

    @Column(nullable = false)
    @Getter @Setter private Timestamp notificationCreationTime;
    @Column(nullable = false)
    @Getter @Setter private Timestamp notificationUpdateTime;
}
