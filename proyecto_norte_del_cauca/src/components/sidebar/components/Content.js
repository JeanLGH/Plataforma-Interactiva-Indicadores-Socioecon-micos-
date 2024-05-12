// chakra imports
import { Box, Flex, Stack } from "@chakra-ui/react";
// Custom components
import Brand from "../components/Brand";
import Links from "../components/Links";
import React from "react";
import SidebarCard from "../components/SidebarCard";

function SidebarContent({ routes }) {
  // SIDEBAR
  return (
    <Flex direction='column' height='100%' pt='25px' px="16px" borderRadius='30px'>
      <Brand />
      <Stack direction='column' mb='auto' mt='8px'>
        <Box ps='20px' pe={{ md: "16px", "2xl": "1px" }}>
          <Links routes={routes} />
        </Box>
      </Stack>

      <Box
        mt='60px'
        mb='40px'
        borderRadius='30px'>
        <SidebarCard />
      </Box>
    </Flex>
  );
}

export default SidebarContent;
