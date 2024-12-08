import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface OrderDetailRepository extends JpaRepository<OrderDetail, Long> {

    @Query("SELECT new map(o.id AS orderId, c.name AS customerName, p.productName AS productName, od.quantity AS quantity, od.totalPrice AS totalPrice) " +
           "FROM Order o JOIN o.customer c JOIN o.orderDetails od JOIN od.product p")
    List<Map<String, Object>> findAllOrdersWithDetails();

    @Query("SELECT c.name AS customerName, SUM(od.totalPrice) AS totalSpent " +
           "FROM Customer c JOIN Order o ON c.id = o.customer.id " +
           "JOIN OrderDetail od ON o.id = od.order.id " +
           "GROUP BY c.name")
    List<Object[]> findTotalAmountSpentByCustomer();
}
