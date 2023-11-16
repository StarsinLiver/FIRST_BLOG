
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { IBoard } from '../../types/IBoard';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import PropsPage from '../props/PropsPage';
import BoardService from '../../services/BoardService';
import nature from '../../assets/img/nature.jpg'

function UpdateBoard() {

  let { bid } = useParams();
  const [render, setRender] = useState<boolean>(false);

  const initialBoard = {
    bid: null,
    title: "",
    content: "",
    views: 0,
    userId: null, // 일단 저거 시큐리티 하고 나서 생각해 봅시다.
  };

  // TODO : 컨텐츠
  const [board, setBoard] = useState<IBoard>(initialBoard);
  let navigate = useNavigate();

  useEffect(() => {
    if(bid)
    findById();
  },[bid])

  // TODO : 뭐 어쩔땐 들어오고 어쩔땐 안되면 어쩌라고 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
  const findById = () => {
     BoardService.get(bid)
      .then( async (response) => {
        console.log("서버에서 받은 데이터 ", response.data);
       let copy = await response.data;
          setBoard(copy);
        console.log("board의 데이터는?? : " , board)
        setRender(true);
      })
      
      .catch((e) => {
        console.log(e);
      });
  };


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
          // const fileType: string = file.type;
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

  // TODO : 수정합시다!!
  const update = () => {
    const formData = new FormData();
    formData.append("board", JSON.stringify(board));
    BoardService.update(bid,formData)
      .then((response) => {

        navigate("/user/board");
      })
      .catch((error) => {
        if(error.message == "Request failed with status code 403" ) {
          alert("권한이 없습니다.")
          navigate("/login")
        }
        const data: string = error.response.data;
        if (data.includes("could not execute statement"))
          alert("제목이 너무 길거나 형식이 맞지 않습니다.");
      });
  };

  // TODO : 삭제 버튼입니다.
  const deleteButton = () => { 
    BoardService.remove(bid)
    .then((response) => {
      navigate("/user/board");
    })
    .catch((e) => {
      console.log(e);
    })
   }

   if(!render) {
    return <div></div>
   }
  return (
    <div className="overflow-hidden mb-5">
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
                    1. 이미지는 WIDTH : 1200PX 이하로 해주세요
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
              data={board.content}
              onReady={(editor) => {}}
              onChange={(event, editor: any) => {
                setBoard({ ...board, content: editor.getData() });
                console.log(board);
              }}
              onBlur={(event, editor) => {}}
              onFocus={(event, editor) => {}}
            />
          </div>
          <div className='float-end'>
          <button className="btn btn-primary mt-5 me-3" onClick={update}>
            저장
          </button>
          <button className="btn btn-primary mt-5" onClick={deleteButton}>
            삭제
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateBoard