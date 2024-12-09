package edu.miu.jpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.miu.jpa.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
}

