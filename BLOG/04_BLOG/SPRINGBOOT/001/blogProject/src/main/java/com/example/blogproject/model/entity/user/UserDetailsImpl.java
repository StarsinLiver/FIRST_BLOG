package com.example.blogproject.model.entity.user;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;

/**
 * packageName : com.example.loginproject.model.exam03
 * fileName : UserDetailsImpl
 * author : GGG
 * date : 2023-10-17
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-17         GGG          최초 생성
 */
public class UserDetailsImpl implements UserDetails {

    //      TODO : 속성
    private final User user;

    //    TODO : 생성자
    public UserDetailsImpl(User user) {
        this.user = user;
    }

//    TODO : 오버라이딩 필수 설정들

    //    TODO: User 객체의 권한을 가져옴 key = USER , ADMIN
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Collection<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(() -> user.getRole().getKey());
        return authorities;
    }

    public Integer getUserId() {
        return user.getUserId();
    }

    public String getUserEmail() {
        return user.getEmail();
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getName();
    }


    //    TODO: 리프레쉬 토큰 만료시간이 되었는지 확인을 위해 넣었습니다.
    public String getRefreshToken() {
        return user.getRefreshToken();
    }

    // TODO : 세부 설정들 : 지금은 안쓰니깐 TRUE 로
    @Override
    public boolean isAccountNonExpired() {
        return true;
    } // 계정 만료 여부

    @Override
    public boolean isAccountNonLocked() {
        return true;
    } // 계정 잠김 여부

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    } // 비밀번호 만료 여부

    @Override
    public boolean isEnabled() {
        return true;
    } // 계정의 활성화 여부
}
