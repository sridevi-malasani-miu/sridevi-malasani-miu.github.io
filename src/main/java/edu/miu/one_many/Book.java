package edu.miu.one_many;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;

    public String isbn;

    public Book() {
    }

    public Book(String isbn) {
        this.isbn = isbn;
    }

    @Override
    public String toString() {
        return "Book [id=" + id + ", isbn=" + isbn + "]";
    }
}
