import React, { useState } from "react";
import PropsPage from "../props/PropsPage";
import nature from "../../assets/img/nature.jpg";
import '../../assets/css/AddBoard.css'

// TODO : CKEditor 라이브러리들
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { IBoard } from "../../types/IBoard";
import BoardService from "../../services/BoardService";
import { useNavigate } from "react-router-dom";

function AddBoard() {
  const initialBoard = {
    bid: null,
    title: "",
    content: "",
    views: 0,
    userId : null // 일단 저거 시큐리티 하고 나서 생각해 봅시다.
  };

  // TODO : 컨텐츠
  const [board, setBoard] = useState<IBoard>(initialBoard);
  let navigate = useNavigate();

  // TODO : 수동 바인딩 (content 는 CKEditor 로 받음)
  const InputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBoard({ ...board, [name]: value });
  };

  // TODO : 이미지 업로드 플러그인을 서버에 보냄 : 헤더에 넣어 보냄
  function MyCustomUploadAdapterPlugin(editor: any) {
    editor.plugins.get("FileRepository").createUploadAdapter = (
      loader: any
    ) => {
      return {
        upload: async () => {
          const file = await loader.file;
          const reader = new FileReader();
          const fileType: string = file.type;
          return new Promise((resolve, reject) => {
            reader.addEventListener("load", () => {
              resolve({ default: reader.result });
            });
            reader.addEventListener("error", reject);
            reader.readAsDataURL(file);
          });
        },
      };
    };
  }

  // TODO : 저장
  const save = () => {
    const formData = new FormData();
    formData.append("board", JSON.stringify(board));
    // if (fileList) {
    //   formData.append("file", fileList[0]);
    // }
    BoardService.create(formData)
      .then((response) => {
        navigate("/user/board");
      })
      .catch((error) => {
        const data: string = error.response.data;
        if (data.includes("could not execute statement"))
          alert("제목이 너무 길거나 형식이 맞지 않습니다.");
      });
  };

  return (
    <div className="overflow-hidden">
      <PropsPage img={nature} />
      <div className="mt-5 w-75 mx-auto">
        <div className="w-75 mx-auto">
          <div>
            <h1 className="border-start border-4 border-success border-opacity-75 text-start ps-3 mb-5">
              글쓰기
            </h1>
            {/* <!-- Button trigger modal --> */}
            <button
              type="button"
              className="btn btn-danger float-end mb-3"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              글쓰기 주의점
            </button>

            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="exampleModal"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      주의점 입니다!!
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    1. 이미지를 사용하고 다음 버튼을 눌러주세요 (안그러면 깨집니다.)
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="mt-5 mb-3 text-start border-start border-4 border-success border-opacity-75 ps-3">
            {" "}
            제목{" "}
          </h1>
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="제목을 적어주세요"
            aria-label=".form-control-lg example"
            name="title"
            onChange={InputHandler}
            value={board.title}
          />

          <h1 className="mt-5 mb-3 text-start border-start border-4 border-success border-opacity-75 ps-3">
            컨텐츠
          </h1>
          {/* TODO : 글쓰기 화면  : CKeditor*/}
          <div className="border" id="ediotr">
            <CKEditor
              config={{
                language: "ko",
                extraPlugins: [MyCustomUploadAdapterPlugin],
              }}
              editor={ClassicEditor}
              data="<p></p>"
              onReady={(editor) => {}}
              onChange={(event, editor: any) => {
                setBoard({ ...board, content: editor.getData() });
              }}
              onBlur={(event, editor) => {}}
              onFocus={(event, editor) => {}}
            />
          </div>
          <button className="btn btn-primary mt-5" onClick={save}>
            저장
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddBoard;
