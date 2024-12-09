package edu.miu.one_many_bi;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OneManyBiApplication implements CommandLineRunner {

	@Autowired
	private CustomerRepository repo;

	public static void main(String[] args) {
		SpringApplication.run(OneManyBiApplication.class, args);
	}
	@Override
	public void run(String[] args){
		Customer customer = new Customer();
		customer.setName(" John ");

		List<Order> orders = new ArrayList<Order>();
		Order order1 = new Order("order1",customer);
		Order order2 = new Order("order2",customer);

		orders.add(order1);
		orders.add(order2);
		customer.setOrders(orders);

		repo.save(customer);
		System.out.println("****************");
		System.out.println(repo.findAll());
		System.out.println(customer.getOrders());

	}

}
