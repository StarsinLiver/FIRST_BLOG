import http from "../utils/http-common";

// 전체 조회 + LIKE 검색(PAGING 기능 : page(현재페이지) , size(1페이지당 개수))
// TODO : 얘는 모두의 블로그에 들어갈 GETALL
const findUser = (user : any) => {
  return http.post(`/auth/login` , user);
};

// 전체 조회 + LIKE 검색(PAGING 기능 : page(현재페이지) , size(1페이지당 개수))
// TODO : 얘는 모두의 블로그에 들어갈 GETALL
const getAll = (title:any, page:number, size:number) => {
  return http.get(`/user/board?title=${title}&page=${page}&size=${size}`,
  {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  });
};

const save = (data : any) => { 
  return http.post("/auth/register" , data )
 }


const UserService = {
  findUser,
  getAll,
  save
};

export default UserService;