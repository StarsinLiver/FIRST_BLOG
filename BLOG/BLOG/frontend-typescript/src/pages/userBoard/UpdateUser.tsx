import React, { useEffect, useState } from "react";
import sunrise from "../../assets/img/sunrise.jpg";
import PropsPage from "../props/PropsPage";
import SideBar from "../../components/sidebars/SideBar";
import IUser from "../../types/IUser";
import { useNavigate, useParams } from "react-router-dom";
import UserService from "../../services/UserService";
import initChooseFile from "../../assets/js/updateUser";
import FileService from "../../services/FileService";
function UpdateUser() {
  let initialUser: IUser = {
    userId: null,
    name: "",
    email: "",
    password: "",
    descript: "",
    fileUrl: "",
  };

  let { userId } = useParams();
  let [user, setUser] = useState<IUser>(initialUser);
  // TODO : 임시로 저장할 file
  let [file, setFile] = useState<File | any | null>(null);
  let [url, setUrl] = useState<any | string>("");
  let [repeatPassword, setRepeatPassword] = useState<string>("");
  let [render, setRender] = useState<boolean>(false);
  let navigate = useNavigate();

  useEffect(() => {
    initChooseFile();
    if(userId) reteiveUser();

  }, [userId]);

  const reteiveUser = () => {
    UserService.findById(userId)
      .then((response: any) => {
        setUser(response.data);
        console.log(response.data);
        setRender(true);
      })
      .catch((e) => {
        console.log(e);
        if (e.message == "Request failed with status code 403") {
          alert("권한이 없거나 회원이 삭제되었습니다.");
          localStorage.removeItem("accessToken");
          navigate("/login");
        }
      });
  };

  // TODO : 수동 바인딩
  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  // TODO : file 수동 바인딩
  const handleFile = (event: any) => {
    setFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  //  TODO : REPEAT PASSWORD 값
  const handleInputRepeat = (e: any) => {
    setRepeatPassword(e.target.value);
    console.log(repeatPassword);
  };

  const updateFile = () => {
    const formData = new FormData();
    formData.append("file", file);
    FileService.fileUpload(formData)
      .then((response: any) => {
        setUrl(response.data);
        console.log("response.data" , response.data);
        console.log("url", url);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const updateUser = () => {
    const data = {
      userId: user.userId,
      name: user.name,
      email: user.email,
      password: user.password,
      descript: user.descript,
      fileUrl: url,
    };
    if (user.password == repeatPassword) {
      UserService.update(data)
        .then((response: any) => {
          console.log(response);
          alert("회원 정보 수정완료!!");
          navigate("/user/board")
        })
        .catch((e: Error) => {
          console.log(e);
        });
    } else {
      alert("비밀번호가 맞는지 확인해 주세요");
    }
  };

  const deleteUser = () => {
    UserService.remove(userId)
      .then((response: any) => {
        localStorage.removeItem("accessToken");
        alert("회원 정보 삭제 완료!!");
        navigate('/')
      })
      .catch((e: Error) => {
        console.log(e);
        alert("회원 정보 삭제시 문제가 발생했습니다.");
      });
  };

  if (!render) {
    <div>
      <PropsPage img={sunrise} />
    </div>;
  }
  return (
    <div className="overflow-hidden  mb-5">
      <PropsPage img={sunrise} />
      {/* 메인 본문의 시작 */}
      <div className="mt-5">
        {/* 얘가 w-25 차지하고 있음 */}
        <SideBar
          img={user.fileUrl}
          name={user.name}
          descript={user.descript}
          userId={user.userId}
        />
        <div className="w-75 float-end">
          <div className="pt-5 me-3 border rounded">
            {/* 메인 본문의 시작 */}
            <div className="w-75 mx-auto mt-5">
              <h1 className="border-start border-4 border-success border-opacity-75 text-start ps-3">
                회원 정보 수정
              </h1>
              <div className="user w-75 mx-auto mt-5">
                {/* 파일 업로드 */}
                <div className="file-upload mb-3">
                  <div className="file-select ">
                    <div className="file-select-button" id="fileName">
                      Choose File
                    </div>
                    <div className="file-select-name" id="noFile">
                      No file chosen...
                    </div>
                    {/* 파일 input type="file" */}
                    <input
                      type="file"
                      name="chooseFile"
                      id="chooseFile"
                      
                      onChange={handleFile}
                    />
                  </div>
                  <button
                    className="btn btn-primary col-md-2 offset-10 mt-2"
                    onClick={updateFile}
                  >
                    파일 올리기
                  </button>
                </div>
                {/* 이름 */}
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-user mb-3"
                    id="exampleName"
                    placeholder="Full Name"
                    name="name"
                    value={user.name}
                    onChange={handleInput}
                  />
                </div>
                {/* 패스워드 */}
                <div className="form-group row">
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <input
                      type="password"
                      className="form-control form-control-user mb-3"
                      id="exampleInputPassword"
                      placeholder="Password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  {/* 패스워드 한번더 치기 */}
                  <div className="col-sm-6 ">
                    <input
                      type="password"
                      className="form-control form-control-user mb-3"
                      id="exampleRepeatPassword"
                      placeholder="Repeat Password"
                      name="repeatPassword"
                      onChange={handleInputRepeat}
                    />
                  </div>
                  {/* 설명글 */}
                  <div className="form-group">
                    <input
                      type="descript"
                      className="form-control form-control-user mb-3"
                      id="exampleInputDescript"
                      placeholder="Descript"
                      name="descript"
                      value={user.descript}
                      onChange={handleInput}
                    />
                  </div>
                </div>
                {/* update button */}
                <div className="mb-3 overflow-hidden">
                  <button
                    className="btn btn-primary btn-user col-md-6 float-start"
                    onClick={updateUser}
                  >
                    UPDATE USER
                  </button>
                  {/* delete button */}
                  <button
                    className="btn btn-danger btn-user col-md-6 float-end"
                    onClick={deleteUser}
                  >
                    DELETE USER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;
