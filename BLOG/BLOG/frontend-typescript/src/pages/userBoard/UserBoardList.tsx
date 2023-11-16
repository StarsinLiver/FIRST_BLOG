import React, { useState, useEffect } from "react";
import PropsPage from "../props/PropsPage";
import sunrise from "../../assets/img/sunrise.jpg";
import SideBar from "../../components/sidebars/SideBar";
import { Pagination } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { IBoard } from "../../types/IBoard";
import UserService from "../../services/UserService";
import IUser from "../../types/IUser";

function UserBoardList() {
  let [board, setBoard] = useState<Array<IBoard>>([]);
  let [user, setUser] = useState<IUser>({
    userId: 0,
    name: "",
    email: "",
    password: "",
    descript: "",
    fileUrl : ""
  });
  let [searchTitle, setSearchTitle] = useState<string>("");
  let navigate = useNavigate();
  // TODO : 이미지를 자르기 위해 사용
  let [boardImg, setBoardImg] = useState<any>([]);
  // let boardImg = new Array();
  // TODO : 글 내용의 p 태그를 없애기 위해 사용합니다.
  let [boardText, setBoardText] = useState<any>([]);
  // let text = new Array();
  let [render, setRender] = useState<boolean>(false);

  // TODO : 공통 변수(필수) : page(현재 페이지), count(총 페이지 건수) , pageSize(3,6,9 배열 : 1페이지 당 건수)
  const [page, setPage] = useState<number>(1); // 현재 페이지 번호       : 최초값 1
  const [count, setCount] = useState<number>(1); // 총페이지 건수        : 최초값 1
  const [pageSize, setPageSize] = useState<number>(3); // 1페이지당 개수 : 최초값 3

  // TODO : Pagenation 수동 바인딩
  // TODO : 페이지 번호를 누르면 -> page 변수에 값 저장
  const handlePageChange = (event: any, value: number) => {
    // value == 화면의 페이지번호
    setPage(value);
  };

  // 함수 정의
  // TODO : 1) 컴포넌트가 mounted 될때 한번만 실행됨 : useEffect(() => {},[])
  // TODO : 2) 컴포넌트가의 변수값이 변할때 실행됨 : useEffect(() => {실행문},[감시변수])
  useEffect(() => {
    retieveBoard();
    reteiveUser();
  }, [page, pageSize]);

  // TODO : 게시판 불러오기
  const retieveBoard = () => {
    UserService.getAll(searchTitle, page - 1, pageSize)
      .then(async (response) => {
        console.log(response);
        setBoardImg("");  // 초기화
        setBoardText(""); // 초기화
        const { board, totalPages } = response.data;
        // dept 저장
        if(response.data != "") {
          setBoard(board);
          setCount(totalPages);
          board.map((value: any) => {
            sliceImg(value.content); // TODO : 나중에 배열로 바꾸긴 해야 합니다,
            sliceText(value.content); // TODO : 나중에 배열로 바꾸긴 해야되요.ㅋㅋㅋㅋㅋ
          });
        }
        setRender(true);
      })
      .catch((e) => {
        console.log(e);
        if (e.message == "Request failed with status code 403") {
          alert("권한이 없습니다. 로그인을 해주세요");
          navigate("/login");
        }
      });
  };

  // TODO : 유저도 불러와 줍시다.
  const reteiveUser = () => {
    UserService.findById(0)
      .then((response: any) => {
        setUser(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // TODO : 수동 바인딩
  const onChangeSearchTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  // TODO : 사진을 붙여넣어 봅시다!!
  const sliceImg = (content: any) => {
    let firstString = content.indexOf("<figure");
    let secondString = content.indexOf("</figure>");
    setBoardImg((boardImg: any) => [
      ...boardImg,
      content.substring(firstString, secondString),
    ]);
  };

  // TODO : 글도 잘라버립시당
  const sliceText = (content: any) => {
    let firstString = content.indexOf("<p>");
    let secondString = content.indexOf("</p>");
    let text = content.substring(firstString + 3, secondString);
    // TODO : 텍스트 넘치면 잘라버리자 ㅋㅋㅋ
    if (text == "<f") {
      text = "";
    }
    if (text.length > 50) {
      text = text.substr(0, 50);
    }
    setBoardText((boardText: any) => [...boardText, text]);
  };

  const searchButton = () => {
    retieveBoard();
    setPage(1);
  };


  if (!render) {
    return (
      <div className="overflow-hidden"> 
        <PropsPage img={sunrise} />
        {/* 메인 본문의 시작 */}
        <div className="mt-5">
        <SideBar img={user.fileUrl}/>
          <div className="w-75 float-end">
            <div className="pt-5 me-3 border rounded">
              {/* 메인 본문의 시작 */}
              <div className="w-75 mx-auto mt-5">
                <h1 className="border-start border-4 border-success border-opacity-75 text-start ps-3">
                  나의 블로그
                </h1>
                {/* 검색창  */}
                <form className="d-flex w-50 mx-auto mt-5 mb-5" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="button">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="overflow-hidden mb-5">
      <PropsPage img={sunrise} />
      <div className="mt-5">
        {/* 얘가 w-25 차지하고 있음 */}
        <SideBar img={user.fileUrl} name={user.name} descript={user.descript} userId={user.userId}/>
        <div className="w-75 float-end">
          <div className="pt-5 me-3 border rounded">
            {/* 메인 본문의 시작 */}
            <div className="w-75 mx-auto mt-5">
              <h1 className="border-start border-4 border-success border-opacity-75 text-start ps-3">
                나의 블로그
              </h1>
              {/* 검색창  */}
              <form className="d-flex w-50 mx-auto mt-5 mb-5" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  name="title"
                  onChange={onChangeSearchTitle}
                />
                <button
                  className="btn btn-outline-success"
                  type="button"
                  onClick={searchButton}
                >
                  Search
                </button>
              </form>

              {/* 테이블의 시작 */}
              <div>
                <div className="float-start mb-5">
                  <Link to="/user/add-board">
                    <button className="btn btn-outline-success">글쓰기</button>
                  </Link>
                </div>
                {/* 테이블의 시작 */}
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">이미지</th>
                      <th scope="col">글</th>
                      <th scope="col">views</th>
                      <th scope="col">수정</th>
                    </tr>
                  </thead>
                  <tbody>
                    {board &&
                      board.map((value, index) => (
                        <tr key={index}>
                          <th scope="row" className="w-25">
                            <Link to={`/board/${value.bid}`}>
                              {
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: boardImg[index],
                                  }}
                                  className="boardContent"
                                ></span>
                              }
                            </Link>
                          </th>
                          <td>
                            <Link
                              to={`/board/${value.bid}`}
                              className="text-decoration-none text-black"
                            >
                              <h3 className="text-start ms-5 mt-4">
                                {value.title}
                              </h3>
                              <h5 className="text-start ms-5 pt-4 p-3">
                                {boardText[index]}
                              </h5>
                            </Link>
                          </td>
                          <td className="align-middle">
                            <h4>{value.views}</h4>
                          </td>
                          <td>
                            {/* 수정 삭제 버튼 */}
                            <div className="mt-5 mx-auto">
                              <Link to={`/user/update-board/${value.bid}`}>
                                <button className="btn btn-primary mt-4">
                                  수정
                                </button>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {/* 테이블 끝 */}
              {/* 페이징 처리의 시작 */}
              <div className=" col-md-12 offset-4 mt-5" >
              {/* Pagination : Material UI (구글에서 제공하는 컴포넌트) 시작 */}
              {/* count : 총페이지 건수(개수) */}
              {/* page  : 현재페이지 번호 */}

              <Pagination
                className="my-3"
                count={count}
                page={page}
                siblingCount={1}
                boundaryCount={1}

                shape="rounded"
                color="secondary"
                onChange={handlePageChange}
              />

              {/* Pagination : Material UI (구글에서 제공하는 컴포넌트) 끝 */}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default UserBoardList;
