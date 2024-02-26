import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons'
import { faHouse, faUserPen, faClipboard, faEnvelope, faMap, faX } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className="shadow">
      <Container className="py-5" style={{ width: '90%' }}>
        <Row className="justify-content-between flex-wrap">
          <Col className="align-self-center">
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src="/img/NDCCV.png" width="250px" />

            </a>
            <div className="mt-5 d-flex">
              <a href="https://www.facebook.com/Nortedelcaucacomovamos?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                <Button variant="dark" className="p-2 mx-3">
                  <FontAwesomeIcon icon={faFacebookF} />
                </Button>
              </a>
              <a href="https://x.com/nortedelcaucacv?s=21&t=2BTMAD9Ho8tu-wLv_hT1Mw" target="_blank" rel="noopener noreferrer">
                <Button variant="dark" className="p-2 mx-3">
                  <FontAwesomeIcon icon={faX} />
                </Button>
              </a>
              <a href="https://www.instagram.com/nortedelcaucacomovamos?igsh=NnN2ZjZxOHd6ZXh4" target="_blank" rel="noopener noreferrer">
                <Button variant="dark" className="p-2 mx-3">
                  <FontAwesomeIcon icon={faInstagram} />
                </Button>
              </a>
            </div>
          </Col>
          <Col>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              También te puede interesar
            </p>
            <div style={{ cursor: 'pointer' }}>
              <a href="/" className="text-decoration-none text-dark">Prensa</a>
              <a href="/" className="text-decoration-none text-dark d-block mt-2">Noticias</a>
              <a href="/" className="text-decoration-none text-dark d-block mt-2">Artículos</a>
              <a href="/" className="text-decoration-none text-dark d-block mt-2">Eventos</a>
            </div>
          </Col>
          <Col>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Productos
            </p>

            <div style={{ cursor: 'pointer' }}>
              <a href="/" className="text-decoration-none text-dark"><FontAwesomeIcon icon={faUserPen} />Encuestas de Percepción Ciudadana</a>
              <br />
              <a href="/" className="text-decoration-none text-dark d-block mt-2"><FontAwesomeIcon icon={faHouse} />Informes de Calidad de Vida</a>
              <a href="/" className="text-decoration-none text-dark d-block mt-2"><FontAwesomeIcon icon={faClipboard} />Informes Especiales</a>
            </div>
          </Col>
          <Col>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Contacto
            </p>
            <div style={{ cursor: 'pointer' }}>
              <a href="mailto:comovamoscauca@cccauca.org.co" className="text-decoration-none text-dark"> <FontAwesomeIcon icon={faEnvelope} />comovamoscauca@cccauca.org.co</a>
              <br />

              <a href="/" className="text-decoration-none text-dark d-block mt-2"> <FontAwesomeIcon icon={faMap} />  Calle 4 8 18 Barrio Centro - Cámara de Comercio del Cauca, Seccional Norte 191030 Santander de Quilichao, Cauca, Colombia</a>

            </div>
          </Col>

        </Row>
        <small className="text-center mt-5">&copy; Todos los derechos reservados por Norte Del Cauca Cómo Vamos - 2023.</small>
      </Container>
    </footer>
  );
};

export default Footer;
