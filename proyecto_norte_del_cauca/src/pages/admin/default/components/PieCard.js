// Chakra imports
import { Box, Flex, Text, Select, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "../../../../components/card/Card.js";
import { PieChart, Pie, Legend as PieLegend, Cell, Tooltip as PieTooltip, ResponsiveContainer } from 'recharts';
import { Tooltip, Legend } from 'recharts';

import { VSeparator } from "../../../../components/separator/Separator";
import React from "react";

export default function Conversion({ data }) {

  // Define los colores para las partes del pastel
  const COLORS = ['#FF99E6', '#33FFCC', '#66994D'];

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardColor = useColorModeValue("white", "navy.700");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card p='30px' align='center' direction='column' w='100%'>
      <Flex
        px={{ base: "0px", "2xl": "10px" }}
        justifyContent='space-between'
        alignItems='center'
        w='100%'
        mb='8px'>
        <Text color={textColor} fontSize='md' fontWeight='600' mt='4px'>
          Your Pie Chart
        </Text>
        <Select
          fontSize='sm'
          variant='subtle'
          defaultValue='monthly'
          width='unset'
          fontWeight='700'>
          <option value='daily'>Daily</option>
          <option value='monthly'>Monthly</option>
          <option value='yearly'>Yearly</option>
        </Select>
      </Flex>

      {data ? (
        <ResponsiveContainer>
          <PieChart width={200} height={200}>
            <Tooltip />
            <Pie
              data={data}
              cx={100}
              cy={100}
              innerRadius={30}
              outerRadius={70}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="Poblacion_DANE"
              nameKey="MunicipioAS"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${entry.MunicipioAS}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <PieLegend
              layout="horizontal"
              align="left"
              verticalAlign="top"
              iconSize={10}
              iconType="square"
              margin={{ top: 10 }}
              content={(props) => {
                const { payload } = props;
                return (
                  <ul>
                    {payload.map((entry, index) => (
                      <li key={`item-${index}`} style={{ fontSize: '10px' }}>
                        <span style={{ backgroundColor: entry.color, marginRight: '4px', display: 'inline-block', width: '10px', height: '10px' }}></span>
                        {entry.value}
                      </li>
                    ))}
                  </ul>
                );
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <div>Loading...</div>
      )}

    </Card>
  );
}
