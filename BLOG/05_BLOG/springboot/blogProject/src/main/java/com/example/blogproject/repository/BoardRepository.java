package com.example.blogproject.repository;

import com.example.blogproject.model.entity.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

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
     * TODO : 유저 삭제시 모든 데이터 삭제
     */
    boolean deleteAllByUserId(int userId);
}
