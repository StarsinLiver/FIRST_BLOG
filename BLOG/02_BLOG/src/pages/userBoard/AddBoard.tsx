import React, { useState } from "react";
import PropsPage from "../props/PropsPage";
import nature from "../../assets/img/nature.jpg";
import axios from "axios";

// TODO : CKEditor 라이브러리들
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Editor } from "@ckeditor/ckeditor5-core";
import { UploadAdapter, FileLoader } from "@ckeditor/ckeditor5-upload/src/filerepository";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";


function AddBoard() {

  // TODO : 컨텐츠 
  const [content, setContent] = useState("");

  // TODO : 이미지 업로드 플러그인
  function uploadPlugin(editor : any) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader : any) => {
      return customUploadAdapter(loader);
    };
  }

  // TODO : 이미지 업로드 플러그인을 서버에 보냄
  const customUploadAdapter = (loader : any) => {
    return {
      upload() {
        return new Promise((resolve, reject) => {
          const formData = new FormData();
          loader.file.then((file : any) => {
            formData.append("file", file);
            axios
              .post("http://localhost:8888/api/upload/files", {
                header: {
                  "Content-type" : "multipart/form-data"
                }
              })
              .then((res) => {
                resolve({
                  default: res.data.uri,
                });
              })
              .catch((err) => reject(err));
          });
        });
      },
    };
  };

  // TODO : 저장
  const save = () => { 
    console.log("서버에 보낼 content" , content);
    axios.post("http://localhost:8888/api/upload" , content)
    .then((response : any) => {
      console.log(response.data);
    }).catch((e : Error) => {
      console.log(e);
    })
   }

  return (
    <div style={{ minWidth: "1800px" }}>
      <PropsPage img={nature} />
      <div className="mt-5 w-75 mx-auto">
        <div className="w-75 mx-auto">
          <h1 className="border-start border-4 border-success border-opacity-75 text-start ps-3">
            글쓰기
          </h1>
          {/* TODO : 글쓰기 화면 */}
          <div className="mt-5 border">
          <CKEditor
          editor={ClassicEditor}
          data=""
          config={{ extraPlugins: [uploadPlugin] }}
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            setContent(editor.getData());
            console.log("event" , { event });
            console.log("editor" , { editor });
            console.log("content" , { content });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
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
