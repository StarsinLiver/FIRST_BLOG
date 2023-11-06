package com.example.blogproject.repository;

import com.example.blogproject.model.entity.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * packageName : com.example.loginproject2.repository
 * fileName : UserRepository
 * author : GGG
 * date : 2023-10-18
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-18         GGG          최초 생성
 */
@Repository
public interface UserRepository extends JpaRepository<User , Integer> {

//    이메일로 값을 찾음
    Optional<User> findByEmail(String mail);
}
