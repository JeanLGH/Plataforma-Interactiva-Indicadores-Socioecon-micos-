import React from 'react';
import { Button, Container, Row, Col, Form, Image } from 'react-bootstrap';

const FormInfo = () => {
    return (
        <Container className="mt-5">
            <Form>
                <Row>
                    <Col lg={12} className="d-flex justify-content-between align-items-center">
                        <h2 className="fw-bold">Información General</h2>
                        <div className="d-flex">
                            <Button variant="primary" className="me-3" style={{ backgroundColor: '#4F5EE1', border: '1px solid #4F5EE1', transition: 'background-color 0.3s, border-color 0.3s, color 0.3s', }} onMouseOver={(e) => e.target.style.backgroundColor = '#364FC7'} onMouseOut={(e) => e.target.style.backgroundColor = '#4F5EE1'} >
                                Guardar Cambios
                            </Button>

                            <Button variant="secondary" style={{ backgroundColor: 'white', color: '#4F5EE1', border: '1px solid #4F5EE1', transition: 'background-color 0.3s, border-color 0.3s, color 0.3s', }} onMouseOver={(e) => e.target.style.backgroundColor = '#E5E5E5'} onMouseOut={(e) => e.target.style.backgroundColor = 'white'}>
                                Cancelar
                            </Button>
                        </div>
                    </Col>
                    <Col lg={12} className="mt-4">
                        <hr className="w-100 bg-primary" />
                    </Col>
                    <Col lg={6}>
                        <Row className="align-items-center">
                            <Col xs={6} md={4}>
                                <Image src="/img/NDCCV.png" roundedCircle style={{ width: '150px', height: '150px' }} />
                            </Col>
                            <Col>
                                <div className="d-flex">
                                    <Button variant="primary" className="me-3" style={{ backgroundColor: '#4F5EE1', border: '1px solid #4F5EE1', transition: 'background-color 0.3s, border-color 0.3s, color 0.3s', }} onMouseOver={(e) => e.target.style.backgroundColor = '#364FC7'} onMouseOut={(e) => e.target.style.backgroundColor = '#4F5EE1'} >
                                        Cambiar
                                    </Button>

                                    <Button variant="secondary" style={{ backgroundColor: 'white', color: '#4F5EE1', border: '1px solid #4F5EE1', transition: 'background-color 0.3s, border-color 0.3s, color 0.3s', }} onMouseOver={(e) => e.target.style.backgroundColor = '#E5E5E5'} onMouseOut={(e) => e.target.style.backgroundColor = 'white'}>
                                        Eliminar
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Row>
                        <Col lg={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Pepito Perez" />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Correo</Form.Label>
                                <Form.Control type="email" placeholder="pepito@gmail.com" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Celular</Form.Label>
                                <Form.Control type="text" placeholder="3167876578" />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
                                <Form.Label>País</Form.Label>
                                <Form.Control as="select">
                                    <option>Seleccione el país</option>
                                    <option value="protanopia">Colombia</option>
                                    <option value="deuteranopia">Ecuador</option>
                                    <option value="tritanopia">Venezuela</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Ciudad</Form.Label>
                                <Form.Control type="text" placeholder="Ciudad" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Row>
            </Form>
        </Container>
    );
};

export default FormInfo;
