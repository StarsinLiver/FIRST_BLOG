import React from "react";

function SideBar(props: any) {
  return (
    <div className="w-25 ps-5 float-start">
      <div className="card" style={{ width: "18em" }}>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title border-bottom p-3">유저 이름</h5>
          <p className="card-text mt-3">뭐.. 유저의 설명칸이나 적을까</p>
          <a href="#" className="btn btn-primary">
            회원 정보 수정 나중에 아이콘으로 바꾸기
          </a>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
