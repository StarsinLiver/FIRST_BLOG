import React from "react";
import sunrise from "../../assets/img/sunrise.jpg";
import cat from "../../assets/img/cat.jpg";
import { Link } from "react-router-dom";

function PropsPage(props: any) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.img})`,
        height: "800px"
      }}
      className="pt-5"
    >
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
      {/* Header List (Nav) 시작 */}
      <div className="pt-5">
        <div className="pt-5">
          <div className="w-75 mx-auto">
            <div className="w-75 mx-auto">
              <ul className="nav justify-content-center p-3 m-3 border-secondary-subtl border-top border-2 border-bottom">
                <li className="nav-item me-5">
                  <Link
                    to="/boardList"
                    className="nav-link me-5"
                    aria-current="page"
                  >
                    <i
                      className="fa-solid fa-users"
                      style={{ color: "#ede3e3" }}
                    ></i>
                    <i className="text-white fs-6"> 모두의 블로그</i>
                  </Link>
                </li>
                <li className="nav-item me-5 ms-2">
                  <Link
                    to="/neighborBoardList"
                    className="nav-link text-white me-3"
                    aria-current="page"
                  >
                    <i
                      className="fa-regular fa-comment"
                      style={{ color: "#ede3e3" }}
                    ></i>
                    <i> 이웃 블로그</i>
                  </Link>
                </li>
                <li className="nav-item me-5 ms-2">
                  <Link
                    to="#"
                    className="nav-link text-white me-3"
                    aria-current="page"
                  >
                    <i>나도</i>
                  </Link>
                </li>
                <li className="nav-item me-5 ms-2">
                  <Link
                    to="#"
                    className="nav-link text-white me-3"
                    aria-current="page"
                  >
                    <i>몰라</i>
                  </Link>
                </li>
                <li className="nav-item me-5 ms-2">
                  <Link
                    to="/user/boardList"
                    className="nav-link text-white"
                    aria-current="page"
                  >
                    <i
                      className="fa-solid fa-pen-to-square"
                      style={{ color: "#ede3e3" }}
                    ></i>
                    <i> 나의 블로그</i>
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

        {/* 오른쪽 메인 글 이거 화면 작게하면 이상함*/}
        <div className="w-50 mt-5 p-5 float-end">
          <div className="mt-5">
            {/* 여기부터 카드 */}
            <div className="row row-cols-1 row-cols-md-3 g-4 w-75 border p-5 text-wrap mx-auto">
              <div className="col">
                <div className="card">
                  <img src={sunrise} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={sunrise} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={sunrise} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropsPage;
