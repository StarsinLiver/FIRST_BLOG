import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import IQna from '../../types/IQna';
import QnaService from '../../services/QnaService';

function Qna(props : any) {
        // TODO : 기본키 받기 , 강제 페이지 이동 함수
        const qno = props.qno;
        // let navigate = useNavigate();
      
        const initialQna = {
          qno : 0,
          question : "",
          answer : ""
        };
      
        // TODO : 객체 초기화 , 수정,삭제시 성공 메시지
        const [qna, setQna] = useState<IQna>(initialQna);
        const [message, setMessage] = useState<string>("");
      
         // TODO : 상세조회 요청
         const getQna = (qno: string) => {
          QnaService.get(qno)
            .then((response: any) => {
              setQna(response.data);
              console.log(response.data);
            })
            .catch((e: Error) => {
              console.log(e);
            });
        };
      
        // TODO : 화면이 뜰때 실행되는 이벤트 + qno 값이 바뀌면 실행
        useEffect(() => {
          if (qno) getQna(qno);
        }, [qno]);
      
        // TODO : 수동 바인딩
        const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          const { name, value } = event.target;
          setQna({ ...qna, [name]: value });
        };
      
        // TODO : 수정
        const updateQna = () => {
          QnaService.update(qna.qno, qna)
            .then((response: any) => {
              console.log(response.data);
              setMessage("The qna was updated successfully!");
            })
            .catch((e: Error) => {
              console.log(e);
            });
        };
      
        // TODO : 삭제
        const deleteQna = () => { 
          QnaService.remove(qna.qno)
          .then((response: any) => {
            console.log(response.data);
            setMessage("The qna was deleted successfully!");
            // 페이지 이동
            // navigate("/reply-board");
          })
          .catch((e: Error) => {
            console.log(e);
          });
        }
      // TODO : Add 버튼을 누르면 초기화 : 변수값 변경 -> 화면 자동 갱신(리액트 특징)
      const newQna = () => {
        window.location.reload();
      };
  return (
    <>
    {qna ? (
      <div className="col-6 mx-auto">
        <form>
          <div className="row g-3 align-items-center mb-3">
            <div className="col-3">
              <label htmlFor="boardTitle" className="col-form-label">
                boardTitle
              </label>
            </div>

            <div className="col-9">
              <input
                type="text"
                id="boardTitle"
                required
                className="form-control"
                value={qna.qno}
                onChange={handleInputChange}
                placeholder="qno"
                name="qno"
                disabled={true}
              />
            </div>
          </div>

          <div className="row g-3 align-items-center mb-3">
            <div className="col-3">
              <label htmlFor="question" className="col-form-label">
                Question
              </label>
            </div>

            <div className="col-9">
              <input
                type="text"
                id="question"
                required
                className="form-control"
                value={qna.question}
                onChange={handleInputChange}
                placeholder="question"
                name="question"
                disabled
              />
            </div>
          </div>

          <div className="row g-3 align-items-center mb-3">
            <div className="col-3">
              <label htmlFor="answer" className="col-form-label">
                Answer
              </label>
            </div>

            <div className="col-9">
              <input
                type="text"
                id="answer"
                required
                className="form-control"
                value={qna.answer}
                onChange={handleInputChange}
                placeholder="answer"
                name="answer"
              />
            </div>
          </div>
        </form>

        {/* boardParent "0" 아니면 답변글임 */}
        <div className="row g-3 mt-3 mb-3">
            <button
              className="btn btn-outline-primary ms-3 col"
              onClick={deleteQna}
            >
              Delete
            </button>


          <button
            type="submit"
            className="btn btn-outline-success ms-2 col"
            onClick={updateQna}
          >
            Update
          </button>
        </div>

        {message && (
          <>
          <div className="col-12 mx-auto">
          <p className="alert alert-success mt-3 text-center">{message}</p>
          <h5>버튼을 누르면 새로고침이 됩니다.</h5>
          <button className="btn btn-success" onClick={newQna}>
            새로고침
          </button>
        </div>
          </>
        )}
      </div>
    ) : (
      <div className="col-6 mx-auto">
        <br />
        <p>Please click on a Qna Board...</p>
      </div>
    )}
  </>
  )
}

export default Qna