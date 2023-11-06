import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopHeaders from "../../components/headers/TopHeaders";

function PropsPage(props: any) {

  let [isAccessToken , setIsAccessToken] = useState(false);

  // 토큰이 있으면 로그인창을 로그아웃으로 바꿈
  useEffect(()=>{
    if(localStorage.getItem('accessToken') != null) {
      setIsAccessToken(true);
    } 
    <TopHeaders isAccessToken={isAccessToken}/>
  },[isAccessToken])

  const removeAccessToken = () => { 
  window.localStorage.removeItem('accessToken');
  setIsAccessToken(false);
  }



  
  return (
    <div
      style={{
        backgroundImage: `url(${props.img})`,
        height: "800px",
      }}
      className="pt-5"
    >
      { (isAccessToken)? (
        <div className="pt-5 me-5">
          <div className="float-end me-5">
            <button className="btn btn-outline-light me-2" onClick={removeAccessToken}>로그아웃 </button>
          </div>
        </div>
      ) : (
        <div className="pt-5 me-5">
          <div className="float-end me-5">
            <Link to="/login" className="btn btn-outline-light me-2">
              로그인
            </Link>
            <Link to="/register" className="btn btn-outline-light">
              회원가입
            </Link>
          </div>
        </div>
      )}
      {/* Header List (Nav) 시작 */}
      <div className="pt-5">
        <div className="pt-5">
          <div className="w-75 mx-auto">
            <div className="mx-auto d-block-inline">
              <ul className="nav justify-content-center p-3 m-3 border-secondary-subtl border-top border-2 border-bottom">
                <li className="nav-item me-5">
                  <Link
                    to="/board"
                    className="nav-link me-5"
                    aria-current="page"
                  >
                    <i
                      className="fa-solid fa-users"
                      style={{ color: "#ede3e3" }}
                    ></i>
                    <i className="text-white fs-6"> EVERYONE'S POST</i>
                  </Link>
                </li>
                <li className="nav-item me-5 ms-2">
                  <Link
                    to="/qna"
                    className="nav-link text-white me-3"
                    aria-current="page"
                  >
                    <i
                      className="fa-regular fa-comment"
                      style={{ color: "#ede3e3" }}
                    ></i>
                    <i> Q & A</i>
                  </Link>
                </li>
                <li className="nav-item me-5 ms-2">
                  <Link
                    to="/about-me"
                    className="nav-link text-white me-3"
                    aria-current="page"
                  >
                    <i>ABOUT ME</i>
                  </Link>
                </li>
                <li className="nav-item me-5 ms-2">
                  <Link
                    to="#"
                    className="nav-link text-white me-3"
                    aria-current="page"
                  >
                    <i>뭘 적지</i>
                  </Link>
                </li>
                <li className="nav-item me-5 ms-2">
                  <Link
                    to="/user/board"
                    className="nav-link text-white"
                    aria-current="page"
                  >
                    <i
                      className="fa-solid fa-pen-to-square"
                      style={{ color: "#ede3e3" }}
                    ></i>
                    <i> MY BLOG</i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 왼쪽 메인 글 */}
      <div className="mt-5">
        <div className="float-start w-50 mt-5">
          <div className="float-end w-75 text-start ">
            <h1 className="text-white display-4">산하의 블로그</h1>
            <h2 className="mt-5 mb-5 text-white">샘플 디자인 입니다.</h2>

            <i
              className="fa-brands fa-instagram fa-l mt-3 "
              style={{ color: "#ede3e3" }}
            >
              {" "}
              Instargram @abcdef
            </i>
            <br />
            <i
              className="fa-brands fa-twitter fa-l mt-3"
              style={{ color: "#ede3e3" }}
            >
              {" "}
              twiter @abcdef
            </i>
            <br />
            <i
              className="fa-brands fa-github fa-l mt-3"
              style={{ color: "#ede3e3" }}
            >
              {" "}
              GitHub @abcdef
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropsPage;
