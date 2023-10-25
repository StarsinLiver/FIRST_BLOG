import React from "react";
import PropsPage from "../props/PropsPage";
import nature from "../../assets/img/nature.jpg";

function AddBoard() {
  return (
    <div style={{ minWidth: "1800px" }}>
      <PropsPage img={nature} />
      <div className="mt-5 w-75 mx-auto">
        <div className="w-75 mx-auto">
        <h1 className="border-start border-4 border-success border-opacity-75 text-start ps-3">
          글쓰기
        </h1>
        <div className="mt-5">

        </div>
        </div>
      </div>
    </div>
  );
}

export default AddBoard;
