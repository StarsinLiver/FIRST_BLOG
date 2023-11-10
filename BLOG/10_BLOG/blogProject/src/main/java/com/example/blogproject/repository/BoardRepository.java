package com.example.blogproject.repository;

import com.example.blogproject.model.entity.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * packageName : com.example.blogproject.repository
 * fileName : BoardRepository
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
@Repository
public interface BoardRepository extends JpaRepository<Board , Integer> {

    Page<Board> findAllByTitleContaining(String title , Pageable pageable);

    /**
     * TODO : 유저의 블로그에 들어갔을때
     */
    Page<Board> findAllByTitleContainingAndUserId(String title ,int userId, Pageable pageable);

    /**
     * TODO : 유저 삭제전 board 데이터가 있는지 확인
     */
    boolean existsBoardByUserId(int userId);

    /**
     * TODO : 유저 id 값으로 게시판 찾기
     */
    List<Board> findAllByUserId(int userId);

    /**
     * TODO : 유저 삭제시 모든 데이터 삭제
     *        오류 : 삭제가 안됨
     */
//    int deleteAllByUserId(int userId);

    /**
     * TODO : 유저가 상세조회를 했을때 VIEWS 를 올릴수있을까?
     */
    @Query(value = "UPDATE BOARD " +
            "SET VIEWS = VIEWS + 1 " +
            "WHERE BID = :bid " ,nativeQuery = true)
    int updateBoardViews(@Param("bid") int bid);
}
