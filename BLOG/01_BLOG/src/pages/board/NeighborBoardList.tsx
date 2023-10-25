import React, { useEffect, useState } from "react";
import PropsPage from "../props/PropsPage";
import student from "../../assets/img/student.jpg";
import { Pagination } from "@mui/material";

function NeighborBoardList() {
  // TODO : 공통 변수(필수) : page(현재 페이지), count(총 페이지 건수) , pageSize(3,6,9 배열 : 1페이지 당 건수)
  const [page, setPage] = useState<number>(1); // 현재 페이지 번호       : 최초값 1
  const [count, setCount] = useState<number>(1); // 총페이지 건수        : 최초값 1
  const [pageSize, setPageSize] = useState<number>(3); // 1페이지당 개수 : 최초값 3
  const pageSizes = [3, 6, 9]; // selectBox 에 사용될 변수(선택)

  // 함수 정의
  // TODO : 1) 컴포넌트가 mounted 될때 한번만 실행됨 : useEffect(() => {},[])
  // TODO : 2) 컴포넌트가의 변수값이 변할때 실행됨 : useEffect(() => {실행문},[감시변수])
  useEffect(() => {
    // 전체 조회 함수 실행 나중에 넣어주자!!!
  }, [page, pageSize]);

  // TODO : Pagenation 수동 바인딩
  // TODO : 페이지 번호를 누르면 -> page 변수에 값 저장
  const handlePageChange = (event: any, value: number) => {
    // value == 화면의 페이지번호
    setPage(value);
  };
  return (
    <div style={{ minWidth: "1800px" }}>
      <PropsPage img={student} />
      <div className="mt-5">
        {/* 메인 본문의 시작 */}
        <div className="w-75 mx-auto mt-5">
          <div className="w-75 mx-auto">
            <h1 className="border-start border-4 border-success border-opacity-75 text-start ps-3">
              이웃의 블로그
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
            {/* 테이블의 시작 */}

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">이미지</th>
                  <th scope="col">제목,글</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="w-25">
                    <img src={student} className="w-100" />
                  </th>
                  <td>
                    <h2 className="text-start ms-5">제목</h2>
                    <h4 className="text-start ms-5 pt-3">
                      이곳은 글자를 적는 칸입니다.
                    </h4>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="w-25">
                    <img src={student} className="w-100" />
                  </th>
                  <td>
                    <h2 className="text-start ms-5">제목</h2>
                    <h4 className="text-start ms-5 pt-3">
                      이곳은 글자를 적는 칸입니다.
                    </h4>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mx-atuo mt-5">
              페이징 처리? 너 왜안와 시뎅 가운데로 와!!
              {/* Pagination : Material UI (구글에서 제공하는 컴포넌트) 시작 */}
              {/* count : 총페이지 건수(개수) */}
              {/* page  : 현재페이지 번호 */}
              <Pagination
                className="my-3"
                count={count}
                page={page}
                siblingCount={1}
                boundaryCount={1}
                variant="outlined"
                shape="rounded"
                onChange={handlePageChange}
              />
              {/* Pagination : Material UI (구글에서 제공하는 컴포넌트) 끝 */}
            </div>
          </div>
          {/* 테이블 끝 */}
          {/* 페이징 처리의 시작 */}
        </div>
      </div>
    </div>
  );
}

export default NeighborBoardList;
