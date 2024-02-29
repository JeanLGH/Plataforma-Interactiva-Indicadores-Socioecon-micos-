import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from 'react-bootstrap/Image';
import NavBar from '../components/NavBar';
import CardsGrid from '../components/CardsGrid';
import Graphic from '../components/Graphic';
import Sidebar from "../components/Sidebar";
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';


const Salud = () => {
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
      },{
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
            <Row>
                <Col sm={2} style={column1Styles}>
                    <Sidebar />
                </Col>
                <Col sm={5}>
                    <Image src="/img/FotoMapa.jpg" rounded />
                </Col>
                <Col sm={5}>
                    <Row>
                        <h1>SALUD</h1>
                    </Row>
                    <Row>
                        {/* Pasa el arreglo de cartas y el número de columnas como propiedades al componente CardsGrid */}
                        <CardsGrid cardTexts={cardTexts} columns={cardTexts.length} />
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

export default Salud;
