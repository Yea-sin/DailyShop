import React from "react";
import "./Banner.css";
import { Carousel, Container } from "react-bootstrap";

const Banner = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "600px" }}
            src="https://i.ibb.co/T4SS9v4/veg-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="banner-texts">
              <h2>Fresh Food</h2>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "600px" }}
            src="https://i.ibb.co/bX83Spv/all.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className="banner-texts">
              <h2 className="text-light bg-dark">Get all in one place</h2>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "600px" }}
            src="https://i.ibb.co/Yjg8vjx/market.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="banner-texts">
              <h2 className="text-dark">Get grocery market at home</h2>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
