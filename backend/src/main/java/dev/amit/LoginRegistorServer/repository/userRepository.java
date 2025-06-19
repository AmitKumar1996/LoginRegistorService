package dev.amit.LoginRegistorServer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.amit.LoginRegistorServer.entity.Users;

@Repository
public interface userRepository extends JpaRepository<Users, String>{

}
