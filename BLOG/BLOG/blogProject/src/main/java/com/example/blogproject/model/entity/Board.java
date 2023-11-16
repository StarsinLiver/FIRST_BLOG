package com.example.blogproject.model.entity;

import com.example.blogproject.model.entity.common.BaseTimeEntity;
import com.example.blogproject.model.entity.user.User;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;

/**
 * packageName : com.example.blogproject.model.entity
 * fileName : Board
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
@Entity
@Table(name="BOARD")
@SequenceGenerator(
        name = "SQ_BOARD_GENERATOR"
        , sequenceName = "SQ_BOARD"
        , initialValue = 1
        , allocationSize = 1
)
@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert
@DynamicUpdate
// soft delete
@Where(clause = "DELETE_YN = 'N'")
@SQLDelete(sql = "UPDATE BOARD SET DELETE_YN = 'Y', DELETE_TIME=TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') WHERE BID = ?")
public class Board extends BaseTimeEntity {
    //    부서넘버
//    @Id : Primary Key 에 해당
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE
            , generator = "SQ_BOARD_GENERATOR"
    )
    private Integer bid;
    @Column(name = "TITLE")
    private String title;
    @Lob
    private String content;
    private Integer views;
//    security 하고나서 나중에 추가 해줄것
    private Integer userId;

//    @ManyToOne
//    @JoinColumn(name = "userId")
//    private User user;
}
