import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("SELECT p FROM Product p LEFT JOIN OrderDetail od ON p.id = od.product.id WHERE od.product.id IS NULL")
    List<Product> findAllUnsoldProducts();

    @Query("SELECT p.productName, SUM(od.quantity) AS totalQuantity " +
           "FROM Product p JOIN OrderDetail od ON p.id = od.product.id " +
           "GROUP BY p.productName ORDER BY totalQuantity DESC")
    List<Object[]> findMostPopularProduct();

    @Modifying
    @Transactional
    @Query("UPDATE Product p SET p.stock = p.stock - :quantity WHERE p.id = :productId AND p.stock >= :quantity")
    int updateStock(Long productId, int quantity);

}
