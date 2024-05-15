// src/InteractiveGraphPage.js
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const InteractiveGraphPage = () => {
  const [chartData, setChartData] = useState({
    labels: ['Categoría 1', 'Categoría 2', 'Categoría 3'],
    datasets: [
      {
        label: 'Datos de ejemplo',
        data: [12, 19, 30],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  });

  return (
    <div>
      <h2>Gráfico Interactivo</h2>
      <Bar
        data={chartData}
        options={{
          scales: {
            x: {
              type: 'category',
            },
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default InteractiveGraphPage;
