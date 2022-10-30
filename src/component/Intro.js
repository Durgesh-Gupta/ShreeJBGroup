import React from "react";
import NavBar from "./NavBar";

const Intro = () => {
  return (
    <div className="fullScreenContainer" id="home">
      <NavBar />

      <div className="container-fluid text-center flex-fill d-flex justify-content-center align-items-center fw-bolder primary-text backgroundImage">
        <h1 className="title">
          SHREE JB GRAIN & TRANSPORT <br />
          PRIVATE LIMITED
        </h1>
      </div>
    </div>
  );
};

export default Intro;
