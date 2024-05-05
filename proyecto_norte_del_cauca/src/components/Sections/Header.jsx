import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets

import Dots from "../../assets/svg/Dots";
import InteractiveChart from "../Elements/InteractiveChart";
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">Norte del Cauca  <span style={{ color: "#0E77C8" }}>Cómo</span> Vamos!</h1>
          <HeaderP className="font13 semiBold">
            Norte del Cauca Cómo Vamos te abre las puertas a un mundo de información estadística sobre la calidad de vida en los municipios de Santander de Quilichao, Puerto Tejada y Guachené.
          </HeaderP>
          <BtnWrapper>
          <FullButton title="EMPECEMOS!" to="/demography" />
          </BtnWrapper>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <InteractiveChart />
         
          <GreyDiv className="lightBg"></GreyDiv>
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper>
        
      </RightSide>

    </Wrapper>
  );
}


const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;


const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;


