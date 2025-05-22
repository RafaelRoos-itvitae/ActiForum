package com.Forum.Model;

import jakarta.persistence.*;
import lombok.*;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class UserAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter private Long id;

    @Column(nullable = false)
    @Getter @Setter private String username;
    @Column(nullable = false)
    @Getter @Setter private String email;
    @Column(nullable = false)
    @Getter @Setter private String password; // insecure
    @Column(nullable = false)
    @Getter @Setter private boolean isAdmin;
    @Column(nullable = false)
    @Getter @Setter private boolean isBanned;

    @Getter @Setter private String bio;
    @Getter @Setter private String imageURL;
}
