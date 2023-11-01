package com.example.blogproject.service.userService;

import com.example.blogproject.model.entity.Board;
import com.example.blogproject.model.entity.File;
import com.example.blogproject.repository.FileRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * packageName : com.example.blogproject.service.userService
 * fileName : FileService
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
@Service
@Slf4j
public class FileService {

    @Autowired
    FileRepository fileRepository;

    /**
     * TODO : 파일 저장
     * @param file
     * @return
     */
    public File saveFile(File file) {
        File file1 =  fileRepository.save(file);
        return file1;
    }

    /**
     * TODO : ID 로 찾기
     * @param fid
     * @return
     */
    public Optional<File> findById(int fid) {
        Optional<File> optionalFile = fileRepository.findById(fid);
        return optionalFile;
    }

//    public List<FileIdDto> findFidByBid(Long bid) {
//        return fileRepository.findAllByBidAndIsImage(bid, false);
//    }
//
//    //    게시글 작성시 본문에 이미지가 포함되어 있는지 확인
////    이미지가 있다면, 이미지의 bid 설정
////    bid가 설정되어 있지 않다면(bid == 0) 이미지를 삽입했다가 지운 경우이므로
////    나중에 삭제함
//    public Long uploadImg(Board board) {
////        본문 이미지의 fid를 저장할 list
//        List<Long> list = new ArrayList<>();
////        본문
//        String content = board.getContent();
////        이미지의 fid 를 찾기 위한 정규식
//        Pattern pattern = Pattern.compile("/api/img/(\\d+)");
////        정규식 매칭 객체
//        Matcher matcher = pattern.matcher(content);
////        매칭 되는게 있다면
//        if (matcher.find()) {
////            첫번째 이미지의 fid 저장 -> 나중에 섬네일용으로
//            String fid = matcher.group(1);
////            fid 저장용 list에 fid 저장
//            list.add(Long.parseLong(matcher.group(1)));
////            디버깅용 로그
//            log.info("이미지 확인용1");
////            매칭 되지 않을때까지 반복
//            while (matcher.find()) {
////                매칭될때마다 list에 fid 저장.
//                list.add(Long.parseLong(matcher.group(1)));
//            }
////            디버깅용 로그
//            log.info("이미지 확인용2");
////            list에 저장해둔 fid로 file테이블에서 데이터 가져오기
//            List<File>list1 = fileRepository.findByFidIn(list);
////            찾아온 file 객체들의 bid를 세팅
//            for (int j = 0; j < list1.size(); j++) {
//                list1.get(j).setBid(board.getBid());
//            }
////            첫번째 이미지의 fid 반환
//            return Long.parseLong(fid);
//        }
////        본문에 이미지가 없으므로 초기값(0) 반환
//        return 0L;
//    }
    
}
