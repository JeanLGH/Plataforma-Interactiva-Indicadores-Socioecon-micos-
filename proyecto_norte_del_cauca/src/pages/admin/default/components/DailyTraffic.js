import React, {useEffect, useState} from "react";

// Chakra imports
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import BarChart from "../../../../components/charts/BarChart";

// Custom components
import Card from "../../../../components/card/Card.js";
import {
  barChartDataDailyTraffic,
  barChartOptionsDailyTraffic,
  CustomBarChart,
} from "../../../../variables/charts.js";

export default function DailyTraffic(props) {

  const [dataDb, setDataDb] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/datos2022Poblacion');
        if (!response.ok) {
          throw new Error("Error al obtener los datos del servidor");
        }
        const data = await response.json();
        setDataDb(data);
      } catch (error) {
        console.error("Error al obtener los datos de la base de datos:", error);
      }
    };

    fetchData();
  }, []);

  const { ...rest } = props;
  const getBarData = barChartDataDailyTraffic(dataDb)
  const getBartOptions = barChartOptionsDailyTraffic(dataDb, ["Santander De Quilichao", "Puerto Tejada", "Guachenée"]);

  console.log(getBarData)
  console.log(getBartOptions)
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  return (
    <Card align='center' direction='column' w='100%' {...rest}>
      <Flex justify='space-between' align='start' px='10px' pt='5px'>
        <Flex flexDirection='column' align='start' me='20px'>
          <Flex align='end'>
            <Text
              color={textColor}
              fontSize='30px'
              fontWeight='500'
              lineHeight='100%'>
              Gráfica de Barra de {dataDb && dataDb.length > 0 ? Object.keys(dataDb[0])[1] : "Columna1"} por {dataDb && dataDb.length > 0 ? Object.keys(dataDb[0])[0] : "Columna2"}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Box h='240px' mt='auto'>
        
      <CustomBarChart data={dataDb} xAxisDataKey="MunicipioAS" barDataKey="Poblacion_DANE" />
      
      </Box>
    </Card>
  );
}
