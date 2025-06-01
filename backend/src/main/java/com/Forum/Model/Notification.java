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
    @JoinColumn
    UserAccount notificationUser;

    @ManyToOne
    @JoinColumn
    Message notificationMessage;

    @Column(nullable = false)
    private boolean notificationIsUpdatedThread;
    @Column(nullable = false)
    private boolean notificationIsMention;
    @Column(nullable = false)
    private boolean notificationIsRead;

    @Column(nullable = false)
    @Getter @Setter private Timestamp notificationCreationTime;
    @Column(nullable = false)
    @Getter @Setter private Timestamp notificationUpdateTime;
}
