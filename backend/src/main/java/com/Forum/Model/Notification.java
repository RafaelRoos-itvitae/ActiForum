package com.Forum.Model;

import java.sql.Timestamp;

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
    @JoinColumn(name = "notificationUser_id")
    @Getter @Setter UserAccount notificationUser;

    @ManyToOne
    @JoinColumn(name = "notificationMessage_id")
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