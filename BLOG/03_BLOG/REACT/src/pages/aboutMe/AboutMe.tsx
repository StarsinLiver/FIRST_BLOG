import React from "react";
import cat from "../../assets/img/cat.jpg";
import PropsPage from "../props/PropsPage";
import aboutMe from "../../assets/img/aboutMe.jpg";

function AboutMe() {
  return (
    <div>
      {/* 표지 */}
      <div>
        <PropsPage img={cat} />
      </div>
      {/* 본문 */}
      <div className="mt-5 w-75 mx-auto">
        <div className="w-75 mx-auto">
          {/* 나에 대하여 */}
          <div>
            <h1 className="border-start border-4 border-success border-opacity-75 text-start ps-3 mb-5">
              나에 대하여
            </h1>
          </div>
          {/* 1페이지 */}
          <div>
            <div className="w-50 float-end mt-5 pe-5">
              <h1 className="text-start border-start border-4 border-success border-opacity-75  ps-3">주인장은 누구입니까?</h1>
              <p className="mt-3">
                현재 웹 프로그래머로 활동하기 위해 열심히 준비중인 취준생입니다.
                <br />
                부족한 점이 많을수는 있으나 아무쪼록 잘 부탁드립니다.
              </p>
              <h1 className="mt-5 ttext-start border-start border-4 border-success border-opacity-75  ps-3 text-start">취미는?</h1>
              <p className="mt-5">
                애니메이션 또는 영화를 좋아합니다. 제일 인상깊게 봤던 영화는 <br/>
                지브리 영화의 '붉은 돼지' 입니다.
              </p>
            </div>
            <div className="w-50 text-right ">
              <img
                src={aboutMe}
                alt="주인장 사진"
                className="w-50 rounded me-5"
              />
              <p className="mt-3 me-5">주인장의 사진</p>
            </div>
          </div>
          {/* 2페이지 */}
          {/* 기술들 */}
          <div className="mt-5">
            <h1 className="border-start border-4 border-success border-opacity-75 text-start ps-3 mb-5">
              기술들
            </h1>
            <div className="ms-5">
              <table>
                <tr>
                  <td>
                    <div className="border p-3 rounded border-4 me-5">
                    {" "}
                    <i
                      className="fa-brands fa-react fa-beat-fade fa-2xl"
                      style={{ color: "#2b72ee" }}
                    >
                      {" "}
                      REACT
                    </i>
                    </div>
                  </td>
                  <td>
                  <div className="border p-3 rounded border-4 me-5">
                  <i className="fa-brands fa-js fa-beat-fade fa-2xl" style={{color: '#ebee53'}}> JAVA SCRIPT</i>
                  </div>
                  </td>
                  <td>
                  <div className="border p-3 rounded border-4 me-5">
                  <i className="fa-brands fa-bootstrap fa-beat-fade fa-2xl" style={{color: '#f109e9'}}> BootStrap</i>
                  </div>
                  </td>
                </tr>
                <tr>
                <td>
                  <div className="border p-3 rounded border-4 me-5 mt-3">
                  <i className="fa-brands fa-beat-fade fa-2xl" style={{color: '#ee1111'}}><img width="48" height="48" src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" alt="java-coffee-cup-logo--v1"/>JAVA</i>
                  </div>
                  </td>
                  <td>
                  <div className="border p-3 rounded border-4 me-5 mt-3">
                  
                  <i className="fa-brands fa-beat-fade fa-2xl" style={{color: '#14bd55'}}><img width="48" height="48" src="https://img.icons8.com/color/48/spring-logo.png" alt="spring-logo"/> SPRING BOOT</i>
                  </div>
                  </td>
                  <td>
                  <div className="border p-3 rounded border-4 me-5 mt-3">
                  
                  <i className="fa-brands fa-beat-fade fa-2xl" style={{color: '#14bd55'}}><img width="50" height="50" src="https://img.icons8.com/bubbles/50/database.png" alt="database"/> ORACLE DB</i>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td>
                  <div className="border p-3 rounded border-4 me-5 mt-3">
                  <i className="fa-brands fa-beat-fade fa-2xl" style={{color: '#14bd55'}}><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/jsp.png" alt="jsp"/> JSP</i>
                  </div>
                  </td>
                  <td>
                  <div className="border p-3 rounded border-4 me-5 mt-3">
                  <i className="fa-brands fa-beat-fade fa-2xl" style={{color: '#14bd55'}}><img width="48" height="48" src="https://img.icons8.com/fluency/48/typescript--v2.png" alt="typescript--v2"/> TYPE SCRIPT</i>
                  </div>
                  </td>
                  <td>
                  <div className="border p-3 rounded border-4 me-5 mt-3">
                  <i className="fa-brands fa-beat-fade fa-2xl" style={{color: '#14bd55'}}><img width="48" height="48" src="https://img.icons8.com/badges/48/jquery.png" alt="jquery"/> JQuery</i>
                  </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
