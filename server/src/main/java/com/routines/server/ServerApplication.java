package com.routines.server;

import com.routines.server.data.entities.User;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.routines.server.data.repositiories.UserRepository;

@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

	@Bean
    CommandLineRunner seeder(UserRepository repository) {
        return (args) -> {
            // save a few customers
            repository.save(new User("webslinger@thedailybugle.com", "Peter", "Parker"));
		};
    }

}
