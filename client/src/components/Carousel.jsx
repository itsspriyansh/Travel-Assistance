import React, { Component } from "react";
import Slider from "react-slick";
import CityItem from "./CityItem";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div>
        <Slider {...settings}>
          <div className=" m-2">
            <CityItem />
          </div>
          <div>
            <CityItem />
          </div>
          <div>
            <CityItem />
          </div>
          <div>
            <CityItem />
          </div>
          <div>
            <CityItem />
          </div>
          <div>
            <CityItem />
          </div>
        </Slider>
      </div>
    );
  }
}

