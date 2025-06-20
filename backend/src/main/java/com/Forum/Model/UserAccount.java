package com.Forum.Model;

import java.util.List;

import org.springframework.boot.jackson.JsonComponent;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;
import lombok.*;

@Data
@Table
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
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

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "UserAccount")
    List<ForumThread> userThreads;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "UserAccount")
    List<Message> userMessages;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "UserAccount")
    List<Notification> userNotifications;

    @Column(nullable = false)
    @Getter @Setter private String userBio;
    @Column(nullable = false)
    @Getter @Setter private String userImageURL;
}
