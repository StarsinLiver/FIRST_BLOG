import React, { useEffect } from "react";
import cat from "../../assets/img/cat.jpg";
import PropsPage from "../props/PropsPage";
import aboutMe from "../../assets/img/aboutMe.jpg";
import initMain from "../../assets/js/main";
// import "../../assets/css/style.css";

function AboutMe() {
  useEffect(() => {
    initMain();
  }, []);

  return (
    <div className="overflow-hidden  mb-5">
      {/* 표지 */}
      <div>
        <PropsPage img={cat} />
      </div>
      {/* 본문 */}
      <div className="mt-5 mx-auto">
        <div className="mx-auto">
          <div
            // data-bs-spy="scroll"
            // data-bs-target=".navbar"
            // data-bs-offset="51"
          >
            {/* <!-- Header Start --> */}
            <div className="container-fluid bg-light my-6 mt-0 wow fadeInUp" id="home">
              <div className="container ">
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
                        data-src="https://www.youtube.com/embed/zuAEafEsdwU"
                        data-bs-target="#videoModal"
                      >
                        <span></span>
                      </button>
                      <h5 className="ms-4 mb-0 d-none d-sm-block">
                        My Favorite Song
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <img className="img-fluid" src={aboutMe} alt="" />
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

          {/* 기술들 */}
          <div className="mt-5  w-75 mx-auto">
            <div className="ms-5">
              {/* <!-- Expertise Start --> */}
              <div className="container-xxl py-6 pb-5" id="skill">
                <div className="container">
                  <div className="row g-5">
                    <div
                      className="col-lg-6 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <h1 className="display-5 mb-5">Skills & Experience</h1>
                      {/* <p className="mb-4">실무형 프론트 & 벡엔드 경험을 보유</p> */}
                      <h3 className="mb-4">My Skills</h3>
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                              <h6 className="font-weight-bold">
                                HTML & CSS & JS & Jquery
                              </h6>
                              <h6 className="font-weight-bold">75%</h6>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                aria-valuenow={75}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </div>
                          <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                              <h6 className="font-weight-bold">React</h6>
                              <h6 className="font-weight-bold">80%</h6>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                aria-valuenow={80}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </div>
                          <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                              <h6 className="font-weight-bold">
                                JSP & Java & Springboot
                              </h6>
                              <h6 className="font-weight-bold">90%</h6>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                aria-valuenow={90}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                              <h6 className="font-weight-bold">Oracle DB</h6>
                              <h6 className="font-weight-bold">90%</h6>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                aria-valuenow={90}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </div>
                          <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                              <h6 className="font-weight-bold">Redis</h6>
                              <h6 className="font-weight-bold">70%</h6>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar bg-dark"
                                role="progressbar"
                                aria-valuenow={70}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </div>
                          <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                              <h6 className="font-weight-bold">
                                AWS & Oracle Cloud
                              </h6>
                              <h6 className="font-weight-bold">80%</h6>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar bg-info"
                                role="progressbar"
                                aria-valuenow={80}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-6 wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      <ul className="nav nav-pills rounded border border-2 border-primary mb-5">
                        <li className="nav-item w-50">
                          <a
                            className="nav-link w-100 py-3 fs-5 active"
                            data-bs-toggle="pill"
                            href="#tab-1"
                          >
                            Academy
                          </a>
                        </li>
                        <li className="nav-item w-50">
                          <a
                            className="nav-link w-100 py-3 fs-5"
                            data-bs-toggle="pill"
                            href="#tab-2"
                          >
                            Education
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div
                          id="tab-1"
                          className="tab-pane fade show p-0 active"
                        >
                          <div className="row gy-5 gx-4">
                            <div className="col-sm-6">
                              <h5>그린컴퓨터 아카데미</h5>
                              <hr className="text-primary my-2" />
                              <p className="text-primary mb-1">
                                2023.07 - 2023.12
                              </p>
                              <h6 className="mb-0">
                                NCS기반 자바 기반 웹 & 데이터 융합개발 교육과정
                                이수
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div id="tab-2" className="tab-pane fade show p-0">
                          <div className="row gy-5 gx-4">
                            <div className="col-sm-6">
                              <h5>고등학교</h5>
                              <hr className="text-primary my-2" />
                              <p className="text-primary mb-1">
                                2016.03 - 2019.02
                              </p>
                              <h6 className="mb-0">대저고등학교 졸업</h6>
                            </div>
                            <div className="col-sm-6">
                              <h5>대학교</h5>
                              <hr className="text-primary my-2" />
                              <p className="text-primary mb-1">2023.09 ~</p>
                              <h6 className="mb-0">고려사이버대학교 재학중</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Expertise End --> */}
            </div>
          </div>

          {/* <!-- Projects Start --> */}
          <div className="container-xxl py-6 pt-5" id="project">
          <p> Projects 는 추후 프로젝트 시 업데이트 예정입니다. </p>
            <div className="container">
              <div
                className="row g-5 mb-5 align-items-center wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="col-lg-6">
                  <h1 className="display-5 mb-0">My Projects</h1>
                </div>
                {/* 프로젝트 nav */}
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
              {/* 프로젝트 모션 시작 */}
              <div
                className="row g-4 portfolio-container wow fadeInUp"
                data-wow-delay="0.1s"
              >
                {/* < -- 1 -- >  */}
                <div className="col-lg-4 col-md-6 portfolio-item first">
                  <div className="portfolio-img rounded overflow-hidden">
                    <img className="img-fluid" src="img/project-1.jpg" alt="" />
                    {/* 버튼 */}
                    <div className="portfolio-btn">
                      <a
                        className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                        href="img/project-1.jpg"
                        data-lightbox="portfolio"
                      >
                        <i className="fa fa-eye"></i>
                      </a>
                      {/* <a
                        className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                        href=""
                      >
                        <i className="fa fa-link"></i>
                      </a> */}
                      <button className="ms-3 btn btn-outline-success">
                        dept
                      </button>
                      <button className="ms-2 btn btn-outline-success">
                        employ
                      </button>
                    </div>
                  </div>
                </div>

                {/* <-- 2 --> */}
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
                {/* <-- 3 --> */}
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
                {/* <-- 4 --> */}
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
                {/* <-- 5 --> */}
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
                {/* <-- 6 --> */}
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
              {/* 본문 영역 */}
              {/* {handleChangeDiv} */}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutMe;
