import React from "react";
import Image1 from "../images/7.jpg";
import Image2 from "../images/8.jpg";
import Image3 from "../images/6.jpg";
import Image4 from "../images/5.jpg";
import Image5 from "../images/4.jpg";
import Image6 from "../images/3.jpg";

const Section2 = () => {
  return (
    <div className="">
      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">Gallery</h2>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
              <div className="d-flex flex-column h-100 text-white text-shadow-1">
                <img className="GalleryImg"
                  src={Image1}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              // style="background-image: url('unsplash-photo-2.jpg');"
            >
              <div className="d-flex flex-column h-100 text-white text-shadow-1">
                <img className="GalleryImg"
                  src={Image2}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
          
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              // style="background-image: url('unsplash-photo-2.jpg');"
            >
              <div className="d-flex flex-column h-100 text-white text-shadow-1">
                <img className="GalleryImg"
                  src={Image3}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              // style="background-image: url('unsplash-photo-2.jpg');"
            >
              <div className="d-flex flex-column h-100 text-white text-shadow-1">
                <img className="GalleryImg"
                  src={Image4}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              // style="background-image: url('unsplash-photo-2.jpg');"
            >
              <div className="d-flex flex-column h-100 text-white text-shadow-1">
                <img className="GalleryImg"
                  src={Image5}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              // style="background-image: url('unsplash-photo-2.jpg');"
            >
              <div className="d-flex flex-column h-100 text-white text-shadow-1">
                <img className="GalleryImg"
                  src={Image6}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>

       
        </div>
      </div>
    </div>
  );
};

export default Section2;
