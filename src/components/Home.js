import React from "react";
import landing from "../images/landing.png";
import homeStyle from "../CSS/Home.module.css";
import Hservices from "./Hservices";
import Hchooseus from "./Hchooseus";
import HYbenefits from "./HYbenefits";
import HReview from "./HReview";
import Habout from "./Habout";
const Home = () => {
  return (
    <>
      <div className="square mb-5"></div>
      <div className="container" style={{marginBottom:"12rem"}}>
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card-body">
              <h1
                className="card-title"
                style={{ fontSize: "4.2rem", color: "#1F326A" }}
              >
                Empowering Businesses Through Seamless Payment Solutions.
              </h1>
              <p className="card-text my-4" style={{ width: "25vw" }}>
                Enabling enterprises with smooth payment solutions to optimize
                transactions and elevate customer experiences.
              </p>
              <a href="/" className={`btn ${homeStyle.btn}`}>
                Get Started
              </a>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card-body">
              <img
                src={landing}
                class="img-fluid rounded-start"
                alt="LANDING"
              />
            </div>
          </div>
        </div>
      </div>

      <Habout/>
      <Hservices/>
      <Hchooseus/>
      <HYbenefits/>
      <HReview/>
    </>
  );
};

export default Home;
