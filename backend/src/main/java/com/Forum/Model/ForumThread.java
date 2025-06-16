package com.Forum.Model;

import java.sql.Timestamp;
import java.util.List;

import jakarta.persistence.*;
import lombok.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;

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

    @ManyToOne
    @JoinColumn(name = "threadUser")
    @JsonManagedReference(value = "userThreads")
    @Getter @Setter UserAccount threadUser;

    @OneToMany(mappedBy = "messageThread")
    @JsonBackReference(value = "threadMessages")
    @Getter @Setter List<Message> threadMessages;

    // time of creation and time of update(messages added)
    @Column(nullable = false)
    @Getter @Setter private Timestamp threadCreationTime;
    @Column(nullable = true)
    @Getter @Setter private Timestamp threadUpdateTime;
}
