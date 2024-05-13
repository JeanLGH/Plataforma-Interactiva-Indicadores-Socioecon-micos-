import React, { useEffect, useState } from "react";
import {
  Box, 
  Select,
  Flex, 
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "../../../../components/card/Card.js";
import { PyramidChart } from "../../../../variables/charts.js";

export default function WeeklyRevenue(props) {
  const { ...rest } = props;
  const [pyramidData, setPyramidData] = useState(null);
  const [selectedMunicipio, setSelectedMunicipio] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/piramidePoblacional');
        if (!response.ok) {
          throw new Error("Error al obtener los datos del servidor");
        }
        const data = await response.json();
        setPyramidData(data);
      } catch (error) {
        console.error("Error al obtener los datos de la pirámide poblacional:", error);
      }
    };

    fetchData();
  }, []);

  const handleMunicipioChange = (event) => {
    setSelectedMunicipio(event.target.value);
  };


  const municipios = pyramidData ? [...new Set(pyramidData.map(entry => entry.municipio))] : [];

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  return (
    <Card align='center' direction='column' w='100%' {...rest}>
      <Flex align='center' w='100%' px='15px' py='10px'>
        <Text
          me='auto'
          color={textColor}
          fontSize='xl'
          fontWeight='700'
          lineHeight='100%'>
          Piramide Poblacional por Municipios
        </Text>
      </Flex>

      <Box mt='20px'>
        {pyramidData && (
          <Flex justify='center'>
            <Select
              placeholder="Todos los municipios"
              value={selectedMunicipio}
              onChange={handleMunicipioChange}
              bg="white"
              color={textColor}
              borderColor="secondaryGray.400"
              _hover={{ borderColor: "secondaryGray.600" }}
              _focus={{ borderColor: "secondaryGray.600" }}
            >
              {municipios.map(municipio => (
                <option key={municipio} value={municipio}>{municipio}</option>
              ))}
            </Select>
          </Flex>
        )}
      </Box>

      <Box h='240px' mt='auto'>
        {pyramidData && (
          <PyramidChart data={pyramidData} selectedMunicipio={selectedMunicipio} />
        )}
      </Box>
    </Card>
  );
}