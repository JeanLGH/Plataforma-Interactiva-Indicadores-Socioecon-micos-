import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Box, Flex, HStack, Text, useColorModeValue } from "@chakra-ui/react";

export function SidebarLinks(props) {
  const location = useLocation();
  const activeColor = useColorModeValue("gray.700", "white");
  const activeIcon = useColorModeValue("brand.500", "white");
  const textColor = useColorModeValue("secondaryGray.500", "white");
  const brandColor = useColorModeValue("brand.500", "brand.400");

  const { routes } = props;

  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  const createLinks = (routes) => {
    return routes.map((route, index) => {
      if (route.category) {
        return (
          <React.Fragment key={index}>
            <Text
              fontSize={"md"}
              color={activeColor}
              fontWeight='bold'
              mx='auto'
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              pt='18px'
              pb='12px'
            >
              {route.name}
            </Text>
            {createLinks(route.items)}
          </React.Fragment>
        );
      } else if (route.layout === "/admin") {
        return (
          <NavLink key={index} to={route.layout + route.path}>
            <Box>
              <HStack
                spacing={activeRoute(route.path.toLowerCase()) ? "22px" : "26px"}
                py='5px'
                ps='10px'
              >
                <Flex w='100%' alignItems='center' justifyContent='center'>
                  <Box
                    color={activeRoute(route.path.toLowerCase()) ? activeIcon : textColor}
                    me='18px'
                  >
                    {route.icon && <route.icon />}
                  </Box>
                  <Text
                    me='auto'
                    color={activeRoute(route.path.toLowerCase()) ? activeColor : textColor}
                    fontWeight={activeRoute(route.path.toLowerCase()) ? "bold" : "normal"}
                  >
                    {route.name}
                  </Text>
                </Flex>
                <Box
                  h='36px'
                  w='4px'
                  bg={activeRoute(route.path.toLowerCase()) ? brandColor : "transparent"}
                  borderRadius='5px'
                />
              </HStack>
            </Box>
          </NavLink>
        );
      }
      return null;
    });
  };

  return <>{createLinks(routes)}</>;
}

export default SidebarLinks;
