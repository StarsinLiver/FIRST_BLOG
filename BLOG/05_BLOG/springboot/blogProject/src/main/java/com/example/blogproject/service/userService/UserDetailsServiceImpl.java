package com.example.blogproject.service.userService;

import com.example.blogproject.model.entity.user.User;
import com.example.blogproject.model.entity.user.UserDetailsImpl;
import com.example.blogproject.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

/**
 * packageName : com.example.loginproject2.service
 * fileName : UserDetailsServiceImpl
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
@Component
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {
//    TODO: 로그인시 ID의 값과 같은 정보를 DB에서 찾는다.

    private final UserRepository userRepository;
    @Override
    public UserDetailsImpl loadUserByUsername(String email) throws UsernameNotFoundException {
//        만약 User 객체가 null 일 경우 에러를 던진다.
        User findUser = userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("can't find user with this email. ->" + email));

        if(findUser != null) {
            UserDetailsImpl userDetails = new UserDetailsImpl(findUser);
            return userDetails;
        }
        return null;
    }
}
