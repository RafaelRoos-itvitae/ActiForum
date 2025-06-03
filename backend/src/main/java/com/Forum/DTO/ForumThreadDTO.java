package com.Forum.DTO;

import java.sql.Timestamp;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Builder;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ForumThreadDTO {
    private Long id;
    private String threadName;
    private String threadContent;
    private Long userId;
    private List<Long> messageIds;
    private Timestamp threadCreationTime;
    private Timestamp threadUpdateTime;
}
