import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function InteractiveChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    if (chartRef.current) {
      chartInstance = new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
            label: '# of Votes',
            data: [16, 12, 19, 25, 0, 0],
            backgroundColor: [
              '#D4D2D2',
              '#25DA1C',
              '#0E77C8',
              '#F3D10F'
            ],
            borderColor: [
              '#D4D2D2',
              '#25DA1C',
              '#0E77C8',
              '#F3D10F'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            x: {
              display: false 
            },
            y: {
              display: false 
            }
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              enabled: false,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              displayColors: false,
              titleFont: {
                color: '#fff'
              },
              bodyFont: {
                color: '#fff'
              }
            }
          },
          animation: {
            duration: 2000, 
            easing: 'easeInOutQuart' 
          }
        }
      });
    }


    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} style={{ backgroundColor: '#FFFFFF' }} />;
}

export default InteractiveChart;