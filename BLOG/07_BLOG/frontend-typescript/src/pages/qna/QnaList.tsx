import React, { useEffect, useState } from "react";
import PropsPage from "../props/PropsPage";
import student from "../../assets/img/student.jpg";
import IQna from "../../types/IQna";
import { Pagination } from "@mui/material";
import QnaService from "../../services/QnaService";
import { Link } from "react-router-dom";
import AddQna from "./AddQna";
import Qna from "./Qna";

function QnaList() {
  // TODO : QNA 와 검색창
  let [qna, setQna] = useState<Array<IQna>>([]);
  let [searchQuestion, setSearchQuestion] = useState<string>("");
  let [writed, setWrited] = useState<boolean>(false);
  let [edited, setEdited] = useState<boolean>(false);
  let [propsQno, setPropsQna] = useState<number>(0);
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

  // TODO : 수동 바인딩
  const onChangeSearchQuestion = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuestion = e.target.value;
    setSearchQuestion(searchQuestion);
    console.log(searchQuestion);
  };

  // TODO : 검색창
  const searchButton = () => {
    retieveQna();
    setPage(1);
  };

  // 함수 정의
  // TODO : 1) 컴포넌트가 mounted 될때 한번만 실행됨 : useEffect(() => {},[])
  // TODO : 2) 컴포넌트가의 변수값이 변할때 실행됨 : useEffect(() => {실행문},[감시변수])
  useEffect(() => {
    retieveQna();
  }, [page, pageSize]);

  const retieveQna = () => {
    QnaService.getAll(searchQuestion, page - 1, pageSize)
      .then((response: any) => {
        const { qna, totalPages } = response.data;
        setQna(qna);
        setCount(totalPages);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const writeQna = () => {
    setWrited(true);
    setEdited(false);
  };

  const editQna = (qno : number) => {
    setEdited(true);
    setWrited(false);
    setPropsQna(qno);
  };

  return (
    <div>
      <PropsPage img={student} />
      <div className="mt-5">
        {/* 메인 본문의 시작 */}
        <div className="w-75 mx-auto mt-5">
          <div className="w-75 mx-auto">
            <h1 className="border-start border-4 border-success border-opacity-75 text-start ps-3">
              Q & A
            </h1>
            {/* 검색창  */}
            <form className="d-flex w-50 mx-auto mt-5 mb-5" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="제목을 입력해주세요"
                aria-label="Search"
                name="question"
                onChange={onChangeSearchQuestion}
              />
              <button
                className="btn btn-outline-success"
                type="button"
                onClick={searchButton}
              >
                Search
              </button>
            </form>
            <div className="float-start mb-5">
              <button className="btn btn-outline-success" onClick={writeQna}>
                질문쓰기
              </button>
            </div>

            {/* qna 본문 시작*/}

            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              {/* 아코디언 시작 */}
              {qna.map((value, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={"#flush-collapse" + index}
                      aria-expanded="false"
                      aria-controls={`flush-collapse` + index}
                    >
                      {value.question}
                    </button>
                  </h2>
                  <div
                    id={"flush-collapse" + index}
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      {value.answer}
                      <button
                        className="btn btn-sm btn-outline-success ms-3"
                        onClick={() => editQna(value.qno)}
                      >
                        edit
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {/* 아코디언 끝 */}
            </div>
            {/* qna 본문 끝 */}
            {/* 페이징 처리 */}
            <div className="mt-5 col-md-4 offset-5">
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
            {writed ? (
              <div className="mt-5 mx-auto w-100">
                <AddQna />
              </div>
            ) : (
              <></>
            )}
            {edited ? (
              <div className="mt-5 mx-auto w-100">
                <Qna qno={propsQno}/>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QnaList;
