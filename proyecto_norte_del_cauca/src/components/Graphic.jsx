import React, { useState } from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { PieChart, Pie, Legend as PieLegend, Cell, Tooltip as PieTooltip } from 'recharts';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Graphic = () => {
  const data = [
    { name: 'Page A', value: 4000 },
    { name: 'Page B', value: 3000 },
    { name: 'Page C', value: 2000 },
    { name: 'Page D', value: 2780 },
    { name: 'Page E', value: 1890 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AD40AF'];

  const [chartType, setChartType] = useState('bar');

  const renderChart = () => {
    if (chartType === 'bar') {
      return (
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      );
    } else if (chartType === 'pie') {
      return (
        <PieChart width={400} height={400}>
          <PieTooltip/>
          <Pie
            data={data}
            cx={200}
            cy={200}
            innerRadius={60}
            outerRadius={140}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <PieLegend />
        </PieChart>
      );
    }
  };


  return (
    <div>
      {/* Navbar con opción para cambiar el tipo de gráfico */}
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Tipo: </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link onClick={() => setChartType('bar')}>Gráfico de barras</Nav.Link>
            <Nav.Link onClick={() => setChartType('pie')}>Gráfico circular</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Renderizar el gráfico según la opción seleccionada */}
      {renderChart()}
    </div>
  );
};

export default Graphic;