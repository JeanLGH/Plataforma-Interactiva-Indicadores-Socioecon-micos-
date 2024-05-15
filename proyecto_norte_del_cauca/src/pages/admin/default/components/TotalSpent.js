import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "../../../../components/card/Card.js";
import LineChartGroup from  "../../../../variables/LineChartGroup.js";;

export default function TotalSpent(props) {
  const { ...rest } = props;
  const [originalData, setOriginalData] = useState(null); // Nuevo estado para almacenar los datos originales
  const [lineChartData, setLineChartData] = useState(null); // Estado para almacenar los datos transformados
  const [selectedArea, setSelectedArea] = useState("Total");
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/proyeccionHogares');
        if (!response.ok) {
          throw new Error("Error al obtener los datos del servidor");
        }
        const data = await response.json();
        setOriginalData(data); // Almacena los datos originales
        transformData(data, selectedArea); // Transforma los datos al inicio con el área seleccionada
        extractAreas(data);
      } catch (error) {
        console.error("Error al obtener los datos del gráfico de líneas:", error);
      }
    };
    fetchData();
  }, []);

  const transformData = (data, area) => {
    const transformedData = [];
    const years = Object.keys(data[0]).filter(key => key.match(/^\d{4}$/));
    years.forEach(year => {
      const entry = { year: parseInt(year) };
      data.forEach(d => {
        if (d[year] && d.Area === area) {
          entry[d.Nombre_Municipio] = d[year];
        }
      });
      transformedData.push(entry);
    });
    setLineChartData(transformedData); // Actualiza los datos transformados
  };

  const extractAreas = (data) => {
    const uniqueAreas = [...new Set(data.map(d => d.Area))];
    setAreas(uniqueAreas);
  };

  const handleAreaChange = (event) => {
    const newArea = event.target.value;
    setSelectedArea(newArea);
    transformData(originalData, newArea); // Actualiza los datos transformados al cambiar el área seleccionada
  };

  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <Card
      justifyContent='center'
      align='center'
      direction='column'
      w='100%'
      mb='0px'
      {...rest}
    >
      <Flex justify='space-between' ps='0px' pe='20px' pt='5px'>
        <Flex align='center' w='100%'>
          <Text
            me='auto'
            color={textColor}
            fontSize='xl'
            fontWeight='700'
            lineHeight='100%'
          >
            Proyección de Hogares
          </Text>
          <Select value={selectedArea} onChange={handleAreaChange}>
            {areas.map(area => (
              <option key={area} value={area}>{area}</option>
            ))}
          </Select>
        </Flex>
      </Flex>
      <Flex w='100%' flexDirection={{ base: "column", lg: "row" }}>
        <Box minH='260px' minW='100%' mt='auto'>
          {lineChartData && <LineChartGroup data={lineChartData} />}
        </Box>
      </Flex>
    </Card>
  );
}