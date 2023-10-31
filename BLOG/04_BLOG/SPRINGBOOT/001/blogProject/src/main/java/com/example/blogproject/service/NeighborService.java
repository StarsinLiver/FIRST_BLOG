package com.example.blogproject.service;

import com.example.blogproject.model.dto.NeighborDto;
import com.example.blogproject.model.entity.Neighbor;
import com.example.blogproject.repository.NeighborRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 * packageName : com.example.blogproject.service
 * fileName : NeighborService
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
@Service
public class NeighborService {

    @Autowired
    NeighborRepository neighborRepository;

    /**
     * TODO : 모든 이웃 찾기
     * @param userId
     * @param pageable
     * @return
     */
    public Page<NeighborDto> findAllNeighbor(int userId ,String title , Pageable pageable) {
        Page<NeighborDto> neighborPage = neighborRepository.findAllNeighbor(userId,title, pageable);
        return neighborPage;
    }
}
