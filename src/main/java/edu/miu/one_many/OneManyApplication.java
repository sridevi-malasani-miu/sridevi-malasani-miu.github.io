package edu.miu.one_many;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;
import java.util.ArrayList;

@SpringBootApplication
public class OneManyApplication implements CommandLineRunner {

	@Autowired
	private LibraryRepository repo;

	public static void main(String[] args) {
		SpringApplication.run(OneManyApplication.class, args);
	}
	@Override
	public void run(String[] args) {
		List<Book> list = new ArrayList<Book>();
		Book book = new Book("1234");
		Book book1 = new Book("45");

		list.add(book);
		list.add(book1);

		Library lib = new Library("Central");
		lib.setBooks(list);

		repo.save(lib);
		System.out.println(" Library "+ repo.findAll());

		System.out.println(" Books "+ lib.getBooks());
	}

}
