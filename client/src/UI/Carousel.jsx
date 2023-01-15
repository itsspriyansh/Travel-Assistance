import React, { Component } from "react";
import Slider from "react-slick";
import CityItem from "../components/CityItem";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 1000,
      cssEase: "linear"
    };
    return (
      <div>
        <Slider {...settings}>
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
          <div>
            <CityItem />
          </div>
        </Slider>
      </div>
    );
  }
}
