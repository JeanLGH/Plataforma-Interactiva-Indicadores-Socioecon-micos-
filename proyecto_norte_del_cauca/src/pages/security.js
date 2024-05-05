import React from 'react';
import Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../components/Nav/TopNavbar';
import Sidebar from "../components/Sidebar";

const SecuritySection = () => {
    const column1Styles = {
        backgroundColor: '#138A92',
        padding: '20px',
    };

    const column2Styles = {
        marginRight: '10px', // Espacio entre las columnas
    };

    return (
        <>
        <NavBar />
      
        <Row style={{ marginTop: '70px' }}> {/* Agrega marginTop aquí */}
          <Col sm={2} style={column1Styles}>
            <Sidebar />
          </Col>
                <Col sm={9} className="column-2" style={column2Styles}> {/* Añade la clase column-2 y el estilo de margen */}
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-lg-12 d-flex justify-content-between align-items-center">
                                <h2 className="fw-bold">Seguridad</h2>
                                <div className="d-flex">
                                    <Button variant="primary" className="me-3" style={{ backgroundColor: '#4F5EE1', border: '1px solid #4F5EE1', transition: 'background-color 0.3s, border-color 0.3s, color 0.3s', }} onMouseOver={(e) => e.target.style.backgroundColor = '#364FC7'} onMouseOut={(e) => e.target.style.backgroundColor = '#4F5EE1'} >
                                        Guardar Cambios
                                    </Button>

                                    <Button variant="secondary" style={{ backgroundColor: 'white', color: '#4F5EE1', border: '1px solid #4F5EE1', transition: 'background-color 0.3s, border-color 0.3s, color 0.3s', }} onMouseOver={(e) => e.target.style.backgroundColor = '#E5E5E5'} onMouseOut={(e) => e.target.style.backgroundColor = 'white'}>
                                        Cancelar
                                    </Button>

                                </div>
                            </div>
                            <div className="col-lg-12 mt-4">
                                <hr className="w-100 bg-primary" />
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-4">
                                    <h4>Verificación de dos pasos</h4>
                                    <p className="text-muted ms-4">Activa la verificación de dos pasos para mejorar la seguridad de tu cuenta.</p>
                                </div>
                                <div className="mb-4">
                                    <h4>Email</h4>
                                    <p className="text-muted ms-4">ejemplo@gmail.com</p>
                                </div>
                                <div className="mb-4">
                                    <h4>SMS</h4>
                                    <p className="text-muted ms-4">Número de teléfono asociado a tu cuenta:</p>
                                    <Form.Control className="text-muted ms-4" type="text" placeholder="Ingrese su número de teléfono" />
                                </div>
                                <div>
                                    <h4>Cambiar Contraseña</h4>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="d-flex justify-content-end align-items-center">
                                <Form>
                                <Form.Check // prettier-ignore
                                    type="switch"
                                    id="custom-switch"
                                    label="Check this switch"
                                />
                                </Form>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default SecuritySection;
