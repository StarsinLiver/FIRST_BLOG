import React, { useState } from "react";
import QnaService from "../../services/QnaService";
import IQna from "../../types/IQna";

function AddQna() {
    // TODO  : 변수 정의
      // TODO : 객체 초기화
      const initialQna = {
        qno : null,
        question : "",
        answer : ""
      };
    
      // TODO : Qna 객체 
      const [qna, setQna] = useState<IQna>(initialQna);
      // TODO : 저장버튼 클릭 후 submitted = true 변경됨 
      const [submitted, setSubmitted] = useState<boolean>(false);
    
        // TODO : 함수 정의
          // TODO : 수동 바인딩
      const handleInputChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;   // 화면값
        setQna({ ...qna, [name]: value });    // 변수저장
        console.log(qna)
      };
    
      // TODO : 저장 함수
      const saveQna = () => {
        var data = {
          question : qna.question,
          answer : qna.answer
        };
        QnaService.save(data)
          .then((response: any) => {
            setSubmitted(true);
            console.log(response.data);
          })
          .catch((e: Error) => {
            console.log(e);
          });
      };
    
      // TODO : Add 버튼을 누르면 초기화 : 변수값 변경 -> 화면 자동 갱신(리액트 특징)
      const newQna = () => {
        setQna(initialQna);
        window.location.reload();
        setSubmitted(false);
      };

  return (
    <div>
            {submitted ? (
        <div className="col-6 mx-auto">
          <h4>You submitted successfully!</h4>
          <h4>버튼을 누르면 저장이 됩니다.</h4>
          <button className="btn btn-success" onClick={newQna}>
            Add
          </button>
        </div>
      ) : (
      <div className="mb-3">
        <h1 className="mb-3 border-start border-4 border-success border-opacity-75 text-start ps-3">
          질문
        </h1>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            name="question"
            onChange={handleInputChange}
          ></textarea>
          <label htmlFor="floatingTextarea2">Comments</label>
        </div>
        <button className="btn btn-outline-success mt-3" onClick={saveQna}>
          저장
        </button>
      </div>
      )}
    </div>
  );
}

export default AddQna;
