import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';


function NavBar({ enPaginaRegistro }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary justify-content-between">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/img/NDCCV.png"
            width="160"
            height="50"
            className="d-inline-block align-top"
            alt="Norte Del Cauca Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {enPaginaRegistro ? (
              <Nav.Link href="/">INICIO</Nav.Link>
            ) : (
              <>
                <Nav.Link href="/">INICIO</Nav.Link>
                <Nav.Link href="#link">¿QUIENES SOMOS?</Nav.Link>
                <NavDropdown title="PUBLICACIONES SCCV" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/demography">Indicadores 2023</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Indicadores 2022</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Resultados encuestas de calidad</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Comparación de Ciudades</NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {!enPaginaRegistro && <Button className="mb-4 w-100" href="/login" style={{ backgroundColor: '#0A5499', color: 'white' }}>INICIAR SESIÓN</Button>
}
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

