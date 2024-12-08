import jakarta.persistence.*;
import java.util.List;

@Entity
public class Library {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String location;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "library_id") // Foreign key column in Book table
    private List<Book> books;

}
