package com.example.blogproject.model.entity;

import com.example.blogproject.model.entity.common.BaseTimeEntity;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;

/**
 * packageName : com.example.blogproject.model.entity
 * fileName : Qna
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
@Entity
@Table(name="QNA")
@SequenceGenerator(
        name = "SQ_QNA_GENERATOR"
        , sequenceName = "SQ_QNA"
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
@SQLDelete(sql = "UPDATE QNA SET DELETE_YN = 'Y', DELETE_TIME=TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') WHERE QNO = ?")

public class Qna extends BaseTimeEntity {
 //    @Id : Primary Key 에 해당
 @Id
 @GeneratedValue(strategy = GenerationType.SEQUENCE
         , generator = "SQ_QNA_GENERATOR"
 )
 private Integer qno;
 private String question;
 private String answer;
}
