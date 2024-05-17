import React, { useState } from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, LineChart, Line, ComposedChart, Area, Scatter } from 'recharts';
import { PieChart, Pie, Legend as PieLegend, Cell, Tooltip as PieTooltip } from 'recharts';
import { Navbar, Nav } from 'react-bootstrap';

const Graphic = ({ totalPoblacion }) => {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AD40AF'];

    const [chartType, setChartType] = useState('bar');

    const renderChart = () => {
        if (chartType === 'bar') {
            return (
                <BarChart
                    width={500}
                    height={300}
                    data={totalPoblacion}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="MunicipioAS" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Poblacion_DANE" fill="#8884d8" />
                </BarChart>
            );
        } else if (chartType === 'pie') {
            return (
                <PieChart width={400} height={400}>
                    <PieTooltip />
                    <Pie
                        data={totalPoblacion}
                        cx={200}
                        cy={200}
                        innerRadius={60}
                        outerRadius={140}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="Poblacion_DANE"
                        nameKey="MunicipioAS"
                    >
                        {totalPoblacion.map((entry, index) => (
                            <Cell key={`cell-${entry}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <PieLegend
                        layout="horizontal"
                        align="center"
                        verticalAlign="bottom"
                        iconSize={10} // Tamaño de los iconos de la leyenda
                        iconType="square"
                        margin={{ top: 10 }} // Forma de los iconos de la leyenda
                    />
                </PieChart>
            );
        } else if (chartType === 'line') {

            return (
                <LineChart
                    width={500}
                    height={300}
                    data={totalPoblacion}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="MunicipioAS" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Poblacion_DANE" stroke="#8884d8" activeDot={{ r: 8 }} name="PoblaciÃ³n" />
                </LineChart>
            );
        } else if (chartType === 'linearea') {
            const dataDos = totalPoblacion.slice(0, 6).map((item, index) => ({
                name: item.MunicipioAS,
                uv: Math.floor(Math.random() * 1000),
                pv: Math.floor(Math.random() * 1000),
                amt: Math.floor(Math.random() * 1000),
                cnt: Math.floor(Math.random() * 1000),
            }));
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
                        <Nav.Link onClick={() => setChartType('pie')}>Circular</Nav.Link>
                        <Nav.Link onClick={() => setChartType('line')}>Línea</Nav.Link>
                        <Nav.Link onClick={() => setChartType('linearea')}>Línea-Área</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            {renderChart()}
        </div>
    );
};

export default Graphic;
