import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


const Home = () => {
    return (
        <>
            <NavBar />
            <Container>
                <br></br>
                <Row>
                    <Col>
                        <Image src="/img/img_home.png" rounded />
                    </Col>
                    <Col>
                        <Image src="/img/img_resultados.png" rounded />
                    </Col>
                </Row>
            </Container>
            <br></br>
            <br></br>
            <hr style={{ backgroundColor: '#0A5499', height: '2px', margin: '0' }} /> {/* Línea horizontal con color y altura definidos */}
            <Container>
                <Row style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}> {/* Usando estilos en línea para centrar vertical y horizontalmente */}
                    <p className="h3 mb-4" style={{ fontWeight: '600', width: '100%' }}>ALIADOS</p> {/* Cambié el tamaño del encabezado a h3 para hacerlo más grande */}
                </Row>
                <br></br>
                <Row>
                    <Col>
                        <CardGroup>
                            <Card className="border-0">
                                <Card.Img variant="top" src="/img/corona.png" />
                            </Card>
                            <Card className="border-0">
                                <Card.Img variant="top" src="/img/zona_franca.jpg" />
                            </Card>

                        </CardGroup>

                    </Col>
                    <Col>
                        <CardGroup>
                            <Card className="border-0" style={{ width: '100%', height: '100%' }}>
                                <Card.Img variant="top" src="/img/cccauca.jpeg" />
                            </Card>
                            <Card className="border-0" style={{ width: '100%', height: '100%' }}>
                                <Card.Img variant="top" src="/img/CEO.jpg" />
                            </Card>
                            <Card className="border-0" style={{ width: '100%', height: '100%' }}>
                                <Card.Img variant="top" src="/img/comfacauca.png" />
                            </Card>
                            <Card className="border-0" style={{ width: '100%', height: '100%' }}>
                                <Card.Img variant="top" src="/img/ESAP.png" />
                            </Card>
                            <Card className="border-0" style={{ width: '100%', height: '100%' }}>
                                <Card.Img variant="top" src="/img/usbcali.png" />
                            </Card>
                        </CardGroup>

                    </Col>
                </Row>
                <br></br>


            </Container>
            <hr style={{ backgroundColor: '#0A5499', height: '2px', margin: '0' }} /> {/* Línea horizontal con color y altura definidos */}
            <Footer />
        </>
    );
};

export default Home;