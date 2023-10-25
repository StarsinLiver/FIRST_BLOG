import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import TitleCom from "../../../components/common/TitleCom";
import FaqService from "../../../services/normal/FaqService";
import IFaq from "../../../types/normal/IFaq";
import { Link } from "react-router-dom";

function FaqList() {
  // 변수 정의
  const [faq, setFaq] = useState<Array<IFaq>>([]); // 부서 배열
  const [searchTitle, setSearchTitle] = useState<string>(""); // 검색어 변수

  // TODO : 공통 변수(필수) : page(현재 페이지), count(총 페이지 건수) , pageSize(3,6,9 배열 : 1페이지 당 건수)
  const [page, setPage] = useState<number>(1); // 현재 페이지 번호       : 최초값 1
  const [count, setCount] = useState<number>(1); // 총페이지 건수        : 최초값 1
  const [pageSize, setPageSize] = useState<number>(3); // 1페이지당 개수 : 최초값 3
  const pageSizes = [3, 6, 9]; // selectBox 에 사용될 변수(선택)

  // 함수 정의
  // TODO : 1) 컴포넌트가 mounted 될때 한번만 실행됨 : useEffect(() => {},[])
  // TODO : 2) 컴포넌트가의 변수값이 변할때 실행됨 : useEffect(() => {실행문},[감시변수])
  useEffect(() => {
    retrieveFaq(); // 전체 조회 함수 실행
  }, [page, pageSize]);

  //   TODO : 전체 조회 함수
  const retrieveFaq = () => {
    // 백엔드 매개변수 전송 : 검색어 LIKE 조회 + 현재페이지(page) , 1페이지당 개수(pageSize)
    FaqService.getAll(searchTitle, page - 1, pageSize)
      .then((response: any) => {
        // 백엔드 성공시 실행됨
        // es6(모던js) 문법 : 객체 분해 할당
        // const faq = response.data.faq;             // 부서 배열
        // const totalPages = response.data.totalPages; // 전체페이지수
        const { faq, totalPages } = response.data;
        // faq 저장
        setFaq(faq);
        setCount(totalPages);
        // 로그 출력
        console.log("response", response);
      })
      .catch((e: Error) => {
        // 백엔드 실패시 실행됨
        console.log(e);
      });
  };

  // TODO : Like 검색 창
  const onChangeSearchTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(e.target.value);
  };

  // TODO : pageSize 값 변경시 실행되는 함수 (select box)
  // TODO : SELECT BOX 태그 수동 바인딩 : 화면값 -> 변수에 저장
  const handlePageSizeChange = (event: any) => {
    setPageSize(event.target.value); // 1페이지당 개수 저장(3,6,9)
    setPage(1); // 현재 페이지번호 : 1로 강제 설정 (선택사항)
  };

  // TODO : Pagenation 수동 바인딩
  // TODO : 페이지 번호를 누르면 -> page 변수에 값 저장
  const handlePageChange = (event: any, value: number) => {
    // value == 화면의 페이지번호
    setPage(value);
  };

  return (
    <div>
      {/* 제목 start */}
      <TitleCom title="Faq List" />
      {/* 제목 end */}

      {/* search start */}
      <div className="row mb-5 justify-content-center">
        <div className="col-12 w-50 input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={retrieveFaq}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {/* search end */}

      {/* page start */}
      <div className="mt-3">
        {"Items per Page: "}
        <select onChange={handlePageSizeChange} value={pageSize}>
          {pageSizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>

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
      </div>
      {/* page end */}

      {/* accodian start (반복문) */}
      <div className="col-md-12">
        <div className="accordion" id="accordionExample">
          {/* 1st 아코디언 시작 */}
          {/* 반복문 : faq.map((data , index)=> (아코디언 태그)) */}
          {faq &&
            faq.map((data, index) => (
              <div className="accordion-item" key={index}>
                {/* 사용법 : 1) h2(제목)  : id="headingOne" */}
                {/*          1) div(본문) : aria-labelleby="headingOne" */}
                {/* 사용법 : 2) h2(제목)  :  data-bs-target="#collapseOne" */}
                {/*          2) div(본문) : id="collapseOne" */}
                {/* 사용법 : (h2[제목]) 화면 보이기/안보이기 css(class) */}
                {/*                         펼치기 : className="accordion-button" */}
                {/*                         접기   : className="accordion-button collapsed" */}
                {/*          (div[본문]) */}
                {/*                         펼치기 : className="accordion-collapse collapse show" */}
                {/*                         접기 : className="accordion-collapse collapse" */}
                {/* 아코디언 제목 */}
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    // 인덱스가 0이면 펼치기 아니면 접기
                    className={
                      index === 0
                        ? "accordion-button"
                        : "accordion-button collapsed"
                    }
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#collapse" + index} // 2) 얘랑 (본문부분 id랑) 연결되어있음
                    aria-expanded="true"
                    aria-controls={"collapse" + index}
                  >
                    {data.title}
                  </button>
                </h2>
                {/* 아코디언 본문 */}
                <div
                  id={"collapse" + index} // 2) (제목무분 data-bs-target) 얘랑 연결 되어있음
                  // 인덱스가 0이면 펼치기 아니면 접기
                  className={
                    index === 0
                      ? "accordion-collapse collapse show"
                      : "accordion-collapse collapse"
                  }
                  data-bs-parent="#accordionExample"
                  aria-labelledby={"headingOne" + index}
                >
                  <div className="accordion-body">
                    {data.content} &nbsp;
                    <Link to={"/faq/" + data.no}>
                      <span className="badge bg-success">Edit</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* accodian end */}
    </div>
  );
}

export default FaqList;
