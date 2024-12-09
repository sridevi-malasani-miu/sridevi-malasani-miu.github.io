package edu.miu.jpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.miu.jpa.entity.MembershipCard;

public interface MembershipCardRepository extends JpaRepository<MembershipCard, Long> {
}
