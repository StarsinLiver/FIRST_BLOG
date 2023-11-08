import React, { useEffect, useState } from "react";
import initMain from "../../assets/js/main";

function Footer() {
  
  let [isLogin , setIsLogin] = useState<boolean>(false);
  
  useEffect(() => {
    initMain();
    if(localStorage.getItem("accessToken") != null) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  },[localStorage]);


  return (
    <>
      {/* <!-- Footer Start --> */}
      <div
        className="container-fluid bg-dark footer py-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-primary mb-4">My Office</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt text-primary me-3"></i>123
                Street, Busan, Korea
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt text-primary me-3"></i>+012 345
                67890
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope text-primary me-3"></i>
                info@example.com
              </p>
              <div className="d-flex pt-3">
                <a
                  className="btn btn-square btn-primary rounded-circle me-2"
                  href="https://twitter.com"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-square btn-primary rounded-circle me-2"
                  href="https://www.facebook.com/?locale=ko_KR"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-square btn-primary rounded-circle me-2"
                  href="https://www.youtube.com/"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  className="btn btn-square btn-primary rounded-circle me-2"
                  href=""
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-primary mb-4">Quick Links</h4>
              <a className="btn btn-link" href="">
                Everyone's Post
              </a>
              <a className="btn btn-link" href="">
                My Blog
              </a>
              <a className="btn btn-link" href="">
                About Me
              </a>
              <a className="btn btn-link" href="">
                Q & A
              </a>
              <a className="btn btn-link" href="">
                준비중 입니다
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-primary mb-4">Business Hours</h4>
              <p className="mb-1">Monday - Friday</p>
              <h6 className="text-light">09:00 am - 07:00 pm</h6>
              <p className="mb-1">Saturday</p>
              <h6 className="text-light">09:00 am - 12:00 pm</h6>
              <p className="mb-1">Sunday</p>
              <h6 className="text-light">Closed</h6>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-primary mb-4">Lorem</h4>
              <p>Lorem ipsum dolor sit amet.</p>
              {/* <div className="position-relative w-100">
                ?
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}

      {/* <!-- Copyright Start --> */}
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <a className="fw-medium" href="#">
                https://sanha.com
              </a>
              , All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              {/* <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink.  */}
              {/* If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ****/}
              Designed By{" "}
              <a className="fw-medium" href="">
                Lee sanha
              </a>{" "}
              Distributed By{" "}
              <a className="fw-medium" href="https://themewagon.com">
                ThemeWagon
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Copyright End --> */}
    </>
  );
}

export default Footer;
