package com.Forum.Model;

import java.sql.Timestamp;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

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
    @Getter @Setter private String threadName;

    @Column(nullable = true, length = 8191)
    @Getter @Setter private String threadContent;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "threadUser_id")
    @Getter @Setter @JsonManagedReference UserAccount threadUser;

    @OneToMany(mappedBy = "messageThread")
    @Getter @Setter List<Message> threadMessages;

    // time of creation and time of update(messages added)
    @Column(nullable = false)
    @Getter @Setter private Timestamp threadCreationTime;
    @Column(nullable = true)
    @Getter @Setter private Timestamp threadUpdateTime;
}
