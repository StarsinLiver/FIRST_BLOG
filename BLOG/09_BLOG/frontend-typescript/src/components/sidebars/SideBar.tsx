import React from "react";

function SideBar(props: any) {
  return (
    <div className="w-25 ps-5 float-start overflow-hidden">
      <div className="card" style={{ width: "18em" }}>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title border-bottom p-3">{props.name}</h5>
          <p className="card-text mt-3">{props.descript}</p>
          <a href={`/user/${props.userId}`} className="btn btn-primary">
            회원정보 수정
          </a>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
