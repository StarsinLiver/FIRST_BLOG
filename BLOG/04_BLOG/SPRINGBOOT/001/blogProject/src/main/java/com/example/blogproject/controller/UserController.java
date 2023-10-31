package com.example.blogproject.controller;

import com.example.blogproject.model.entity.Board;
import com.example.blogproject.model.entity.user.User;
import com.example.blogproject.model.entity.user.UserDetailsImpl;
import com.example.blogproject.service.userService.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

/**
 * packageName : com.example.loginproject2.controller
 * fileName : RestUserController
 * author : GGG
 * date : 2023-10-19
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-19         GGG          최초 생성
 */
@RestController
@Slf4j
@RequestMapping("/api")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/auth/login")
    public ResponseEntity<Object> login(@RequestBody User user) {
        try {
            String accessToken = userService.login(user.getEmail(), user.getPassword());
            HttpHeaders headers = new HttpHeaders();
            headers.add("Authorization", "Bearer " + accessToken);
            return ResponseEntity.ok().headers(headers).build();
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/auth/register")
    public ResponseEntity<Object> register(@RequestBody User user) {
        try {
            User user1 = userService.save(user);
            return new ResponseEntity<>(user1, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 유저 정보 찾기
     */
    @GetMapping("/user/userId/{userId}")
    public ResponseEntity<Object> findById(@PathVariable int userId) {
        try {
            System.out.println("왜 안오니");
            if (userId == 0) {
                UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
                userId = userDetails.getUserId();
            }
            Optional<User> optionalUser = userService.findById(userId);
            if (optionalUser.isEmpty() == false) {
                return new ResponseEntity<>(optionalUser.get(), HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    /**
     * TODO : 유저 정보 수정
     */
    @PutMapping("/user/user-update")
    public ResponseEntity<Object> update(@RequestBody User user) {
        try {
            User user1 = userService.save(user);
            return new ResponseEntity<>(user1, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/user/{userId}")
    public ResponseEntity<Object> removeById(@PathVariable int userId) {
        try {
            boolean bSuccess = userService.removeById(userId);
            if(bSuccess) {
                return new ResponseEntity<>(HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
