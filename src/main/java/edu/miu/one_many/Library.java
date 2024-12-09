package edu.miu.one_many;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Library {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;

    public String name;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="library_id")
    public List<Book> books;

    public Library() {
    }

    public Library(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Book> getBooks() {
        return books;
    }

    public void setBooks(List<Book> books) {
        this.books = books;
    }

    @Override
    public String toString() {
       
        return "Library [id=" + id + ", name=" + name + "]";
    }

}
