import React,{useState} from "react";
import image1 from "../../assests/1.jpg";
import image2 from "../../assests/2.jpg";
import image3 from "../../assests/3.jpg";

const Carousel = () => {
  const [show,setShow]=useState(false);
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block"
              src={image1}
              alt="First slide"
              style={{ height: "400px", width: "1500px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block"
              src={image2}
              alt="Second slide"
              style={{ height: "400px", width: "1500px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block"
              src={image3}
              alt="Third slide"
              style={{ height: "400px", width: "1500px" }}
            />
          </div>
        </div>
        <a
          className="carousel-control-prev  "
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
          style={{ paddingBottom: "100px" }}
        >
          <span
            className="carousel-control-prev-icon "
            aria-hidden="true"
          ></span>
          <span className="sr-only ">Previous</span>
        </a>
        <a
          className="carousel-control-next "
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
          style={{ paddingBottom: "100px" }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default Carousel;
