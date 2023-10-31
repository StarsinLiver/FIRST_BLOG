package com.example.blogproject.model.dto;

import org.springframework.web.multipart.MultipartFile;

import javax.persistence.Column;
import javax.persistence.Lob;
import java.sql.Clob;

/**
 * packageName : com.example.blogproject.model.dto
 * fileName : NeighborDto
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
public interface NeighborDto {

    Integer getBid();

    String getTitle();


    Clob getContent(); // 이곳이 오류를 뜨게 만드는 원인임 내생각에는 따로 불러와야할 것 같은데

    Integer getViews();

    Integer getUserId();

    String getName();

    String getEmail();

    String getPassword();

    String getDescript();

}
