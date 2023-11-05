import React, { useState } from "react";
import "../../../assets/css/sample/auth/login.css";
import UserService from "../../../services/UserService";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {

  let [email , setEmail] = useState<string>("");
  let navigate = useNavigate();

  const forgotPassword = () => { 
      UserService.forgotPassword(email)
      .then((response : any)=> {
        alert("회원님의 비밀번호 입니다. : " + response.data);
        console.log(response);
        navigate("/login");
      })
      .catch((e : Error) => {
        alert("이메일이 없습니다.")
      })
   }


  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => { 
    const {value} = event.target;
    setEmail(value);
   }

   const handleOnClick = () => { 
    forgotPassword();
    }

  return (
    <div className="mt-5 w-75 mx-auto">
      <div className="row justify-content-center w-75 mx-auto">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card mt-5">
            <div className="card-body p-0">
              {/* <!-- Nested Row within Card Body --> */}
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-password-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 mb-2">Forgot Your Password?</h1>
                      <p className="text-muted mb-4">
                        We get it, stuff happens. Just enter your email address
                        below and we'll send you a link to reset your password!
                      </p>
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
                          onChange={handleChange}
                        />
                      </div>
                      <button
                        className="btn btn-primary btn-user w-100 mb-3"
                        onClick={handleOnClick}
                      >
                        Get Password
                      </button>
                    </form>
                    <hr />
                    <div className="text-center">
                      <a href="/register">
                        Create an Account!
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
      </div>
    </div>
  );
}

export default ForgotPassword;
