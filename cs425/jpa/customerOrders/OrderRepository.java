import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {

    @Query("SELECT c.name AS customerName, COUNT(o.id) AS totalOrders " +
           "FROM Order o " +
           "JOIN o.customer c " +
           "GROUP BY c.name")
    List<Object[]> countTotalOrdersPerCustomer();

    @Modifying
    @Transactional
    @Query("DELETE FROM Order o WHERE o.id = :orderId")
    void deleteOrderById(Long orderId);
}
