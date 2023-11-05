package com.example.blogproject.controller;

import com.example.blogproject.model.entity.Board;
import com.example.blogproject.model.entity.Qna;
import com.example.blogproject.model.entity.user.User;
import com.example.blogproject.service.QnaService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * packageName : com.example.blogproject.controller
 * fileName : QnaController
 * author : san26
 * date : 2023-11-03
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-11-03         san26          최초 생성
 */

@RestController
@Slf4j
@RequestMapping("/api")
public class QnaController {

    @Autowired
    QnaService qnaService;

    /**
     * TODO : 전체 조회 + QUESTION LIKE 조회
     *
     * @param question
     * @param page
     * @param size
     * @return
     */
    @GetMapping("/qna")
    public ResponseEntity<Object> findAll(@RequestParam(defaultValue = "") String question,
                                          @RequestParam(defaultValue = "0") int page,
                                          @RequestParam(defaultValue = "3") int size
    ) {
        try {
//            페이지 변수 저장 (page:현재페이지번호, size:1페이지당개수)
//            함수 매개변수 : Pageable (위의 값을 넣기)
//        사용법 : Pageable pageable = PageRequest.of(현재페이지번호, 1페이지당개수);
            Pageable pageable = PageRequest.of(page, size);
            Page<Qna> qnaPage
                    = qnaService.findAllByQuestionContaining(question, pageable);
//          리액트 전송 : 부서배열 , 페이징정보 [자료구조 : Map<키이름, 값>]

            Map<String, Object> response = new HashMap<>();
//            TODO : 권한 정보도 줍시당
            response.put("qna", qnaPage.getContent()); // 부서배열
            response.put("currentPage", qnaPage.getNumber()); // 현재페이지번호
            response.put("totalItems", qnaPage.getTotalElements()); // 총건수(개수)
            response.put("totalPages", qnaPage.getTotalPages()); // 총페이지수

            if (qnaPage.isEmpty() == false) {
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

    /**
     * TODO : 저장 함수
     */
    @PostMapping("/add-qna")
    public ResponseEntity<Object> upload(@RequestBody Qna qna) {
        try {
            Qna qna1 = qnaService.saveQna(qna);
            return new ResponseEntity<>(qna1, HttpStatus.OK);
        } catch (Exception e) {
            log.info(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * TODO : ID 값으로 불러오기
     */
    @GetMapping("/qna/{qno}")
    public ResponseEntity<Object> findById(@PathVariable int qno) {
        try {
            Optional<Qna> optionalQna = qnaService.findById(qno);
            if (optionalQna.isEmpty() == false) {
                return new ResponseEntity<>(optionalQna.get(), HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            log.info(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * TODO : 수정하기
     */
    @PutMapping("/qna/update/{qno}")
    public ResponseEntity<Object> update(@PathVariable int qno, @RequestBody Qna qna) {
        try {
            Qna qna1 = qnaService.saveQna(qna);
            return new ResponseEntity<>(qna1, HttpStatus.OK);
        } catch (Exception e) {
            log.info(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * TODO : 삭제하기
     */
    @DeleteMapping("/qna/deletion/{qno}")
    public ResponseEntity<Object> delete(@PathVariable int qno) {
        try {
            boolean bSuccess = qnaService.deleteById(qno);
            if (bSuccess) {
                return new ResponseEntity<>(HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
