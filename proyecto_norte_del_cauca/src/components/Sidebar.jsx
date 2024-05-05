import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import { useLocation } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faBook, faUserFriends, faHouse, faTree, faMoneyBillAlt, faHeart, faHandshake, faGear, faUniversalAccess, faShieldHalved, faCircleUser, faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { Nav, Badge, Image, Button, Accordion, Navbar } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import styled from "styled-components"; // Importa styled-components

export default () => {
  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const showClass = show ? "show" : "";

  const onCollapse = () => setShow(!show);

  const CollapsableNavItem = (props) => {
    const { eventKey, title, icon, children = null } = props;
    const defaultKey = pathname.indexOf(eventKey) !== -1 ? eventKey : "";

    return (
      <Accordion as={Nav.Item} defaultActiveKey={defaultKey}>
        <Accordion.Item eventKey={eventKey} style={{ border: 'none' }}>
          <Accordion.Button as={Nav.Link} className="d-flex justify-content-between align-items-center" style={{ backgroundColor: '#138A92', color: 'white', border: 'none' }}>
            <span>
              <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /></span>
              <SidebarText className="sidebar-text">{title}</SidebarText> {/* Agrega el estilo de texto aquí */}
            </span>
          </Accordion.Button>
          <Accordion.Body className="multi-level" style={{ backgroundColor: '#414757' }}>
            <Nav className="flex-column">
              {children}
            </Nav>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  };

  const NavItem = (props) => {
    const { title, link, external, target, icon, image, badgeText, badgeBg = "secondary", badgeColor = "primary" } = props;
    const classNames = badgeText ? "d-flex justify-content-start align-items-center justify-content-between" : "";
    const navItemClassName = link === pathname ? "active" : "";
    const linkProps = external ? { href: link } : { as: Link, to: link };

    return (
      <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
        <Nav.Link {...linkProps} target={target} className={classNames} style={{ color: 'white' }}>
          <span>
            {icon ? <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span> : null}
            {image ? <Image src={image} width={20} height={20} className="sidebar-icon svg-icon" /> : null}

            <SidebarText className="sidebar-text">{title}</SidebarText> {/* Agrega el estilo de texto aquí */}
          </span>
          {badgeText ? (
            <Badge pill bg={badgeBg} text={badgeColor} className="badge-md notification-count ms-2">{badgeText}</Badge>
          ) : null}
        </Nav.Link>
      </Nav.Item>
    );
  };

  return (
    <>
      <Navbar expand="md" collapseOnSelect variant="dark" className="navbar-theme-primary px-4 d-md-none">
        <Navbar.Brand className="me-lg-5">
          <Image className="navbar-brand-light" />
        </Navbar.Brand>
        <Navbar.Toggle as={Button} aria-controls="main-navbar" onClick={onCollapse}>
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Item className="d-md-none">
            <Nav.Link className="collapse-close d-md-none" onClick={onCollapse} />
          </Nav.Item>
        </Navbar.Collapse>
      </Navbar>
      <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
        <SimpleBar className={`collapse ${showClass} sidebar d-md-block`} style={{ backgroundColor: '#138A92', color: 'white' }}>
          <div className="sidebar-inner px-4 pt-3">
            <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">

              <Nav.Link className="collapse-close d-md-none" onClick={onCollapse}>

              </Nav.Link>
            </div>
            <Nav className="flex-column pt-3 pt-md-0 custom-text-white" style={{ width: '100%' }}> {/* Ajusta el ancho del contenido al 100% del Sidebar */}
              <NavItem title="Inicio" icon={faHouse} link="/" />
              <NavItem title="Gráficas" icon={faChartPie} link="/graficas" />
              <CollapsableNavItem eventKey="documentation/" title="Indicadores" icon={faChartSimple}>
                <NavItem title="Demografía" icon={faUserFriends} link="/demography" />
                <NavItem title="Salud" icon={faHeart} link="/health" />
                <NavItem title="Educación" icon={faBook} link="/educacion" />
                <NavItem title="Seguridad" icon={faHandshake} link="/seguridad" />
                <NavItem title="Medio Ambiente" icon={faTree} link="/medio-ambiente" />
                <NavItem title="Finanzas Municipales" icon={faMoneyBillAlt} link="/finanzas-municipales" />
              </CollapsableNavItem>
              <CollapsableNavItem eventKey="components/" title="Configuración" icon={faGear}>
                <NavItem title="Usuario" icon={faCircleUser} link="/information" />
                <NavItem title="Seguridad" icon={faShieldHalved} link="/security" />
                <NavItem title="Accesibilidad" icon={faUniversalAccess} link="/accessibility" />
              </CollapsableNavItem>
            </Nav>
          </div>
        </SimpleBar>
      </CSSTransition>
    </>
  );
};

// Agrega un componente de estilo para el texto de la barra lateral
const SidebarText = styled.span`
  font-size: 12px; // Tamaño de fuente más pequeño
`;
