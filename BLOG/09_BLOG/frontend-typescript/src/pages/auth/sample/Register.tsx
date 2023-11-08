import React, { useState } from "react";
import "../../../assets/css/sample/auth/login.css"
import IUser from "../../../types/IUser";
import UserService from "../../../services/UserService";
import { useNavigate } from "react-router-dom";

function Register() {

  let initialUser = {
    userId : null,
    name : "" ,
    email : "",
    password : "",
    descript : "",
    fileUrl : ""
  }

  let [user , setUser] = useState<IUser>(initialUser);
  let [repeatPassword , setRepeatPassword] = useState<string>("");
  const navigate = useNavigate();

  // TODO : 수동 바인딩
  const handleInput = (e : any) => { 
    const { name , value} = e.target;
    setUser({...user , [name] : value});
    console.log(user);
   }

  //  TODO : REPEAT PASSWORD 값
const handleInputRepeat = (e : any) => { 
  setRepeatPassword(e.target.value);
  console.log(repeatPassword);
 }

 const saveUser = () => { 
    if(user.password == repeatPassword) {
      UserService.save(user)
      .then((response : any) => {
        setUser(response.data)
        alert("회원가입 완료!!");
        navigate("/login");
      })
      .catch((e) => {
        console.log(e);
        alert("다른 이메일로 만들어 주세요")
      })
    } else {
      alert("비밀번호가 맞는지 확인해 주세요");
    }
  }


  return (
    <div className="pt-5 w-75 mx-auto  mb-5">
      <div className="card mt-5 w-75 mx-auto ">
        <div className="card-body p-0">
          {/* <!-- Nested Row within Card Body --> */}
          <div className="row">
            <div className="col-lg-5 bg-register-image"></div>
            <div className="col-lg-7">
              <div className="p-5">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <form className="user">
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
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-user mb-3"
                      id="exampleInputEmail"
                      placeholder="Email Address"
                      name="email"
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
                    <div className="col-sm-6">
                      <input
                        type="password"
                        className="form-control form-control-user mb-3"
                        id="exampleRepeatPassword"
                        placeholder="Repeat Password"
                        name="repeatPassword"
                        onChange={handleInputRepeat}
                      />
                    </div>
                  </div>
                  <button
                    className="btn btn-primary btn-user w-100 mb-3"
                    onClick={saveUser}
                  >
                    Register Account
                  </button>
                </form>
                <hr />
                <div className="text-center">
                  <a href="/forgot-password">
                    Forgot Password?
                  </a>
                </div>
                <div className="text-center">
                  <a href="/login">
                    Already have an account? Login!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
