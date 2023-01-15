import React, { Component } from "react";
import Slider from "react-slick";
import CityItem from "./CityItem";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div className="my-4">
        <Slider {...settings}>
          <div className=" m-2">
            <CityItem />
          </div>
          <div lassName=" m-2">
            <CityItem />
          </div>
          <div lassName=" m-2">
            <CityItem />
          </div>
          <div lassName=" m-2">
            <CityItem />
          </div>
          <div lassName=" m-2">
            <CityItem />
          </div>
          <div lassName=" m-2">
            <CityItem />
          </div>
        </Slider>
      </div>
    );
  }
}

