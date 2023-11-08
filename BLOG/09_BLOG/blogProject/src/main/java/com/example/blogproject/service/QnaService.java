package com.example.blogproject.service;

import com.example.blogproject.model.entity.Qna;
import com.example.blogproject.repository.QnaRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.blogproject.service
 * fileName : QnaService
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

@Service
@Slf4j
public class QnaService {

    @Autowired
    QnaRepository qnaRepository;

    /*
    TODO : 전체 조회
     */
    public Page<Qna> findAllByQuestionContaining(String question , Pageable pageable) {
        Page<Qna> qnaPage = qnaRepository.findAllByQuestionContaining(question , pageable);
        return qnaPage;
    }

    /**
     * TODO : 저장함수 + 수정함수
     */
    public Qna saveQna(Qna qna) {
        Qna qna1 = qnaRepository.save(qna);
        return qna1;
    }

    /**
     * TODO : id 값으로 불러오기
     */
    public Optional<Qna> findById(int qno) {
        Optional<Qna> optionalQna = qnaRepository.findById(qno);
        return optionalQna;
    }

    /**
     * TODO : 삭제 함수
     */
    public boolean deleteById(int qno) {
        if(qnaRepository.existsById(qno)) {
            qnaRepository.deleteById(qno);
            return true;
        }
        return false;
    }
}
