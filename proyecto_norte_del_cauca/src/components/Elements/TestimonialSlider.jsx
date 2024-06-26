import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";

export default function TestimonialSlider() {
  const topics = [
    "Salud",
    "Demografía",
    "Educación",
    "Seguridad",
    "Medio Ambiente",
    "Finanzas"
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {topics.map((topic, index) => (
          <LogoWrapper key={index} className="flexCenter">
            <TestimonialBox topic={topic} author={topic} />
          </LogoWrapper>
        ))}
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;

const NextArrow = styled.div`
  &::before {
    content: "→"; 
    color: #0E77C8;

    font-size: 24px;
  }
`;
const PrevArrow = styled.div`
  &::before {
    content: "←"; 
    color: #0E77C8;

    font-size: 24px;
  }
`;