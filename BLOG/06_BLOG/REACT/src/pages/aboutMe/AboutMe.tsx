import React, { useEffect } from "react";
import cat from "../../assets/img/cat.jpg";
import PropsPage from "../props/PropsPage";
import aboutMe from "../../assets/img/aboutMe.jpg";
import initMain from "../../assets/js/main";
import '../../assets/css/style.css'


function AboutMe() {
  useEffect(() => {
    initMain();
  }, []);
  return (
    <div>
      {/* 표지 */}
      <div>
        <PropsPage img={cat} />
      </div>
      {/* 본문 */}
      <div className="mt-5 mx-auto">
        <div className="mx-auto">
          <div
            data-bs-spy="scroll"
            data-bs-target=".navbar"
            data-bs-offset="51"
          >
            {/* <!-- Header Start --> */}
            <div className="container-fluid bg-light my-6 mt-0" id="home">
              <div className="container">
                <div className="row g-5 align-items-center">
                  <div className="col-lg-6 py-6 pb-0 pt-lg-0">
                    <h3 className="text-primary mb-3">I'm</h3>
                    <h1 className="display-3 mb-3">Lee SanHa</h1>
                    <h2 className="typed-text-output d-inline"></h2>
                    <div className="typed-text d-none">
                    Web Developer, Front End Developer, Back End Developer
                    </div>
                    <div className="d-flex align-items-center pt-5 ">
                      <button
                        type="button"
                        className="btn-play"
                        data-bs-toggle="modal"
                        data-src="https://www.youtube.com/embed/Ci52Iq_IQso?si=_SjejqE2vzcClmDQ"
                        data-bs-target="#videoModal"
                      >
                        <span></span>
                      </button>
                      <h5 className="ms-4 mb-0 d-none d-sm-block">
                        Play Video
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <img
                      className="img-fluid"
                      src={aboutMe}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Header End --> */}

      {/* <!-- Video Modal Start --> */}
      <div
        className="modal modal-video fade"
        id="videoModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">
                Youtube Video
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* <!-- 16:9 aspect ratio --> */}
              <div className="ratio ratio-16x9">
                <iframe
                  className="embed-responsive-item"
                  src=""
                  id="video"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Video Modal End --> */}

          {/* 나에 대하여 */}
          {/* <div>
            <h1 className="border-start border-4 border-success border-opacity-75 text-start ps-3 mb-5">
              나에 대하여
            </h1>
          </div> */}
          {/* 1페이지 */}
          {/* <div>
            <div className="w-50 float-end mt-5 pe-5">
              <h1 className="text-start border-start border-4 border-success border-opacity-75  ps-3">
                주인장은 누구입니까?
              </h1>
              <p className="mt-3">
                현재 웹 프로그래머로 활동하기 위해 열심히 준비중인 취준생입니다.
                <br />
                부족한 점이 많을수는 있으나 아무쪼록 잘 부탁드립니다.
              </p>
              <h1 className="mt-5 ttext-start border-start border-4 border-success border-opacity-75  ps-3 text-start">
                취미는?
              </h1>
              <p className="mt-5">
                애니메이션 또는 영화를 좋아합니다. 제일 인상깊게 봤던 영화는{" "}
                <br />
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
          </div> */}

          {/* 2페이지 */}
          {/* 기술들 */}
          <div className="mt-5  w-75 mx-auto">
            <h1 className="border-start border-4 border-success border-opacity-75 text-start ps-3 mb-5">
              기술들
            </h1>
            <div className="ms-5">
              <table className="table mx-auto">
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
                      <i
                        className="fa-brands fa-js fa-beat-fade fa-2xl"
                        style={{ color: "#ebee53" }}
                      >
                        {" "}
                        JAVA SCRIPT
                      </i>
                    </div>
                  </td>
                  <td>
                    <div className="border p-3 rounded border-4 me-5">
                      <i
                        className="fa-brands fa-bootstrap fa-beat-fade fa-2xl"
                        style={{ color: "#f109e9" }}
                      >
                        {" "}
                        BootStrap
                      </i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="border p-3 rounded border-4 me-5 mt-3">
                      <i
                        className="fa-brands fa-beat-fade fa-2xl"
                        style={{ color: "#ee1111" }}
                      >
                        <img
                          width="48"
                          height="48"
                          src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png"
                          alt="java-coffee-cup-logo--v1"
                        />
                        JAVA
                      </i>
                    </div>
                  </td>
                  <td>
                    <div className="border p-3 rounded border-4 me-5 mt-3">
                      <i
                        className="fa-brands fa-beat-fade fa-2xl"
                        style={{ color: "#14bd55" }}
                      >
                        <img
                          width="48"
                          height="48"
                          src="https://img.icons8.com/color/48/spring-logo.png"
                          alt="spring-logo"
                        />{" "}
                        SPRING BOOT
                      </i>
                    </div>
                  </td>
                  <td>
                    <div className="border p-3 rounded border-4 me-5 mt-3">
                      <i
                        className="fa-brands fa-beat-fade fa-2xl"
                        style={{ color: "#14bd55" }}
                      >
                        <img
                          width="50"
                          height="50"
                          src="https://img.icons8.com/bubbles/50/database.png"
                          alt="database"
                        />{" "}
                        ORACLE DB
                      </i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="border p-3 rounded border-4 me-5 mt-3">
                      <i
                        className="fa-brands fa-beat-fade fa-2xl"
                        style={{ color: "#14bd55" }}
                      >
                        <img
                          width="50"
                          height="50"
                          src="https://img.icons8.com/ios-filled/50/jsp.png"
                          alt="jsp"
                        />{" "}
                        JSP
                      </i>
                    </div>
                  </td>
                  <td>
                    <div className="border p-3 rounded border-4 me-5 mt-3">
                      <i
                        className="fa-brands fa-beat-fade fa-2xl"
                        style={{ color: "#14bd55" }}
                      >
                        <img
                          width="48"
                          height="48"
                          src="https://img.icons8.com/fluency/48/typescript--v2.png"
                          alt="typescript--v2"
                        />{" "}
                        TYPE SCRIPT
                      </i>
                    </div>
                  </td>
                  <td>
                    <div className="border p-3 rounded border-4 me-5 mt-3">
                      <i
                        className="fa-brands fa-beat-fade fa-2xl"
                        style={{ color: "#14bd55" }}
                      >
                        <img
                          width="48"
                          height="48"
                          src="https://img.icons8.com/badges/48/jquery.png"
                          alt="jquery"
                        />{" "}
                        JQuery
                      </i>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>

          {/* 프로젝트 */}
          {/* <!-- Projects Start --> */}
          <div className="container-xxl py-6 pt-5" id="project">
            <div className="container">
              <div
                className="row g-5 mb-5 align-items-center wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="col-lg-6">
                  <h1 className="display-5 mb-0">My Projects</h1>
                </div>
                <div className="col-lg-6 text-lg-end">
                  <ul className="list-inline mx-n3 mb-0" id="portfolio-flters">
                    <li
                      className="mx-3 active btn btn-outline-success"
                      data-filter="*"
                    >
                      All Projects
                    </li>
                    <li
                      className="mx-3  btn btn-outline-success"
                      data-filter=".first"
                    >
                      UI/UX Design
                    </li>
                    <li
                      className="mx-3  btn btn-outline-success"
                      data-filter=".second"
                    >
                      Graphic Design
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="row g-4 portfolio-container wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="col-lg-4 col-md-6 portfolio-item first">
                  <div className="portfolio-img rounded overflow-hidden">
                    <img className="img-fluid" src="img/project-1.jpg" alt="" />
                    <div className="portfolio-btn">
                      <a
                        className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                        href="img/project-1.jpg"
                        data-lightbox="portfolio"
                      >
                        <i className="fa fa-eye"></i>
                      </a>
                      <a
                        className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                        href=""
                      >
                        <i className="fa fa-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item second">
                  <div className="portfolio-img rounded overflow-hidden">
                    <img className="img-fluid" src="img/project-2.jpg" alt="" />
                    <div className="portfolio-btn">
                      <a
                        className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                        href="img/project-2.jpg"
                        data-lightbox="portfolio"
                      >
                        <i className="fa fa-eye"></i>
                      </a>
                      <a
                        className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                        href=""
                      >
                        <i className="fa fa-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item first">
                  <div className="portfolio-img rounded overflow-hidden">
                    <img className="img-fluid" src="img/project-3.jpg" alt="" />
                    <div className="portfolio-btn">
                      <a
                        className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                        href="img/project-3.jpg"
                        data-lightbox="portfolio"
                      >
                        <i className="fa fa-eye"></i>
                      </a>
                      <a
                        className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                        href=""
                      >
                        <i className="fa fa-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item second">
                  <div className="portfolio-img rounded overflow-hidden">
                    <img className="img-fluid" src="img/project-4.jpg" alt="" />
                    <div className="portfolio-btn">
                      <a
                        className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                        href="img/project-4.jpg"
                        data-lightbox="portfolio"
                      >
                        <i className="fa fa-eye"></i>
                      </a>
                      <a
                        className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                        href=""
                      >
                        <i className="fa fa-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item first">
                  <div className="portfolio-img rounded overflow-hidden">
                    <img className="img-fluid" src="img/project-5.jpg" alt="" />
                    <div className="portfolio-btn">
                      <a
                        className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                        href="img/project-5.jpg"
                        data-lightbox="portfolio"
                      >
                        <i className="fa fa-eye"></i>
                      </a>
                      <a
                        className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                        href=""
                      >
                        <i className="fa fa-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item second">
                  <div className="portfolio-img rounded overflow-hidden">
                    <img className="img-fluid" src="img/project-6.jpg" alt="" />
                    <div className="portfolio-btn">
                      <a
                        className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                        href="img/project-6.jpg"
                        data-lightbox="portfolio"
                      >
                        <i className="fa fa-eye"></i>
                      </a>
                      <a
                        className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                        href=""
                      >
                        <i className="fa fa-link"></i>
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

export default AboutMe;