import http from '../utils/http-common'

// TODO : UserBoard 의 AddBoard 에서 쓰일 글 저장
const fileUpload = (data: any) => {
    return http.post("/user/upload-plugin", data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      },
    });
  };


const FileService = {
    fileUpload
} 

export default FileService;