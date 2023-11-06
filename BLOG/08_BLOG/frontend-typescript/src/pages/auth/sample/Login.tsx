import React, { useState } from "react";
import "../../../assets/css/sample/auth/login.css";
import UserService from "../../../services/UserService";
import { useNavigate } from "react-router-dom";

function Login() {
  let initialUser = {
    id : "",
    password : ""
  }

  let [user , setUser] = useState(initialUser);
  let navigate = useNavigate();
  const changing = (event : any) => { 
      let attrName = event.target.name;
      let attrValue = event.target.value;

      setUser({...user , [attrName] : attrValue});
      console.log(user);
   }

   const findByUser = () => {
      UserService.loginUser(user).then((response : any) => {
        let headers = response.headers.get("Authorization");
        headers = headers.substr(7);
        console.log(headers);
        localStorage.setItem("accessToken", headers);
        console.log("로그인 됬어요!")
        navigate("/user/board");
      }).catch((e : Error) => {
        console.log(e);
        alert("로그인 실패!")
      })
    }
  return (
    <div className="w-75 mx-auto mt-5">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card mt-5">
            <div className="card-body p-0">
              {/* <!-- Nested Row within Card Body --> */}
              <div className="row">
                <div className="col-lg-6 bg-login-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 mb-4">Welcome Back!</h1>
                    </div>
                    <form className="user">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-user mb-3"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                          name="email"
                          onChange={changing}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-user mb-3"
                          id="exampleInputPassword"
                          placeholder="Password"
                          name="password"
                          onChange={changing}
                        />
                      </div>

                      <button
                        className="btn btn-primary btn-user w-100 mb-3"
                        onClick={findByUser}
                      >
                        Login
                      </button>
                      <hr />
                      <a
                        href="/"
                        className="btn btn-google btn-user w-100 mb-2"
                      >
                        <i className="fab fa-google fa-fw"></i>&nbsp;Login with
                        Google
                      </a>
                      <a
                        href="/"
                        className="btn btn-naver btn-user w-100 mb-2"
                      >
                        <i className="fa-solid fa-n"></i>&nbsp;Login with Naver
                      </a>
                      <a
                        href="/"
                        className="btn btn-kakao btn-user w-100 mb-3"
                      >
                        <i className="fa-solid fa-k"></i>&nbsp;Login with Kakao
                      </a>
                    </form>
                    <hr />
                    <div className="text-center">
                      <a className="small" href="/forgot-password">
                        Forgot Password?
                      </a>
                    </div>
                    <div className="text-center">
                      <a className="small" href="/register">
                        Create an Account!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
