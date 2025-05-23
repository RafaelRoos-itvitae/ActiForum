package com.Forum.Model;

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
    @JoinColumn(name = "notification_User")
    UserAccount notification_User;

    @ManyToOne
    @JoinColumn(name = "notification_Message")
    Message notification_Message;

    @Column(nullable = false)
    private boolean notification_IsUpdatedThread;
    @Column(nullable = false)
    private boolean notification_IsMention;
    @Column(nullable = false)
    private boolean notification_IsRead;

}
