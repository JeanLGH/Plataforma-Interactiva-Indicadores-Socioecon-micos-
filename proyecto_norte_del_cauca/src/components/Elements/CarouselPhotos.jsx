import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import img1 from "../../assets/img/add/pr1.jpg";
import img2 from "../../assets/img/add/pr1.jpg";
import img3 from "../../assets/img/add/pr1.jpg";

const photos = [
  { src: img1, alt: "Photo 1", description: "Descripción 1" },
  { src: img2, alt: "Photo 2", description: "Descripción 2" },
  { src: img3, alt: "Photo 3", description: "Descripción 3" },
];

const CarouselPhotos = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div style={{ position: "absolute", bottom: "10px", left: "10px" }}>
        <ul style={{ margin: "0" }}> {dots} </ul>
      </div>
    ),
  };

  const handleButtonClick = (index) => {
    alert(`Foto ${index + 1}`);
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <Slide key={index}>
            <ImageWrapper>
              <OverlayButton onClick={() => handleButtonClick(index)}>Descargar PDF</OverlayButton>
              <img src={photo.src} alt={photo.alt} />
              <Description>{photo.description}</Description>
            </ImageWrapper>
          </Slide>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: auto;
`;

const Slide = styled.div`
  width: 100%;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
`;

const OverlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Description = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  margin: 0;
`;

export default CarouselPhotos;
