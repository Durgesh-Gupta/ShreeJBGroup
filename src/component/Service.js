import React from "react";
import Truck from "../images/Truck.png";
import Air from "../images/air.png";
import Sea from "../images/sea.png";

const Service = () => {
  return (
    <div id="service" className="fullScreenContainer pt-5" style={{}}>
      {" "}
      <div className="container px-4 py-5 " id="hanging-icons">
        <h2 className="pb-2 border-bottom">WHAT WE DO OFFER</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="col d-flex align-items-start">
            <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <img src={Truck} alt="Road Freight" />
            </div>
            <div>
              <h3 className="fs-2">ROAD FREIGHT</h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
              {/* <a href="#" className="btn btn-primary">
                Primary button
              </a> */}
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <img
                src={Air}
                alt="Air Freight"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
            <div>
              <h3 className="fs-2">AIR FREIGHT</h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
              {/* <a href="#" className="btn btn-primary">
                Primary button
              </a> */}
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <img src={Sea} alt="Sea Freight" />
            </div>
            <div>
              <h3 className="fs-2">SEA FREIGHT</h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
              {/* <a href="#" className="btn btn-primary">
                Primary button
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
