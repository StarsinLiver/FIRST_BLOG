import React from "react";
import { Link } from "react-router-dom";

function TopHeaders() {
  return (
    <div>
<nav className="navbar bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand ms-5"><b>BLOG</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end"  id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><b>산하의 블로그</b></h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">로그인</Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">회원가입</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><Link to="#" className="dropdown-item">Action</Link></li>
              <li><Link to="#" className="dropdown-item">Another action</Link></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><Link to="#" className="dropdown-item">Something else here</Link></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
    </div>
  );
}

export default TopHeaders;
