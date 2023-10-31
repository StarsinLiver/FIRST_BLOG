package com.example.blogproject.controller;

import com.example.blogproject.model.entity.Board;
import com.example.blogproject.service.BoardService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * packageName : com.example.blogproject.controller
 * fileName : BoardController
 * author : san26
 * date : 2023-10-28
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-28         san26          최초 생성
 */
@RestController
@Slf4j
@RequestMapping("/api")
public class BoardController {

    @Autowired
    BoardService boardService;

    /**
     * TODO : 게시물 저장 하기
     *
     * @param board
     * @return
     */
    @PostMapping("/user/add-board")
    public ResponseEntity<Object> upload(@RequestParam("board") String board) {
        ObjectMapper objectMapper = new ObjectMapper();
        Board boardModel;
        try {
            boardModel = objectMapper.readValue(board, Board.class);
//            만약 제목이 없을 경우
            if (boardModel.getTitle().equals("")) {
                boardModel.setTitle("제목없음");
            }
            Board model = boardService.save(boardModel);
            return new ResponseEntity<>(model, HttpStatus.OK);
        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    /**
     * TODO : 게시물 전체 조회 + TITLE 조회 + 페이징 처리
     */
    @GetMapping("/board")
    public ResponseEntity<Object> findAllByTitleContaining(
            @RequestParam(defaultValue = "") String title,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size
    ) {
        try {
            System.out.println("받은 제목 : " + title);
//            페이지 변수 저장 (page:현재페이지번호, size:1페이지당개수)
//            함수 매개변수 : Pageable (위의 값을 넣기)
//        사용법 : Pageable pageable = PageRequest.of(현재페이지번호, 1페이지당개수);
            Pageable pageable = PageRequest.of(page, size);
            Page<Board> boardPage
                    = boardService.findAllByTitleContaining(title, pageable);
//          리액트 전송 : 부서배열 , 페이징정보 [자료구조 : Map<키이름, 값>]
            Map<String, Object> response = new HashMap<>();
            response.put("board", boardPage.getContent()); // 부서배열
            response.put("currentPage", boardPage.getNumber()); // 현재페이지번호
            response.put("totalItems", boardPage.getTotalElements()); // 총건수(개수)
            response.put("totalPages", boardPage.getTotalPages()); // 총페이지수

            if (boardPage.isEmpty() == false) {
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
     * TODO : 상세 조회
     */
    @GetMapping("/board/{bid}")
    public ResponseEntity<Object> findById(
            @PathVariable int bid
    ) {
        try {
            Optional<Board> optionalBoard = boardService.findById(bid);
            if (optionalBoard.isEmpty() == false) {
               return new ResponseEntity<>(optionalBoard.get(), HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * TODO : USERLIST 의 게시물 전체 조회 + TITLE 조회 + 페이징 처리
     */
    @GetMapping("/user/board")
    public ResponseEntity<Object> findAllByTitleContainingAndUserId(
            @RequestParam(defaultValue = "") String title,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size
    ) {
        try {
            System.out.println("받은 제목 : " + title);
//            페이지 변수 저장 (page:현재페이지번호, size:1페이지당개수)
//            함수 매개변수 : Pageable (위의 값을 넣기)
//        사용법 : Pageable pageable = PageRequest.of(현재페이지번호, 1페이지당개수);
            Pageable pageable = PageRequest.of(page, size);
            Page<Board> boardPage
                    = boardService.findAllByTitleContainingAndUserId(title, pageable);
//          리액트 전송 : 부서배열 , 페이징정보 [자료구조 : Map<키이름, 값>]
            Map<String, Object> response = new HashMap<>();
            response.put("board", boardPage.getContent()); // 부서배열
            response.put("currentPage", boardPage.getNumber()); // 현재페이지번호
            response.put("totalItems", boardPage.getTotalElements()); // 총건수(개수)
            response.put("totalPages", boardPage.getTotalPages()); // 총페이지수

            if (boardPage.isEmpty() == false) {
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
     * TODO : 수정하기
     */
    @PutMapping("/user/update-board/{bid}")
    public ResponseEntity<Object> upload(@PathVariable int bid, @RequestParam("board") String board) {
        ObjectMapper objectMapper = new ObjectMapper();
        Board boardModel;
        try {
            boardModel = objectMapper.readValue(board, Board.class);
            if (boardModel.getBid() != null) {
                Board model = boardService.save(boardModel);
                return new ResponseEntity<>(model, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    /**
     * TODO : 게시물 삭제하기
     */
    @DeleteMapping("/user/board/deletion/{bid}")
    public ResponseEntity<Object> removeById(@PathVariable int bid) {
        try {
            boolean bSuccess = boardService.removeById(bid);
            if (bSuccess) {
                return new ResponseEntity<>(HttpStatus.OK); // 200 번
            }
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST); // 400번

        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); // 500번
        }
    }
}




