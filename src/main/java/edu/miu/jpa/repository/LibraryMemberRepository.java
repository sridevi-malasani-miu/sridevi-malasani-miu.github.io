package edu.miu.jpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import edu.miu.jpa.entity.LibraryMember;

public interface LibraryMemberRepository extends JpaRepository<LibraryMember, Long> {
    
    // Select a single column (e.g., name)
    @Query("SELECT m.name FROM LibraryMember m WHERE m.id = ?1")
    String findNameById(Long id);

    // Count all library members
    @Query("SELECT COUNT(m) FROM LibraryMember m")
    Long countAllMembers();

    // Sum of membership card IDs (example aggregate query)
    @Query("SELECT SUM(m.membershipCard.id) FROM LibraryMember m")
    Long sumMembershipCardIds();
}
