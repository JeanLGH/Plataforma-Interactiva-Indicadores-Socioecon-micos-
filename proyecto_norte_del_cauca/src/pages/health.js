
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, useEffect } from 'react';
import MapComponent from '../components/MapComponents/MapComponent';
import NavBar from '../components/Nav/TopNavbar';
import CardsGrid from '../components/CardsGrid';
import Graphic from '../components/Graphic';
import Sidebar from "../components/Sidebar";
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';


const Salud = () => {
    const [totalPoblacion, setTotalPoblacion] = useState(null); // Estado para almacenar el total de población

    useEffect(() => {
        const fetchTotalPoblacion = async () => {
            try {
              const response = await fetch('http://localhost:3001/datos2022Poblacion');
              if (!response.ok) {
                throw new Error('Error al obtener los datos del servidor');
              }
              const data = await response.json();
              console.log(data);
              setTotalPoblacion(data);
              console.log(totalPoblacion)
            } catch (error) {
              console.error('Error al obtener el total de población:', error);
             
            }
          };
        fetchTotalPoblacion();
    }, []);


    const center = [2.283333, -76.85];
    const [mousePosition, setMousePosition] = useState(null);

    const column1Styles = {
        backgroundColor: '#138A92',
        padding: '20px',
    };

    // Define el arreglo de cartas aquí
    const cardTexts = [
        {
            icon: faSkullCrossbones,
            title: '28.786',
            description: 'Total de muertes',
            bg: '#921313',
        },
        {
            icon: faSkullCrossbones,
            title: '28.786',
            description: 'Total de muertes',
            bg: '#921313',
        }, {
            icon: faSkullCrossbones,
            title: '28.786',
            description: 'Total de muertes',
            bg: '#921313',
        }
        // Agrega más objetos con diferentes iconos según sea necesario
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
                        <h2>SALUD</h2>
                    </Row>
                    <Row style={{ marginBottom: '20px' }}>

                        <CardsGrid cardTexts={cardTexts} columns={cardTexts.length} />
                    </Row>
                    <Row>
                        Gráfica
                        <Graphic totalPoblacion={totalPoblacion} />
                       
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default Salud;