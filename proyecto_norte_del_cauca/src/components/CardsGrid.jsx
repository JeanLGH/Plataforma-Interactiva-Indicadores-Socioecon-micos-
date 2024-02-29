import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-regular-svg-icons'
import { faHouseUser, faUsers } from '@fortawesome/free-solid-svg-icons'

const cardTexts = [
  {
    img: <FontAwesomeIcon icon={faHouseUser} style={{ transform: 'scale(2)' }} />,
    title: '8.023',
    description: 'Densidad Urbana (km2)',
    bg: 'bg-danger',
  },
  {
    img: <FontAwesomeIcon icon={faUsers} style={{ transform: 'scale(2)' }} />,
    title: '281.029',
    description: 'Total de Habitantes ',
    bg: 'bg-warning',
  },
  {
    img: <FontAwesomeIcon icon={faHouseUser} style={{ transform: 'scale(2)' }} />,
    title: '8.023',
    description: 'Densidad Urbana (km2)',
    bg: 'bg-primary',
  },
];

function GridExample() {
  return (
    <Row xs={1} md={3} className="g-3">
      {cardTexts.map((text, idx) => (
        <Col key={idx}>
          <Card className={`text-center ${text.bg}`}>
            <Card.Header className="text-white">
              {text.img}
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

export default GridExample;