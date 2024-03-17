import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import TestimonialSlider from "../Elements/TestimonialSlider";
//archiv
import archivo1 from "../../Documentos/boletinSeguridad.pdf"
import archivo2 from "../../Documentos/documentoFinalCalidad.pdf"
import archivo3 from "../../Documentos/epC.pdf"
import archivo4 from "../../Documentos/boletinRv3.pdf"

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Encuesta de Percepción Ciudadana.</h1>
            <p className="font13">
            Asimismo, la evaluación de la calidad de vida hace que el programa sea referente para el seguimiento a los planes de desarrollo de los municipios, mediante mesas de trabajo y la promoción de alianzas para incidir en políticas que mejoren la calidad de vida.
              
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Boletín de Seguridad 2020-2021"
                text="En este boletín informativo se hace seguimiento a los indicadores de seguridad de
                los tres municipios del programa Norte del Cauca Cómo Vamos (Guachené, Puerto
                Tejada y Santander de Quilichao)."
                tag="PDF"
                author="Norte Del Cauca Como Vamos, 2020"
                action={() => {
                  const url = archivo1;
                  window.open(url, "_blank");
                }}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Informe final Calidad de Vida 2020"
                text="El Norte del Cauca Cómo Vamos es un programa de carácter privado
                interinstitucional de seguimiento y evaluación de la calidad de vida en los municipios
                de Guachené, Puerto Tejada y Santander de Quilichao, que tiene como referencia
                el Programa ´Bogotá Cómo Vamos´"
                tag="PDF"
                author="Norte Del Cauca Como Vamos, 2020"
                action={() => {
                  const url = archivo2;
                  window.open(url, "_blank");
                }}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Encuesta de Percepción Ciudadana 2019-2020"
                text="La encuesta de percepción humana, realizada por Norte del Cauca Cómo Vamos, tuvo como objetivo conocer la opinión de la población sobre la calidad de vida en los municipios de Santander de Quilichao, Puerto Tejada y Guachené."
                tag="PDF"
                author="Norte Del Cauca Como Vamos, 2020"
                action={() => {
                  const url = archivo3;
                  window.open(url, "_blank");
                }}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="1er Boletín de Calidad de Vida (Tema Pobreza)"
                text="El siguiente boletín tiene como objetivo mostrar los principales resultados en materia de pobreza de
                los tres municipios del programa Norte del Cauca Cómo Vamos. La pobreza se mide con Índice de
                Pobreza Multidimensional (IPM) calculado por el DANE con los datos de los censos poblacionales de
                2005 y 2018."
                tag="PDF"
                author="Norte Del Cauca Como Vamos, 2020"
                action={() => {
                  const url = archivo4;
                  window.open(url, "_blank");
                }}
              
              />
            </div>
          </div>
          {/** 
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div>
           */}
        </div>
       
      </div>
      <div className="lightBg" style={{padding: '50px 0'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Sectores de análisis</h1>
            <p className="font13">
            Te invitamos a explorar los indicadores socioeconómicos para conocer más sobre la situación social y económica del Norte del Cauca.
              
            </p>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;