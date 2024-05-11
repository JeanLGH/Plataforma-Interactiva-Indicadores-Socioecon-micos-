import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
// chakra imports
import {
  Box,
  Flex,
  HStack,
  Text,
  useColorModeValue,
  Stack,
  Collapse,
  Icon,
} from "@chakra-ui/react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import PropTypes from "prop-types";

const SidebarOption = ({ name, path, subRoutes, icon }) => {
  const location = useLocation();
  const isActive = location.pathname.startsWith(path);
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const activeRoute = (routePath) => {
    const currentPath = location.pathname;
    const parentPaths = path.split("/").slice(0, -1).join("/");
  
    // Si la ruta es "Indicadores" y no hay una ruta hija activa, no se activa
    if (path === "/admin/indicadores" && !currentPath.includes("/admin/indicadores")) {
      return false;
    }
  
    // Si la ruta es una ruta hija, se activa si la ruta actual incluye la ruta padre y la ruta hija
    if (currentPath.includes(parentPaths) && currentPath.includes(routePath)) {
      return true;
    }
  
    // En cualquier otro caso, se activa si la ruta actual coincide exactamente con la ruta dada
    return currentPath === routePath;
  };

  //   Chakra color mode
  let activeColor = useColorModeValue("gray.700", "white");
  let inactiveColor = useColorModeValue("secondaryGray.600", "secondaryGray.600");
  let activeIcon = useColorModeValue("brand.500", "white");
  let textColor = useColorModeValue("secondaryGray.500", "white");
  let brandColor = useColorModeValue("brand.500", "brand.400");

  return (
    <Box>
      <NavLink to={path}>
    <HStack
      spacing={activeRoute(path) ? "22px" : "26px"}
      py="5px"
      ps="10px"
      onClick={toggleExpand}
      cursor={subRoutes && subRoutes.length > 0 ? "pointer" : "auto"}
    >
      <Flex w="100%" alignItems="center" justifyContent="center">
        {icon && (
          <Box
            as={icon} // Renderiza el icono
            color={activeRoute(path.toLowerCase()) ? activeIcon : textColor}
            me="18px"
          />
        )}
        <Text
          me="auto"
          color={activeRoute(path.toLowerCase()) ? activeColor : textColor}
          fontWeight={activeRoute(path.toLowerCase()) ? "bold" : "normal"}
        >
          {name}
        </Text>
      </Flex>
      {subRoutes && subRoutes.length > 0 && (
        <Icon as={isExpanded ? MdExpandLess : MdExpandMore} />
      )}
      <Box
        h="36px"
        w="4px"
        bg={activeRoute(path) ? brandColor : "transparent"}
        borderRadius="5px"
      />
    </HStack>
  </NavLink>
      <Collapse in={isExpanded && subRoutes && subRoutes.length > 0}>
        <Box pl={4}>
          {subRoutes &&
            subRoutes.map((route) => (
              <NavLink to={route.layout + route.path} key={route.path}>

                <HStack
                  spacing={activeRoute(route.path) ? "22px" : "26px"}
                  py="5px"
                  ps="10px"
                >
                  {route.icon && ( // Verifica si hay un icono para la ruta
                    <Box
                      as={route.icon} // Renderiza el icono
                      color={activeRoute(route.path) ? activeIcon : inactiveColor}
                      me="18px"
                    />
                  )}
                  <Text
                    me="auto"
                    color={activeRoute(route.path) ? activeColor : inactiveColor}
                    fontWeight={activeRoute(route.path) ? "bold" : "normal"}
                  >
                    {route.name}
                  </Text>
                  <Box
                    h="36px"
                    w="4px"
                    bg={activeRoute(route.path) ? brandColor : "transparent"}
                    borderRadius="5px"
                  />
                </HStack>
              </NavLink>
            ))}
        </Box>
      </Collapse>
    </Box>
  );
};

SidebarOption.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  subRoutes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      layout: PropTypes.string.isRequired,
    })
  ),
  icon: PropTypes.element,
};

export function SidebarLinks(props) {
  const { routes } = props;

  return (
    <Stack spacing={4}>
      {routes.map((route, index) => (
        <Box key={index}>
          <SidebarOption
            name={route.name}
            path={route.layout + route.path}
            subRoutes={route.children}
            icon={route.icon}
          />
        </Box>
      ))}
    </Stack>
  );
}

SidebarLinks.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      layout: PropTypes.string.isRequired,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          path: PropTypes.string.isRequired,
          layout: PropTypes.string.isRequired,
        })
      ),
      icon: PropTypes.element,
    })
  ),
};

export default SidebarLinks;