import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from 'react-bootstrap/Image';
import NavBar from '../components/NavBar';
import CardsGrid from '../components/CardsGrid';
import Graphic from '../components/Graphic';
import Sidebar from "../components/Sidebar";

const AccessibilitySection = () => {
  const [theme, setTheme] = useState('light');
  const [contrastEnabled, setContrastEnabled] = useState(false);
  const [colorblindModeEnabled, setColorblindModeEnabled] = useState(false);
  const [colorblindType, setColorblindType] = useState('');
  const [colorblindLevel, setColorblindLevel] = useState(1);
  const [fontSize, setFontSize] = useState('medium');

  const column1Styles = {
    backgroundColor: '#138A92',
    padding: '20px',
};

const column2Styles = {
    marginRight: '10px', // Espacio entre las columnas
};
  useEffect(() => {
    applyStyles();
  }, [theme, contrastEnabled, colorblindModeEnabled, colorblindType, colorblindLevel, fontSize]);

  const applyStyles = () => {
    if (theme === 'dark') {
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = '#fff';
    } else {
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#000';
    }

    if (contrastEnabled) {
      document.body.style.filter = 'invert(1) hue-rotate(180deg)';
    } else {
      document.body.style.filter = 'none';
    }

    if (colorblindModeEnabled) {
      applyColorblindMode(colorblindType);
    } else {
      removeColorblindMode();
    }

    document.body.style.fontSize = getFontSize(fontSize);
  };

  const applyColorblindMode = (type) => {
    switch (type) {
      case 'protanopia':
        document.body.style.backgroundColor = 'blue';
        document.body.style.color = 'yellow';
        break;
      case 'deuteranopia':
        document.body.style.backgroundColor = 'purple';
        document.body.style.color = 'orange';
        break;
      case 'tritanopia':
        document.body.style.backgroundColor = 'green';
        document.body.style.color = 'red';
        break;
      default:
        break;
    }
  };

  const removeColorblindMode = () => {
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
  };

  const getFontSize = (size) => {
    switch (size) {
      case 'small':
        return '14px';
      case 'medium':
        return '16px';
      case 'large':
        return '18px';
      default:
        return '16px';
    }
  };

  const handleSaveChanges = () => {
    applyStyles();
    console.log('Guardando cambios...');
    console.log('Tema:', theme);
    console.log('Contraste:', contrastEnabled);
    console.log('Modo Daltonismo:', colorblindModeEnabled);
    console.log('Tipo Daltonismo:', colorblindType);
    console.log('Nivel Daltonismo:', colorblindLevel);
    console.log('Tamaño de letra:', fontSize);
  };

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  const handleContrastToggle = () => {
    setContrastEnabled(!contrastEnabled);
  };

  const handleColorblindModeToggle = () => {
    setColorblindModeEnabled(!colorblindModeEnabled);
  };

  const handleColorblindTypeChange = (event) => {
    setColorblindType(event.target.value);
  };

  const handleColorblindLevelChange = (event) => {
    setColorblindLevel(parseInt(event.target.value));
  };

  const handleFontSizeChange = (selectedFontSize) => {
    setFontSize(selectedFontSize);
  };

  return (
    <>
      <NavBar />
      <Row>
        <Col sm={2} style={column1Styles}>
          <Sidebar />
        </Col>
        <Col sm={9} className="column-2" style={column2Styles}> {/* Añade la clase column-2 y el estilo de margen */}
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-between align-items-center">
                <h2 className="fw-bold">Accesibilidad</h2>
                <div className="d-flex">
                  <Button variant="primary" className="me-3" onClick={handleSaveChanges}>
                    Guardar Cambios
                  </Button>
                  <Button variant="secondary">Cancelar</Button>
                </div>
              </div>
              <div className="col-lg-12 mt-4">
                <hr className="w-100 bg-primary" />
              </div>
              <div className="col-lg-7">
                <div className="mb-4">
                  <h4>Tema de la página</h4>
                  <Form.Select className="ms-4" onChange={(e) => handleThemeChange(e.target.value)}>
                    <option value="light">Claro</option>
                    <option value="dark">Oscuro</option>
                  </Form.Select>
                </div>
                <div className="mb-4">
                  <h4>Contraste de la página</h4>
                  <Form.Check type="switch" id="contrast-switch" label="Activar alto contraste" className="ms-4" checked={contrastEnabled} onChange={handleContrastToggle} />
                </div>
                <div className="mb-4">
                  <h4>Modo daltonismo</h4>
                  <Form.Check type="switch" id="colorblind-mode-switch" label="Activar modo daltonismo" className="ms-4" checked={colorblindModeEnabled} onChange={handleColorblindModeToggle} />
                  {colorblindModeEnabled && (
                    <div className="ms-4">
                      <Form.Select className="mt-2" onChange={handleColorblindTypeChange}>
                        <option value="">Seleccione el tipo de daltonismo</option>
                        <option value="protanopia">Protanopia</option>
                        <option value="deuteranopia">Deuteranopia</option>
                        <option value="tritanopia">Tritanopia</option>
                      </Form.Select>
                      <Form.Range className="mt-3" min={1} max={10} value={colorblindLevel} onChange={handleColorblindLevelChange} />
                      <Form.Label className="mt-2">Nivel de daltonismo: {colorblindLevel}</Form.Label>
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <h4>Tamaño de la letra</h4>
                  <Form.Select className="ms-4" onChange={(e) => handleFontSizeChange(e.target.value)} defaultValue="medium">
                    <option value="small">Pequeño</option>
                    <option value="medium">Mediano</option>
                    <option value="large">Grande</option>
                  </Form.Select>
                </div>
              </div>

            </div>
          </div>
        </Col>
      </Row>
    </>




  );
};

export default AccessibilitySection;