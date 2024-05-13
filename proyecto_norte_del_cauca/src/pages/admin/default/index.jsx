import {
  Box,
  Icon,
  SimpleGrid,
  useColorModeValue,
  AspectRatio,
} from "@chakra-ui/react";
// Assets
import '../../../assets/css/App.css';
// Custom components
import MiniStatistics from "../../../components/card/MiniStatistics";
import IconBox from "../../../components/icons/IconBox";
import React, { useState, useEffect} from 'react';
import {
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import DailyTraffic from "./components/DailyTraffic";
import PieCard from "./components/PieCard";
import TotalSpent from "./components/TotalSpent";
import WeeklyRevenue from "./components/WeeklyRevenue";
import MapComponent from "../../../components/MapComponents/MapComponent";





export default function UserReports() {



  // Chakra Color Mode

  const center = [2.283333, -76.85];
  const [mousePosition, setMousePosition] = useState(null);
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  const [totalPoblacion, setTotalPoblacion] = useState(null);
  //Total Población:
  useEffect(() => {
    const fetchTotalPoblacion = async () => {
        try {
          const response = await fetch('http://localhost:3001/total2022Poblacion');
          if (!response.ok) {
            throw new Error('Error al obtener los datos del servidor');
          }
          const data = await response.json();
          setTotalPoblacion(data);
        } catch (error) {
          console.error('Error al obtener el total de población:', error);
         
        }
      };
    fetchTotalPoblacion();
}, []);



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

  return (


    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap='20px'
        mb='20px'>
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdBarChart} color={brandColor} />
              }
            />
          }
          name='Earnings'
          value= {totalPoblacion ? totalPoblacion[0].total_poblacion : 'Cargando...'}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdAttachMoney} color={brandColor} />
              }
            />
          }
          name='Spend this month'
          value='$642.39'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdFileCopy} color={brandColor} />
              }
            />
          }
          name='Total Projects'
          value='2935'
        />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <TotalSpent />
        <WeeklyRevenue />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
  <AspectRatio ratio={16 / 9}>
    <MapComponent
      center={center}
      mousePosition={mousePosition}
      setMousePosition={setMousePosition}
    />
  </AspectRatio>
  <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
    <DailyTraffic />
    <PieCard />
  </SimpleGrid>
</SimpleGrid>
    </Box>
  );
}
