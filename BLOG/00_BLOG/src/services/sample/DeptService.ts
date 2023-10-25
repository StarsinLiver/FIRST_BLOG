﻿// TODO : AXIOS 공통 함수 : 백엔드 연동
import IDept from "../../types/sample/IDept";
import http from "../../utils/http-common";

// 전체 조회 + LIKE 검색(PAGING 기능 : page(현재페이지) , size(1페이지당 개수))
const getAll = (dname:any, page:number, size:number) => {
  return http.get<Array<IDept>>(`/basic/dept?dname=${dname}&page=${page}&size=${size}`);
};

// 상세 조회
const get = (dno:any) => {
  return http.get<IDept>(`/basic/dept/${dno}`);
};

// 저장
const create = (data:IDept) => {
  return http.post<IDept>("/basic/dept", data);
};

// 수정
const update = (dno:any, data:IDept) => {
  return http.put<any>(`/basic/dept/${dno}`, data);
};

// 삭제
const remove = (dno:any) => {
  return http.delete<any>(`/basic/dept/deletion/${dno}`);
};

const DeptService = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default DeptService;