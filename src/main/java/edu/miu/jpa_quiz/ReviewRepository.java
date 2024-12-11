package edu.miu.jpa_quiz;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    // Spring Data JPA supports a variety of such query method patterns, including:
      //findBy<Property>: Find entities matching a property. Ex: findByComments
      //@Query("SELECT r FROM Review r WHERE r.rating = :rating")// You can also use this instead.
    List<Review> findByRating(int rating);

    @Query("SELECT r.customer.name, COUNT(r) FROM Review r GROUP BY r.customer.name")
    List<Object[]> findReviewCountsByCustomer();
}
