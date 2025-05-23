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
public class ForumThread {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter private Long id;

    @Column(nullable = false)
    @Getter @Setter private String thread_Name;

    @ManyToOne
    @JoinColumn(name = "thread_User")
    UserAccount thread_User;

    @OneToMany(mappedBy = "message_Thread")
    List<Message> thread_Messages;

    // time of creation and time of update(messages added)
    @Column(nullable = false)
    @Getter @Setter private Timestamp thread_CreationTime;
    @Column(nullable = true)
    @Getter @Setter private Timestamp thread_UpdateTime;
}
