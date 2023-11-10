import http from "../utils/http-common";

// 전체 조회 + LIKE 검색(PAGING 기능 : page(현재페이지) , size(1페이지당 개수))
// TODO : 얘는 모두의 블로그에 들어갈 GETALL
const loginUser = (user : any) => {
  return http.post(`/auth/login` , user);
};

  //  TODO : AUTH 의 비밀번호 까먹었을때 사용
  const forgotPassword = (email : string) => { 
    return http.get(`/auth/forgot-password/${email}`);
   }

// TODO : 토큰으로 id값을 넣을거기 때문에 안해도 되요 다만, 쓸수도 있기에
const findById = (userId : any) => { 
  return http.get(`/user/userId/${userId}`,  {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  });
 }

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

 const update = (user : any) => { 
  return http.put(`/user/user-update`,user,  {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  })
  }

  const remove = (userId : any) => { 
    return http.delete(`/user/${userId}`,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
   }



const UserService = {
  loginUser,
  forgotPassword,
  findById,
  getAll,
  save,
  update,
  remove
};

export default UserService;