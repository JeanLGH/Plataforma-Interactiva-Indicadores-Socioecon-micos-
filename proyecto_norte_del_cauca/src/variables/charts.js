// Daily Traffic Dashboards Default
const generateColors = (count) => {
  const palette = [ 
                  
                  
                   "#FF99E6",   "#33FFCC",
                   "#66994D", "#B366CC", "#4D8000", "#B33300", "#CC80CC", 
                   "#66664D", "#991AFF", "#E666FF", "#4DB3FF", "#1AB399",
                   "#E666B3", "#33991A", "#CC9999", "#B3B31A", "#00E680", 
                   "#4D8066", "#809980", "#E6FF80", "#1AFF33", "#999933", 
                   "#FF3380", "#CCCC00", "#66E64D", "#4D80CC", "#9900B3", 
                   "#E64D66", "#4DB380", "#FF4D4D", "#99E6E6", "#6666FF"];
  const colors = [];
  for (let i = 0; i < count; i++) {
    colors.push(palette[i % palette.length]); // Selecciona colores de manera cíclica de la paleta
  }
  return colors;
};
export const barChartDataDailyTraffic = [
  {
    name: "Daily Traffic",
    data: [20, 30, 40, 20, 45, 50, 30],
  },
];

export const barChartOptionsDailyTraffic = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["00", "04", "08", "12", "14", "16", "18"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: true,
      style: {
        colors: "#CBD5E0",
        fontSize: "14px",
      },
    },
  },
  grid: {
    show: false,
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      colorStops: [
        [
          {
            offset: 0,
            color: "#4318FF",
            opacity: 1,
          },
          {
            offset: 100,
            color: "rgba(67, 24, 255, 1)",
            opacity: 0.28,
          },
        ],
      ],
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "40px",
    },
  },
};

// Consumption Users Reports

export const barChartDataConsumption = [
  {
    name: "PRODUCT A",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
  },
  {
    name: "PRODUCT B",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
  },
  {
    name: "PRODUCT C",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
  },
];

export const barChartOptionsConsumption = {
  chart: {
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["17", "18", "19", "20", "21", "22", "23", "24", "25"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: false,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
  },

  grid: {
    borderColor: "rgba(163, 174, 208, 0.3)",
    show: true,
    yaxis: {
      lines: {
        show: false,
        opacity: 0.5,
      },
    },
    row: {
      opacity: 0.5,
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "solid",
    colors: ["#5E37FF", "#6AD2FF", "#E1E9F8"],
  },
  legend: {
    show: false,
  },
  colors: ["#5E37FF", "#6AD2FF", "#E1E9F8"],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "20px",
    },
  },
};



export const getPieChartOptions = (dataDb) => {
  // Extraer los nombres de los municipios del array dataDb
  //Santader de Quilichao, Puerto Tejada, Guachené
  const municipiosOfInterest = ['Santander de Quilichao', 'Puerto Tejada', 'Guachené'];
  const filteredData = dataDb ? dataDb.filter((item) => municipiosOfInterest.includes(item.MunicipioAS)) : [];
  const colors = generateColors(municipiosOfInterest.length); // Generar colores aleatorios para cada municipio

  const labels = filteredData.map((item) => item.MunicipioAS);
  return {
    labels: labels , // Usar los nombres de municipios si están disponibles
    chart: {
      width: "400px", // Ancho del gráfico
      height: "400px", // Alto del gráfico
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    legend: {
      show: true, // Mostrar leyenda
      position: "bottom", // Posición de la leyenda
      horizontalAlign: "center", // Alineación horizontal de la leyenda
      floating: false, // Leyenda flotante
      fontSize: "14px", // Tamaño de fuente de la leyenda
      offsetX: 0, // Desplazamiento horizontal de la leyenda
      offsetY: 0, // Desplazamiento vertical de la leyenda
      onItemClick: {
        toggleDataSeries: true,
      },
      onItemHover: {
        highlightDataSeries: true,
      },
    },
    dataLabels: {
      enabled: false, // Desactivar etiquetas de datos
    },
    hover: { mode: null },
    plotOptions: {
      donut: {
        expandOnClick: false,
        labels: {
          show: false,
        },
      },
    },
    fill: {
      colors: colors, // Colores de relleno
    },
    tooltip: {
      enabled: true, // Activar tooltips
      theme: "dark", // Tema oscuro
    },
  };
};


export const getPieChartData = (dataDb) => {
  const municipiosOfInterest = ['Santander de Quilichao', 'Puerto Tejada', 'Guachené'];
  const filteredData = dataDb ? dataDb.filter((item) => municipiosOfInterest.includes(item.MunicipioAS)) : [];
  const values = filteredData.map((item) => item.Poblacion_DANE);
  console.log(values);
  return values ;
};

// Total Spent Default

export const lineChartDataTotalSpent = [
  {
    name: "Revenue",
    data: [50, 64, 48, 66, 49, 68],
  },
  {
    name: "Profit",
    data: [30, 40, 24, 46, 20, 46],
  },
];

export const lineChartOptionsTotalSpent = {
  chart: {
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 13,
      left: 0,
      blur: 10,
      opacity: 0.1,
      color: "#4318FF",
    },
  },
  colors: ["#4318FF", "#39B8FF"],
  markers: {
    size: 0,
    colors: "white",
    strokeColors: "#7551FF",
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: "circle",
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    showNullDataPoints: true,
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    type: "line",
  },
  xaxis: {
    type: "numeric",
    categories: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
    labels: {
      style: {
        colors: "#A3AED0",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
    column: {
      color: ["#7551FF", "#39B8FF"],
      opacity: 0.5,
    },
  },
  color: ["#7551FF", "#39B8FF"],
};
