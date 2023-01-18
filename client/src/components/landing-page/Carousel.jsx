import React, { Component } from "react";
import Slider from "react-slick";
import CityItem from "./CityItem";
import {nanoid} from "nanoid"

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

    const cityList = this.props.dest
    return (
      <div className="my-4">
        <Slider {...settings}>
          
          {cityList.map(city => {
            return (
              <div className="m-2">
                <CityItem name={city.city} image={city.image} key={nanoid()} />
              </div>
            )
          })}

        </Slider>
      </div>
    );
  }
}

