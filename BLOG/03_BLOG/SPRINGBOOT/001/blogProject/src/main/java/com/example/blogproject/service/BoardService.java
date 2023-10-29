package com.example.blogproject.service;

import com.example.blogproject.model.entity.Board;
import com.example.blogproject.model.entity.user.User;
import com.example.blogproject.model.entity.user.UserDetailsImpl;
import com.example.blogproject.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;

/**
 * packageName : com.example.blogproject.service
 * fileName : BoardService
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
@Service
public class BoardService {

    @Autowired
    BoardRepository boardRepository;

    /**
     * TODO : 게시물 저장하기
     * @param board
     * @return
     */
    public Board save(Board board) {
//        TODO : 유저의 넘버값을 저장
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        board.setUserId(userDetails.getUserId());
        Board board1 = boardRepository.save(board);
        return board1;
    }

    /**
     * TODO : 게시물 전체 조회 + TITLE 로 찾기 + 페이징 처리
     */
    public Page<Board> findAllByTitleContaining(String title , Pageable pageable) {
        Page<Board> boardPage = boardRepository.findAllByTitleContaining(title,pageable);
        return boardPage;
    }

    /**
     * TODO : 유저 넘버값으로도 받아야 해요
     */
    public Page<Board> findAllByTitleContainingAndUserId(String title , Pageable pageable) {
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        int userId = userDetails.getUserId();
        System.out.println("유저의 아이디 값이예요 " + userId);

        Page<Board> boardPage = boardRepository.findAllByTitleContainingAndUserId(title,userId,pageable);
        return boardPage;
    }

    /**
     * TODO : 상세 조회 입니다.
     */
    public Optional<Board> findById(int bid) {
        Optional<Board> optionalBoard = boardRepository.findById(bid);
        return optionalBoard;
    }

    /**
     * TODO : 게시물 삭제하기
     */
    public boolean removeById(int bid) {
        if(boardRepository.existsById(bid)) {
            boardRepository.deleteById(bid);
            return true;
        }
        return false;
    }
}
