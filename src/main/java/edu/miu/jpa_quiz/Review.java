package edu.miu.jpa_quiz;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
class Review {
    @Id
    private Long id;

    @ManyToOne
    private Customer customer;

    private int rating;
    private String comments;

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public Review() {}

    public Review(Long id, Customer customer, int rating, String comments) {
        this.id = id;
        this.customer = customer;
        this.rating = rating;
        this.comments = comments;
    }

}
