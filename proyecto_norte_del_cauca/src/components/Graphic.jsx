import React, { useState } from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, LineChart, Line, ComposedChart, Area,Scatter  } from 'recharts';
import { PieChart, Pie, Legend as PieLegend, Cell, Tooltip as PieTooltip } from 'recharts';
import { Navbar, Nav } from 'react-bootstrap';

const Graphic = () => {
  const data = [
    { name: 'Page A', value: 4000 },
    { name: 'Page B', value: 3000 },
    { name: 'Page C', value: 2000 },
    { name: 'Page D', value: 2780 },
    { name: 'Page E', value: 1890 },
  ];

  const dataDos = [
    {
      name: 'Page A',
      uv: 590,
      pv: 800,
      amt: 1400,
      cnt: 490,
    },
    {
      name: 'Page B',
      uv: 868,
      pv: 967,
      amt: 1506,
      cnt: 590,
    },
    {
      name: 'Page C',
      uv: 1397,
      pv: 1098,
      amt: 989,
      cnt: 350,
    },
    {
      name: 'Page D',
      uv: 1480,
      pv: 1200,
      amt: 1228,
      cnt: 480,
    },
    {
      name: 'Page E',
      uv: 1520,
      pv: 1108,
      amt: 1100,
      cnt: 460,
    },
    {
      name: 'Page F',
      uv: 1400,
      pv: 680,
      amt: 1700,
      cnt: 380,
    },
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
          <PieTooltip />
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
    } else if (chartType === 'line') {
      return (
        <LineChart
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
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      );
    } else if (chartType === 'linearea') {
      return (
        <ComposedChart
          width={500}
          height={400}
          data={dataDos}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          <Scatter dataKey="cnt" fill="red" />
        </ComposedChart>
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
            <Nav.Link onClick={() => setChartType('pie')}>circular</Nav.Link>
            <Nav.Link onClick={() => setChartType('line')}>línea</Nav.Link>
            <Nav.Link onClick={() => setChartType('linearea')}>Línea-Área</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    
      {renderChart()}
    </div>
  );
};

export default Graphic;