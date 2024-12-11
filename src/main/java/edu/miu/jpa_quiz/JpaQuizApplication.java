package edu.miu.jpa_quiz;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JpaQuizApplication implements CommandLineRunner {

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private ReviewRepository reviewRepository;

    public static void main(String[] args) {
        SpringApplication.run(JpaQuizApplication.class, args);
    }

    @Override
    public void run(String... args) {
        // 1. Insert Data
        insertData();
        // 2. Update Comment for Rating 5
        updateCommentForRating(5, "Fantastic service!");
        // 3. Delete Review with ID 2
        deleteReviewById(2L);
        // 4. Find Review Counts by Customer
        findReviewCountsByCustomer();
    }

    private void insertData() {
        Customer alice = new Customer(1L, "Alice Johnson", "alice.johnson@example.com");
        Customer bob = new Customer(2L, "Bob Smith", "bob.smith@example.com");
		Customer charlie = new Customer(3L, "Charlie Brown", "charlie.brown@example.com");

        customerRepository.saveAll(List.of(alice, bob, charlie));

        Review review1 = new Review(1L, alice, 5, "Excellent service!");
        Review review2 = new Review(2L, bob, 4, "Good experience,");
        Review review3 = new Review(3L, charlie, 3, "Average quality.");
        Review review4 = new Review(4L, alice, 4, "Great follow-up support.");

        reviewRepository.saveAll(List.of(review1, review2, review3, review4));
    }

    private void updateCommentForRating(int rating, String newComment) {
        List<Review> reviews = reviewRepository.findByRating(rating);
        for (Review review : reviews) {
            review.setComments(newComment);
        }
        reviewRepository.saveAll(reviews);
    }

    private void deleteReviewById(Long id) {
        reviewRepository.deleteById(id);
    }

    private void findReviewCountsByCustomer() {
        List<Object[]> results = reviewRepository.findReviewCountsByCustomer();
        System.out.println("CustomerName\tReviewCount");
        for (Object[] result : results) {
            System.out.println(result[0] + "\t" + result[1]);
        }
    }
}