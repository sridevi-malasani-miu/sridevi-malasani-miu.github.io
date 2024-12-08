import jakarta.persistence.*;

@Entity
public class LibraryMember {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @OneToOne(mappedBy = "libraryMember", cascade = CascadeType.ALL)
    private MembershipCard membershipCard;

}
