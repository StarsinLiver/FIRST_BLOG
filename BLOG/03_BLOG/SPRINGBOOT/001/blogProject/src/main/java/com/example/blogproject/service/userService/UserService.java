package com.example.blogproject.service.userService;

import com.example.blogproject.model.dto.AuthDto;
import com.example.blogproject.model.entity.user.Role;
import com.example.blogproject.model.entity.user.User;
import com.example.blogproject.provider.JwtTokenProvider;
import com.example.blogproject.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.loginproject2.service
 * fileName : UserService
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
@Service
@Slf4j
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final JwtTokenProvider jwtTokenProvider;


    //    로그인시 패스워드를 비교
    public String login(String email, String password) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("유저 에러에러"));
        System.out.println("데이터 베이스의 패스워드 : " + user.getPassword());
        if (user.getPassword().equals(password) && user != null) {
            System.out.println("토큰 생성시 email 값과 role 입니다. : " + email + " " + user.getRole());
//            만약 패스워드가 맞다면 토큰을 생성하고, 리프레쉬 토큰을 데이터 베이스에 보낸다.
            AuthDto.TokenDto token = jwtTokenProvider.createToken(email, user.getRole().toString());
            user.setRefreshToken(token.getRefreshToken());
            userRepository.save(user);
            System.out.println("엑세스 토큰 생성 : " + token.getAccessToken());
            System.out.println("리프레쉬 토큰 생성 : " + token.getRefreshToken());

            return token.getAccessToken();
        }
        return null;
    }

    /**
     * 모든 정보 찾기
     *
     * @return
     */
    public List<User> findAll() {
        return userRepository.findAll();
    }

    /**
     * 이메일로 찾기
     */
    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    /**
     * TODO : 유저 정보 저장
     */
    public User save(User user) {
        user.setRole(Role.USER);
        User user1 = userRepository.save(user);
        return user1;
    }
}
