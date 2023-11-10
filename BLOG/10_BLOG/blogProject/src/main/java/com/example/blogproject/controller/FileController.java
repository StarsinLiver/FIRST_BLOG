package com.example.blogproject.controller;

import com.example.blogproject.model.entity.File;
import com.example.blogproject.service.userService.FileService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.net.URLEncoder;
import java.util.Optional;

/**
 * packageName : com.example.blogproject.controller
 * fileName : FileController
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

@RestController
@Slf4j
@RequestMapping("/api")
public class FileController {

    @Autowired
    FileService fileService;

    @PostMapping("/user/upload-plugin")
    public ResponseEntity<Object> saveFile(@RequestParam("file") MultipartFile file) {

        try {
            File file1 = File.builder().fileData(file.getBytes()).fileType(file.getContentType())
                    .fileName(file.getName()).build();

            File saveFile = fileService.saveFile(file1);
            System.out.println("파일이 저장되었습니다. 이제 다운로드 url 을 만들게요");

            String myServer = "http://localhost:8888";
            String downloadUrl = myServer + "/api/img/" + saveFile.getFid();
            System.out.println("다운로드 url 입니다 : " + downloadUrl);
            return new ResponseEntity<>(downloadUrl, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @GetMapping("/img/{fid}")
    public ResponseEntity<byte[]> previewFile(@PathVariable int fid) {
        try {
            Optional<File> optional = fileService.findById(fid);
            if (optional.isPresent()) {
                File file = optional.get();
                String encodedFileName = URLEncoder.encode(file.getFileName(), "UTF-8").replaceAll("\\+", "%20");
                return ResponseEntity.ok()
                        .contentType(MediaType.parseMediaType("application/octet-stream"))
                        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment;  filename*=UTF-8''" + encodedFileName)
                        .body(file.getFileData());
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
