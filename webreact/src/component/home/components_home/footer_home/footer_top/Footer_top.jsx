import React from "react";
import "./Footer_top.css";

function Footer_top() {
  return (
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-sm-2">
            <div className="companyinfo">
              <h2>
                <span>e</span>-shopper
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do
                eiusmod tempor
              </p>
            </div>
          </div>
          <div className="col-sm-7">
            <div className="col-sm-3">
              <div className="video-gallery text-center">
                <a href="#">
                  <div className="iframe-img">
                    <img src="image/home/iframe1.png" alt="" />
                  </div>
                  <div className="overlay-icon">
                    <i className="fa fa-play-circle-o"></i>
                  </div>
                </a>
                <p>Circle of Hands</p>
                <h2>24 DEC 2014</h2>
              </div>
            </div>

            <div className="col-sm-3">
              <div className="video-gallery text-center">
                <a href="#">
                  <div className="iframe-img">
                    <img src="image/home/iframe2.png" alt="" />
                  </div>
                  <div className="overlay-icon">
                    <i className="fa fa-play-circle-o"></i>
                  </div>
                </a>
                <p>Circle of Hands</p>
                <h2>24 DEC 2014</h2>
              </div>
            </div>

            <div className="col-sm-3">
              <div className="video-gallery text-center">
                <a href="#">
                  <div className="iframe-img">
                    <img src="image/home/iframe3.png" alt="" />
                  </div>
                  <div className="overlay-icon">
                    <i className="fa fa-play-circle-o"></i>
                  </div>
                </a>
                <p>Circle of Hands</p>
                <h2>24 DEC 2014</h2>
              </div>
            </div>

            <div className="col-sm-3">
              <div className="video-gallery text-center">
                <a href="#">
                  <div className="iframe-img">
                    <img src="image/home/iframe4.png" alt="" />
                  </div>
                  <div className="overlay-icon">
                    <i className="fa fa-play-circle-o"></i>
                  </div>
                </a>
                <p>Circle of Hands</p>
                <h2>24 DEC 2014</h2>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="address">
              <img src="image/home/map.png" alt="" />
              <p>505 S Atlantic Ave Virginia Beach, VA(Virginia)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer_top;
