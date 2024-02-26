import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import NavBar from '../components/NavBar';
import CardsGrid from '../components/CardsGrid';
import Graphic from '../components/Graphic';
import Sidebar from "../components/Sidebar";
import { faHouseUser, faUsers, faBuilding } from '@fortawesome/free-solid-svg-icons';

const Demografia = () => {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    }

    const column1Styles = {
        backgroundColor: '#138A92',
        padding: '20px',
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
                        <h1>DEMOGRAFÍA</h1>
                    </Row>
                    <Row>
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
