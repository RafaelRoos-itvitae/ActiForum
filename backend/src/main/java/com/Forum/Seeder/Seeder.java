package com.Forum.Seeder;

import com.Forum.Model.UserAccount;
import com.Forum.Repository.UserRepository;
import lombok.Builder;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Seeder implements CommandLineRunner {
    private final UserRepository userRepository;

    public Seeder(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(String[] args) throws Exception {
//        if (userRepository.count() > 0) {
//            return;
//        }
        UserAccount userAccount = UserAccount.builder().username("Rafael").email("rafael.roos@adaptio.corp").password("Tartaglia").isAdmin(true).isBanned(false).bio("Hello, world!").imageURL("https://avatars.githubusercontent.com/u/206535046?v=4").build();
        userRepository.save(userAccount);
        System.out.println("Should be seeded now");
    }

}
