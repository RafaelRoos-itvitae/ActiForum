package com.Forum.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Forum.Model.Notification;
import com.Forum.Repository.NotificationRepository;

@CrossOrigin(origins = "http://localhost:1420")
@RestController
@RequestMapping("/api")
public class NotificationController {
    
    @Autowired
    private NotificationRepository notificationRepository;

    @GetMapping(value = "/notification/{userId}")
    public List<Notification> getNotifications(@PathVariable Long userId) {
        return notificationRepository.findByNotificationUserIdOrderByNotificationUpdateTimeDesc(userId);
    }
}
