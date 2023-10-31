package com.example.blogproject.controller;

import com.example.blogproject.model.dto.NeighborDto;
import com.example.blogproject.model.entity.user.UserDetailsImpl;
import com.example.blogproject.service.NeighborService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.stream.DoubleStream;

/**
 * packageName : com.example.blogproject.controller
 * fileName : NeighborContoller
 * author : GGG
 * date : 2023-10-31
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-31         GGG          최초 생성
 */
@RestController
@Slf4j
@RequestMapping("/api/user")
public class NeighborContoller {

    @Autowired
    NeighborService neighborService;

    @GetMapping("/neighbor")
    public ResponseEntity<Object> findAllNeighbor(
            @RequestParam(defaultValue = "") String title,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size
    ) {
        try {
            Pageable pageable = PageRequest.of(page, size);
//            TODO : 토큰에서 USER ID 를 빼옴니다..
            UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            int userId = userDetails.getUserId();
            Page<NeighborDto> neighborPage
                    = neighborService.findAllNeighbor(userId,title ,pageable);
//          리액트 전송 : 부서배열 , 페이징정보 [자료구조 : Map<키이름, 값>]
            Map<String, Object> response = new HashMap<>();

            response.put("neighbor", neighborPage.getContent()); // 부서배열
            response.put("currentPage", neighborPage.getNumber()); // 현재페이지번호
            response.put("totalItems", neighborPage.getTotalElements()); // 총건수(개수)
            response.put("totalPages", neighborPage.getTotalPages()); // 총페이지수

            if (neighborPage.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
