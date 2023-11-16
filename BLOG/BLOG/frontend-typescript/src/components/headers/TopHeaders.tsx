import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TopHeaders(props: any) {
  let [isAccessToken, setIsAccessToken] = useState(false);

  // 토큰이 있으면 로그인창을 로그아웃으로 바꿈
  useEffect(() => {
    setIsAccessToken(props.isAccessToken);
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand ms-5">
            <b>BLOG</b>
          </Link>

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/board"
                  className="nav-link active"
                  aria-current="page"
                >
                  모두의 블로그{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/qna" className="nav-link active" aria-current="page">
                  Q & A
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about-me"
                  className="nav-link active"
                  aria-current="page"
                >
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/user/board"
                  className="nav-link active"
                  aria-current="page"
                >
                  나의 블로그
                </Link>
              </li>
            </ul>
            <span className="navbar-text me-3">tiny little life</span>
          </div>
        </div>
      </nav>

      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary  fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand ms-5">
            <b>BLOG</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
              <Link
                to="/board"
                className="nav-link active"
                aria-current="page"
              >
                모두의 블로그{" "}
              </Link>
              <Link to="/user/board" className="nav-link active" aria-current="page">
                나의 블로그
              </Link>
              <Link to="/about-me" className="nav-link active" aria-current="page">
                About Me
              </Link>
              <Link to="/qna" className="nav-link active" aria-current="page">
                Q & A
              </Link>
            </div>
          </div>
        </div>
      </nav> */}
    </div>
  );
}

export default TopHeaders;
