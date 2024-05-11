import React, { useState } from 'react';
import NavBar from '../components/Nav/TopNavbar';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Register = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        clave: '',
        confirmarClave: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <Container fluid className="p-0 my-3 gradient-form">
            <Row>
                <Col lg={6} className="mb-5 d-flex align-items-center">
                    <div className="d-flex flex-column ms-5 flex-grow-1">
                        <NavBar enPaginaRegistro={true} />
                        <div className="text-center">
                            <h4 className="mt-1 mb-5 pb-1">CREAR CUENTA</h4>
                        </div>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-4">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese su nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Label>Correo</Form.Label>
                                <Form.Control type="email" placeholder="Ingrese su correo electrónico" name="correo" value={formData.correo} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Ingrese su contraseña" name="clave" value={formData.clave} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Label>Confirmar Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Confirme su contraseña" name="confirmarClave" value={formData.confirmarClave} onChange={handleChange} />
                            </Form.Group>
                            <div className="text-center pt-1 mb-5 pb-1">
                                <Button type="submit" className="mb-4 w-100 gradient-custom-2">Registrar</Button>
                            </div>
                        </Form>
                        <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4"></div>
                    </div>
                </Col>
                <Col lg={6} className="mb-5">
                    <div className="d-flex flex-column align-items-center justify-content-center gradient-custom-2 h-100 mb-4">
                        <div className="text-white px-3 py-4 p-md-5 mx-md-4 text-center">
                            <h4 className="mb-4">¿Ya tienes cuenta?</h4>
                            <p className="small mb-0">Ingresa aquí para iniciar sesión</p>
                            <Button className="mt-4 w-70" style={{ backgroundColor: 'white', color: '#0A5499' }} href="/login">Iniciar Sesión</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;
