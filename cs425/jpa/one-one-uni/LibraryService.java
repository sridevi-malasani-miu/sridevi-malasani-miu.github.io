import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

@Service
public class LibraryService {

    @Autowired
    private LibraryMemberRepository libraryMemberRepository;

    @Autowired
    private MembershipCardRepository membershipCardRepository;

    // Create or Update a Library Member
    public LibraryMember saveLibraryMember(LibraryMember member) {
        return libraryMemberRepository.save(member);
    }

    // Retrieve all Library Members
    public List<LibraryMember> getAllLibraryMembers() {
        return libraryMemberRepository.findAll();
    }

    // Find Library Member by ID
    public Optional<LibraryMember> getLibraryMemberById(Long id) {
        return libraryMemberRepository.findById(id);
    }

    // Delete Library Member by ID
    public void deleteLibraryMember(Long id) {
        libraryMemberRepository.deleteById(id);
    }

    // Find name by ID
    public String getNameById(Long id) {
        return libraryMemberRepository.findNameById(id);
    }

    // Aggregate Queries
    public Long countAllMembers() {
        return libraryMemberRepository.countAllMembers();
    }

    public Long sumMembershipCardIds() {
        return libraryMemberRepository.sumMembershipCardIds();
    }
}
