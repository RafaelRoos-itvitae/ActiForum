package com.Forum.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.Forum.Model.UserAccount;
import com.Forum.Repository.UserRepository;

@CrossOrigin(origins = "http://localhost:1420")
@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping(value = "/user/{userId}")
    public UserAccount getUserAccount(@PathVariable Long userId) {
        return userRepository.getReferenceById(userId);
    }

    @PostMapping(value = "/user/new")
    public UserAccount createUserAccount(@RequestBody UserAccount newUser) {
        return userRepository.save(newUser);
    }

    // @PutMapping(value = "/user/update/{userId}/")
    // public UserAccount updateUserAccount(@RequestBody UserAccount userId) {
    //     existingUser.setUserName(userUpdatedId.setUserName(););
    //     existingUser.setUserPassword(user.setUserPassword());
    //     existingUser.setUserEmail(user.getUserEmail());
    //     userRepository.save(existingUser);
    // }
}
