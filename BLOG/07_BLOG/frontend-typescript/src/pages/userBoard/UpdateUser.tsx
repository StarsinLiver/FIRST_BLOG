import React, { useEffect, useState } from "react";
import sunrise from "../../assets/img/sunrise.jpg";
import PropsPage from "../props/PropsPage";
import SideBar from "../../components/sidebars/SideBar";
import IUser from "../../types/IUser";
import { useNavigate, useParams } from "react-router-dom";
import UserService from "../../services/UserService";
function UpdateUser() {
  let initialUser: IUser = {
    userId: null,
    name: "",
    email: "",
    password: "",
    descript: "",
  };

  let { userId } = useParams();
  let [user, setUser] = useState<IUser>(initialUser);
  let [repeatPassword, setRepeatPassword] = useState<string>("");
  let [render, setRender] = useState<boolean>(false);
  let navigate = useNavigate();

  useEffect(() => {
    reteiveUser();
  }, []);

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

  //  TODO : REPEAT PASSWORD 값
  const handleInputRepeat = (e: any) => {
    setRepeatPassword(e.target.value);
    console.log(repeatPassword);
  };

  const updateUser = () => {
    if (user.password == repeatPassword) {
      UserService.update(user)
        .then((response : any) => {
          console.log(response);
          alert("회원 정보 수정완료!!");
        })
        .catch((e : Error) => {
          console.log(e);
        });
    } else {
      alert("비밀번호가 맞는지 확인해 주세요");
    }
  };

  const deleteUser = () => {
    UserService.remove(userId)
      .then((response : any) => {
        localStorage.removeItem("accessToken");
        alert("회원 정보 삭제 완료!!");
      })
      .catch((e : Error) => {
        console.log(e);
        alert("회원 정보 삭제시 문제가 발생했습니다.")
      });
  };

  if (!render) {
    <div>
      <PropsPage img={sunrise} />
    </div>;
  }
  return (
    <div className="overflow-hidden">
      <PropsPage img={sunrise} />
      {/* 메인 본문의 시작 */}
      <div className="mt-5">
        {/* 얘가 w-25 차지하고 있음 */}
        <SideBar
          img={sunrise}
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
              <form className="user w-75 mx-auto mt-5">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-user mb-3"
                    id="exampleName"
                    placeholder="Full Name"
                    name="name"
                    onChange={handleInput}
                  />
                </div>
                <div className="form-group row">
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <input
                      type="password"
                      className="form-control form-control-user mb-3"
                      id="exampleInputPassword"
                      placeholder="Password"
                      name="password"
                      onChange={handleInput}
                    />
                  </div>
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
                  <div className="form-group">
                    <input
                      type="descript"
                      className="form-control form-control-user mb-3"
                      id="exampleInputDescript"
                      placeholder="Descript"
                      name="descript"
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <button
                    className="btn btn-primary btn-user w-50"
                    onClick={updateUser}
                  >
                    UPDATE USER
                  </button>
                  <button
                    className="btn btn-danger btn-user w-50"
                    onClick={deleteUser}
                  >
                    DELETE USER
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;
