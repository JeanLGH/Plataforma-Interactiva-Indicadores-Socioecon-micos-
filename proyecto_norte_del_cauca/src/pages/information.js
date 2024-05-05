import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../components/Nav/TopNavbar';
import FormInfo from '../components/FormInfo';
import Sidebar from "../components/Sidebar";

const Information = () => {
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
                <FormInfo />
                </Col>
            </Row>
        </>
    );
};

export default Information;
