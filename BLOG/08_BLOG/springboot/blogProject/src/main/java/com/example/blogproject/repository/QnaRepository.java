package com.example.blogproject.repository;

import com.example.blogproject.model.entity.Qna;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * packageName : com.example.blogproject.repository
 * fileName : QnaRepository
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

@Repository
public interface QnaRepository extends JpaRepository<Qna , Integer> {

    Page<Qna> findAllByQuestionContaining(String question , Pageable pageable);
}
