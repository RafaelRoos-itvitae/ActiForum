package com.Forum.Model;

import java.sql.Timestamp;
import java.util.List;

import jakarta.persistence.*;
import lombok.*;
import com.fasterxml.jackson.annotation.JsonManagedReference;

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

    @ManyToOne
    @JoinColumn(name = "threadUser")
    UserAccount threadUser;

    @OneToMany(mappedBy = "messageThread")
    @JsonManagedReference
    @Getter @Setter List<Message> threadMessages;

    // time of creation and time of update(messages added)
    @Column(nullable = false)
    @Getter @Setter private Timestamp threadCreationTime;
    @Column(nullable = true)
    @Getter @Setter private Timestamp threadUpdateTime;
}
