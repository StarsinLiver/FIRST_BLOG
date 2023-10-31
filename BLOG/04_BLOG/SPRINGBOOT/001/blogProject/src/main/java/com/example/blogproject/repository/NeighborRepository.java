package com.example.blogproject.repository;

import com.example.blogproject.model.dto.NeighborDto;
import com.example.blogproject.model.entity.Neighbor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * packageName : com.example.blogproject.repository
 * fileName : NeighborRepository
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
@Repository
public interface NeighborRepository extends JpaRepository<Neighbor , Integer> {

    @Query(value = "SELECT B.* , BU.NAME, BU.EMAIL , BU.PASSWORD , BU.DESCRIPT FROM BOARD B " +
            "JOIN BOARD_USER BU " +
            "ON B.USER_ID = BU.USER_ID " +
            "JOIN NEIGHBOR N " +
            "ON B.USER_ID = N.NEIGHBOR_USER_ID " +
            "WHERE N.USER_ID = :userId " +
            "AND TITLE LIKE '%' || :title || '%'" , nativeQuery = true)
    Page<NeighborDto> findAllNeighbor(@Param("userId") int userId , @Param("title") String title , Pageable pageable);
}
