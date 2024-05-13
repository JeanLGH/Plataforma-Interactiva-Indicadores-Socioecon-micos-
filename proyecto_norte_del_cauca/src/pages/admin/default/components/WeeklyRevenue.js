import React from "react";
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "../../../../components/card/Card.js";
import { PyramidChart } from "../../../../variables/charts.js";
import { MdBarChart } from "react-icons/md";

export default function WeeklyRevenue(props) {
  const { ...rest } = props;

  // Datos quemados para la demostración
  const data = [
    { grupo_edad: "0-9", hombres_2022: 100, mujeres_2022: 90 },
    { grupo_edad: "10-19", hombres_2022: 120, mujeres_2022: 110 },
    { grupo_edad: "20-29", hombres_2022: 140, mujeres_2022: 130 },
    { grupo_edad: "30-39", hombres_2022: 160, mujeres_2022: 150 },
    { grupo_edad: "40-49", hombres_2022: 180, mujeres_2022: 170 },
  ];

  const ageGroups = data.map(item => item.grupo_edad);
  const maleData = data.map(item => ({ name: item.grupo_edad, value: item.hombres_2022 }));
  const femaleData = data.map(item => ({ name: item.grupo_edad, value: item.mujeres_2022 }));

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const iconColor = useColorModeValue("brand.500", "white");
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" }
  );
  const bgFocus = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.100" }
  );

  return (
    <Card align='center' direction='column' w='100%' {...rest}>
      <Flex align='center' w='100%' px='15px' py='10px'>
        <Text
          me='auto'
          color={textColor}
          fontSize='xl'
          fontWeight='700'
          lineHeight='100%'>
          Weekly Revenue
        </Text>
        <Button
          align='center'
          justifyContent='center'
          bg={bgButton}
          _hover={bgHover}
          _focus={bgFocus}
          _active={bgFocus}
          w='37px'
          h='37px'
          lineHeight='100%'
          borderRadius='10px'
          {...rest}>
          <Icon as={MdBarChart} color={iconColor} w='24px' h='24px' />
        </Button>
      </Flex>

      <Box h='240px' mt='auto'>
        <PyramidChart maleData={maleData} femaleData={femaleData} ageGroups={ageGroups} />
      </Box>
    </Card>
  );
}
