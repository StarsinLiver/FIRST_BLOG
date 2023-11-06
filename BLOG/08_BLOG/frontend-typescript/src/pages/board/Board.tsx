import React, { useEffect, useState } from "react";
import PropsPage from "../props/PropsPage";
import img from "../../assets/img/offices.jpg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IBoard } from "../../types/IBoard";
import BoardService from "../../services/BoardService";

function Board() {
  let { bid } = useParams();
  let navigate = useNavigate();

  let [board, setBoard] = useState<IBoard>({
    bid: null,
    title: "",
    content: "",
    views: 0,
    userId: 0,
  });

  const findById = () => {
    BoardService.get(bid)
      .then((response) => {
        setBoard(response.data);
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  //  TODO : 바로 가져와주죠
  useEffect(() => {
    findById();
  }, []);

  // TODO : 삭제 버튼입니다.
  // const deleteButton = () => {
  //   BoardService.remove(bid)
  //     .then((response) => {
  //       navigate("/user/board");
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       if(e.message == "Request failed with status code 403") {
  //         alert("권한이 없습니다.");
  //       }
  //     });
  // };

  return (
    <div>
      <PropsPage img={img} />
      <div className="mt-5 w-75 mx-auto ">
        <h1 className="border-start border-4 border-success border-opacity-75 text-start ps-3 mb-5">
          제목 : {board.title}
        </h1>
        <h1 className="border-start border-4 border-success border-opacity-75 text-start ps-3 mb-5">
          내용
        </h1>
        <div className="border">
          {
            <span
              dangerouslySetInnerHTML={{ __html: board.content }}
              className="boardContent"
            ></span>
          }
        </div>
        <div>
          {/* 수정 삭제 버튼 */}
          {/* <div className="mt-5 float-end"> */}
            {/* <Link to={`/user/update-board/${board.bid}`}> */}
              {/* <button className="btn btn-primary me-3">수정</button> */}
            {/* </Link> */}
            {/* <button className="btn btn-primary" onClick={deleteButton}> */}
              {/* {" "} */}
              {/* 삭제{" "} */}
            {/* </button> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Board;
