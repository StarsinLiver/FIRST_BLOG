import http from "../utils/http-common";

// 전체 조회 + LIKE 검색(PAGING 기능 : page(현재페이지) , size(1페이지당 개수))
// TODO : 얘는 모두의 블로그에 들어갈 GETALL
const getAll = (title:any, page:number, size:number) => {
  return http.get(`/board?title=${title}&page=${page}&size=${size}`);
};

// TODO : 상세조회
const get = (bid:any) => {
  return http.get(`/board/${bid}`);
};

// TODO : UserBoard 의 AddBoard 에서 쓰일 글 저장
const create = (data: any) => {
  return http.post("/user/add-board", data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    },
  });
};

// TODO : 얘도 UserBoard 에서 수정버튼에서 쓰일것
const update = (bid:any, data: any) => {
  return http.put<any>(`/user/update-board/${bid}`, data,{
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    },
  });
};

// TODO : 똑같이 UserBoard 에서 삭제 버튼
const remove = (bid:any) => {
  return http.delete<any>(`/user/board/deletion/${bid}` ,{
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    },
  });
};

const BoardService = {
  getAll,
  get,
  create,
  update,
  remove
};

export default BoardService;