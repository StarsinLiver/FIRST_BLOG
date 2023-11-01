package com.example.blogproject.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * packageName : com.example.connecttest.config
 * fileName : WebConfig
 * author : san26
 * date : 2023-10-26
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-26         san26          최초 생성
 */

@Configuration
public class WebConfig implements WebMvcConfigurer {

//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("/**")
////                아래 url 허용
////               TODO: 사용법 : .allowedOrigins("http://허용할IP:허용할Port" , ...)
//                .allowedOrigins("http://localhost:3000")
////                Todo: 아래 추가해야 update, delete, insert, select 가 cors 문제가 안생김
//                .allowedMethods(
//                        HttpMethod.GET.name(),
//                        HttpMethod.POST.name(),
//                        HttpMethod.PUT.name(),
//                        HttpMethod.DELETE.name(),
//                        HttpMethod.PATCH.name() // 수정할 때 쓰는 방식 PUT 과 유사
//                );
//    }
}