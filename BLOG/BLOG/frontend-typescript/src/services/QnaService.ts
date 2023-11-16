import http from "../utils/http-common";

// 전체 조회 + LIKE 검색(PAGING 기능 : page(현재페이지) , size(1페이지당 개수))
// TODO : 얘는 모두의 블로그에 들어갈 GETALL
const getAll = (question:any, page:number, size:number) => {
  return http.get(`/qna?question=${question}&page=${page}&size=${size}`);
};

// TODO : 상세조회
const get = (qno:any) => {
  return http.get(`/qna/${qno}`);
};

const save = (data : any) => { 
  return http.post(`/add-qna`,data);
 }

const update = (qno:any, data: any) => {
  return http.put<any>(`/qna/update/${qno}`, data);
};

const remove = (qno:any) => {
  return http.delete<any>(`/qna/deletion/${qno}`);
};

const QnaService = {
  getAll,
  save,
  get,
  update,
  remove
};

export default QnaService;