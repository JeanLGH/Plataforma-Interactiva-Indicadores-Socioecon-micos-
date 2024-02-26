import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary justify-content-between">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/img/NDCCV.png"
            width="160"
            height="50"
            className="d-inline-block align-top"
            alt="Norte Del Cauca Logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;