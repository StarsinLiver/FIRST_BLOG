// TODO : AXIOS 공통 함수 : 백엔드 연동
import ICinema from "../../types/normal/ICinema";
import http from "../../utils/http-common";

// 전체 조회 + LIKE 검색(PAGING 기능 : page(현재페이지) , size(1페이지당 개수))
const getAll = (question:any, page:number, size:number) => {
  return http.get<Array<ICinema>>(`/normal/cinema?question=${question}&page=${page}&size=${size}`);
};

// 상세 조회
const get = (cfno:any) => {
  return http.get<ICinema>(`/normal/cinema/${cfno}`);
};

// 저장
const create = (data:ICinema) => {
  return http.post<ICinema>("/normal/cinema", data);
};

// 수정
const update = (cfno:any, data:ICinema) => {
  return http.put<any>(`/normal/cinema/${cfno}`, data);
};

// 삭제
const remove = (cfno:any) => {
  return http.delete<any>(`/normal/cinema/deletion/${cfno}`);
};

const CinemaService = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default CinemaService;
