import React from "react";
import styled from "styled-components";
import CarouselPhotos from "../Elements/CarouselPhotos";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";


export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Videos informativos</h1>
            <p className="font13">
              Te invitamos a explorar los diferentes recursos que ofrece Norte del Cauca Cómo Vamos y a ser parte de la construcción de un futuro mejor para la región.
            </p>
            
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div className="videoWrapper">
                <iframe
                  width="376"
                  height="309"
                  src="https://www.youtube.com/embed/ZCc4ag6o9M4"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <ProjectBox
                title="#1"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."

              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div className="videoWrapper">
                <iframe
                  width="376"
                  height="309"
                  src="https://www.youtube.com/embed/ZCc4ag6o9M4"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <ProjectBox
                title="#2"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."

              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div className="videoWrapper">
                <iframe
                  width="376"
                  height="309"
                  src="https://www.youtube.com/embed/ZCc4ag6o9M4"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <ProjectBox
                title="#3"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."

              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Cargar más" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div>


      {/** ------- sub seccion-----*/}
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                
                  <CarouselPhotos />
              </AddLeftInner>
            </AddLeft>

            <AddRight>
              <h2 className="font40 extraBold">Destacados</h2>
              <p className="font12">
              Informes, eventos, estadísticas, encuestas y documentos con información de cada uno de los once municipios de Sabana Centro que pueden ser de tu interés
              </p>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;

const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 50%; 
  margin-right: 20px; 
  @media (max-width: 860px) {
    width: 100%; 
    margin-right: 0; 
  }
`;

