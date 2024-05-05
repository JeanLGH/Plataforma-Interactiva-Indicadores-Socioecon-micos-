import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import MapComponent from '../components/MapComponents/MapComponent';
import 'leaflet/dist/leaflet.css';
import NavBar from '../components/Nav/TopNavbar';
import CardsGrid from '../components/CardsGrid';
import Graphic from '../components/Graphic';
import Sidebar from "../components/Sidebar";
import { faHouseUser, faUsers, faBuilding } from '@fortawesome/free-solid-svg-icons';

const Demografia = () => {
    const center = [2.283333, -76.85];
    const [mousePosition, setMousePosition] = useState(null);

    const column1Styles = {
        backgroundColor: '#138A92',

    };

    // Define el arreglo de cartas aquí
    const cardTexts = [
        {
            icon: faHouseUser,
            title: '8.023',
            description: 'Densidad Urbana (km2)',
            bg: '#138A92',
        },
        {
            icon: faUsers,
            title: '281.029',
            description: 'Total de Habitantes ',
            bg: '#139218',
        },
        {
            icon: faBuilding,
            title: 'Otro valor',
            description: 'Descripción del otro valor',
            bg: '#924113',
        },

    ];

    return (
        <>
            <NavBar />

            <Row style={{ marginTop: '100px' }}>
                <Col sm={2} style={column1Styles}>
                    <Sidebar />
                </Col>
                <Col sm={6}>
                    <div style={{ width: '100%', height: '600px', overflow: 'hidden' }}> {/* Tamaño específico y ocultar el desbordamiento */}
                        <MapComponent
                            center={center}
                            mousePosition={mousePosition}
                            setMousePosition={setMousePosition}
                        />
                    </div>
                </Col>
                <Col sm={4}>
                    <Row>
                        <h1>DEMOGRAFÍA</h1>
                    </Row>
                    <Row style={{ marginBottom: '20px' }}> {/* Agrega margen inferior */}
                        {/* Pasa el arreglo de cartas y el número de columnas como propiedades al componente CardsGrid */}
                        <CardsGrid cardTexts={cardTexts} />
                    </Row>
                    <Row>
                        Gráfica
                        <Graphic />
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default Demografia;