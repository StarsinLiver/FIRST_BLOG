package com.example.blogproject.repository;

import com.example.blogproject.model.entity.File;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * packageName : com.example.blogproject.repository
 * fileName : FileRepository
 * author : san26
 * date : 2023-11-01
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-11-01         san26          최초 생성
 */

@Repository
public interface FileRepository extends JpaRepository<File , Integer> {
}
