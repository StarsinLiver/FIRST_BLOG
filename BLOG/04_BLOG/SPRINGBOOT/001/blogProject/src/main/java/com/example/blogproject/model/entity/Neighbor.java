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
 * fileName : Neighbor
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
@Entity
@Table(name="NEIGHBOR")
@SequenceGenerator(
        name = "SQ_NEIGHBOR_GENERATOR"
        , sequenceName = "SQ_NEIGHBOR"
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
@SQLDelete(sql = "UPDATE NEIGHBOR SET DELETE_YN = 'Y', DELETE_TIME=TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') WHERE NID = ?")

public class Neighbor extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE
            , generator = "SQ_NEIGHBOR_GENERATOR"
    )
    private Integer nid;
    @Column(name = "USER_ID")
    private Integer userId;
    @Column(name = "NEIGHBOR_USER_ID")
    private Integer neighborUserId;

}
