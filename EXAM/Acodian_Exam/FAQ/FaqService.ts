// TODO : AXIOS 공통 함수 : 백엔드 연동
import IFaq from "../../types/normal/IFaq";
import http from "../../utils/http-common";

// 전체 조회 + LIKE 검색(PAGING 기능 : page(현재페이지) , size(1페이지당 개수))
const getAll = (title:any, page:number, size:number) => {
  return http.get<Array<IFaq>>(`/normal/faq?title=${title}&page=${page}&size=${size}`);
};

// 상세 조회
const get = (no:any) => {
  return http.get<IFaq>(`/normal/faq/${no}`);
};

// 저장
const create = (data:IFaq) => {
  return http.post<IFaq>("/normal/faq", data);
};

// 수정
const update = (no:any, data:IFaq) => {
  return http.put<any>(`/normal/faq/${no}`, data);
};

// 삭제
const remove = (no:any) => {
  return http.delete<any>(`/normal/faq/deletion/${no}`);
};

const FaqService = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default FaqService;
