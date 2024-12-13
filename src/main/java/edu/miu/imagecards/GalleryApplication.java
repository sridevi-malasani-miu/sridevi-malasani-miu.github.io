package edu.miu.imagecards;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class GalleryApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(GalleryApplication.class, args);
    }

    @Autowired
    private ImageRepository repository;

    @Override
    public void run(String[] args) {
        repository.save(new Image("Lily", "Flower", "/images/flower1.jpeg"));
        repository.save(new Image("Red", "Rose", "/images/flower2.jpeg"));
        repository.save(new Image("Hibiscus", "Bunch", "/images/flower3.jpeg"));
    }
}
