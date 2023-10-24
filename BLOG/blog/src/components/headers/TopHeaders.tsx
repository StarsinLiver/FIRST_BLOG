import React from "react";

function TopHeaders() {
  return (
    <div>
      <nav className="navbar bg-body" style={{minWidth:"1800px"}}>
        <div className="container-fluid">
          <a className="navbar-brand"><b>BLOG</b></a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default TopHeaders;
