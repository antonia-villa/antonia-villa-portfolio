import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const MultiMediaProject = ({ images }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };
    return (
        <Slider {...settings}>
          {images.sort().map((image, i) => (
              <div>
              <img src={image} key={i} alt="portfolio project demo" />
              </div>
          ))}
        </Slider>
    )
  };
