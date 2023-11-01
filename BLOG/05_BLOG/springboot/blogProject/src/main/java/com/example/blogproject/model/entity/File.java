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
 * fileName : File
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
@Entity
@Table(name = "BOARD_FILE")
@SequenceGenerator(
        name = "SQ_BOARD_FILE_GENERATOR"
        , sequenceName = "SQ_BOARD_FILE"
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
@SQLDelete(sql = "UPDATE BOARD_FILE SET DELETE_YN = 'Y', DELETE_TIME=TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') WHERE FID = ?")

public class File extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SQ_BOARD_FILE_GENERATOR")
    private Integer fid;
    @Lob
    private byte[] fileData;
    private String fileName;
    private String fileType;
}
