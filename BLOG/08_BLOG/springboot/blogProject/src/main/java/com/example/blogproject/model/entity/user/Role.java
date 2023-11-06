package com.example.blogproject.model.entity.user;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

/**
 * packageName : com.example.loginproject.model.exam03
 * fileName : Role
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
@Getter
@RequiredArgsConstructor
public enum Role {
    ADMIN("ROLE_ADMIN","관리자"),
    USER("ROLE_USER","일반 사용자");

    private final String key;
    private final String title;
}
