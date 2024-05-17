import React from "react";
import { BarChart, CartesianGrid, Legend, XAxis, YAxis, Tooltip, Bar, ResponsiveContainer } from 'recharts';

const PyramidChart = ({ data, selectedMunicipio }) => {
  // Filtrar los datos por el municipio seleccionado
  const filteredData = selectedMunicipio ? data.filter(entry => entry.municipio === selectedMunicipio) : data;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={filteredData} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis type="category" dataKey="grupo_edad" />
        <Tooltip />
        <Legend />
        <Bar dataKey="hombres_2022" fill="#8884d8" stackId="a" />
        <Bar dataKey="mujeres_2022" fill="#82ca9d" stackId="a" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PyramidChart;
