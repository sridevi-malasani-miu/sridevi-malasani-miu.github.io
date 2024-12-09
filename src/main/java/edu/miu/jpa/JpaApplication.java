package edu.miu.jpa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import edu.miu.jpa.entity.LibraryMember;
import edu.miu.jpa.entity.User;
import edu.miu.jpa.repository.UserRepository;
import edu.miu.jpa.service.LibraryService;
import edu.miu.jpa.service.UserService;

@SpringBootApplication
public class JpaApplication implements CommandLineRunner{
	@Autowired
    private UserService userService;

	@Autowired
    private LibraryService libraryService;

	public static void main(String[] args) {
		SpringApplication.run(JpaApplication.class, args);
	}
	@Override
	public void run(String... args) throws Exception {
        // Create Users
        User user1 = new User("Alice", "alice@example.com");
        User user2 = new User("Bob", "bob@example.com");
		userService.saveUser(user1);
		System.out.println("******************************");
		System.out.println(userService.getAllUsers());
		System.out.println("******************************");

		LibraryMember member = new LibraryMember("John","john.doe@gmail.com" );
		libraryService.saveLibraryMember(member);
		
		System.out.println(libraryService.countAllMembers());

    }

}
