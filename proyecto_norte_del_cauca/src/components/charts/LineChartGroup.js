import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineChartGroup = ({ data, selectedArea }) => {
  // Obtener todas las claves para las líneas (excepto el año)
  const [filteredData, setFilteredData] = useState([]);
  const lineColors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f0e']; // Puedes agregar más colores si es necesario

  useEffect(() => {
    setFilteredData(data.filter(entry => entry.Area === selectedArea));
  }, [data, selectedArea]);

  // Si no hay datos, no renderizar el gráfico
  if (!filteredData || filteredData.length === 0) {
    return null;
  }

  const keys = Object.keys(filteredData[0]).filter(key => key !== 'year' && key !== 'Area');

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={filteredData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        {keys.map((key, index) => (
         <Line key={index} type="monotone" dataKey={key} stroke={lineColors[index % lineColors.length]} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

// Función para obtener colores aleatorios (puedes personalizar los colores según sea necesario)

export default LineChartGroup;
