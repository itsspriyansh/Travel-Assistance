import React, { Component } from "react";
import Slider from "react-slick";
import CityItem from "./CityItem";
import './Corousel.module.css';


export default class AutoPlay extends Component {
  render() {
    const { arr } = this.props;

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

    };
    return (

      <div className="my-4">
        <Slider {...settings}>
          {arr && arr.map((element) => {
            return (
              <div className=" m-2" key={element.city}>
                <CityItem city={element.city} image={element.image} />
              </div>
            );
          })}
        </Slider>
      </div>);
  }
}

