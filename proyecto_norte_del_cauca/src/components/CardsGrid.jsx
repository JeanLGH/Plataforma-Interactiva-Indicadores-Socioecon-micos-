import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CardsGrid({ cardTexts }) {
    // Calcula el tamaño de las columnas Bootstrap según el número de columnas especificado
    const cardStyle = {
        height: '140px',
    };

    return (
        <Row xs={1} md={3} className="g-3"> {/* Utiliza el número de columnas proporcionado */}
            {cardTexts.map((text, idx) => (
                <Col key={idx} xs={3}> {/* Utiliza el tamaño de columna calculado */}
                    <Card className="text-center" style={{ ...cardStyle, backgroundColor: text.bg }}>
                        <Card.Header className="text-white" style={{ border: '0' }}>
                            <FontAwesomeIcon icon={text.icon} style={{ transform: 'scale(2)' }} />
                        </Card.Header>
                        <Card.Body className="text-white">
                            <Card.Title>{text.title}</Card.Title>
                            <Card.Subtitle>{text.description}</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default CardsGrid;