// Daily Traffic Dashboards Default
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from "recharts";
import { sumBy } from "lodash"; 
const municipiosOfInterest = ['Santander De Quilichao', 'Puerto Tejada', 'Guachené'];
const removeDuplicates = (arr, prop) => arr.filter((obj, index) => arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === index);
const generateColors = (count) => {
  const palette = [


    "#FF99E6", "#33FFCC",
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
export const barChartDataDailyTraffic = (dataDb) => {
  console.log("Datos de la base de datos:", dataDb);
  const filteredData = dataDb ? removeDuplicates(dataDb.filter((item) => municipiosOfInterest.includes(item.MunicipioAS)), 'Poblacion_DANE') : [];

  // Usar la población de la base de datos como los datos para la gráfica
  const datos = filteredData.map((item) => item.Poblacion_DANE);
  console.log("Datos de población después de filtrar:", datos);
  const datap = datos
  console.log(datap)
  return [
    {
      name: "Poblacion_DANE",
      data: datap,
    },
  ];

};


export const PyramidChart = ({ maleData, femaleData, ageGroups }) => {
  // Calcular la suma total de población para cada grupo de edad
  const totalPopulation = ageGroups.map((ageGroup, index) => {
    return {
      ageGroup: ageGroup,
      total: maleData[index].value + femaleData[index].value
    };
  });

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart layout="vertical" data={totalPopulation}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" hide />
        <YAxis dataKey="ageGroup" type="category" />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" fill="#8884d8" stackId="a" />
        <Bar dataKey="total" fill="#82ca9d" stackId="a" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export const CustomBarChart = ({ data, xAxisDataKey, barDataKey }) => {

  const filteredData = data ? removeDuplicates(data.filter((item) => municipiosOfInterest.includes(item.MunicipioAS)), 'MunicipioAS') : [];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={filteredData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxisDataKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={barDataKey} fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};



export const barChartOptionsDailyTraffic = (dataDb) => {
  const filteredData = dataDb ? removeDuplicates(dataDb.filter((item) => municipiosOfInterest.includes(item.MunicipioAS)), 'MunicipioAS') : [];

  // Usar los municipios de la base de datos como las categorías para la gráfica
  const categories = filteredData.map((item) => item.MunicipioAS);
  console.log(categories);

  return {
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
      categories: ["Santander De Quilichao", "Puerto Tejada", "Guachenée"],
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
  const filteredData = dataDb ? removeDuplicates(dataDb.filter((item) => municipiosOfInterest.includes(item.MunicipioAS)), 'MunicipioAS') : [];
  const colors = generateColors(municipiosOfInterest.length); // Generar colores aleatorios para cada municipio
  console.log(filteredData);
  const labels = filteredData.map((item) => item.MunicipioAS);

  return {
    labels: labels,
    chart: {
      width: "400px",
      height: "400px",
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
  const filteredData = dataDb ? removeDuplicates(dataDb.filter((item) => municipiosOfInterest.includes(item.MunicipioAS)), 'Poblacion_DANE') : [];
  const values = filteredData.map((item) => item.Poblacion_DANE);
  console.log(values);
  return values;
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
