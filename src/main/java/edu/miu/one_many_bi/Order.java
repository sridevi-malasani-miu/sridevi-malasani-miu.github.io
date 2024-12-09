package edu.miu.one_many_bi;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.*;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
@Table(name = "orders") 
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String details;

    @ManyToOne
    @JoinColumn(name="customer_id", referencedColumnName = "id")
    private Customer customer;

    public Order(String details) {
        this.details = details;
    }

    public Order(String details, Customer customer) {
        this.details = details;
        this.customer = customer;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    @Override
    public String toString() {
        return "Order [id=" + id + ", details=" + details + ", customer=" + customer + "]";
    }
}
