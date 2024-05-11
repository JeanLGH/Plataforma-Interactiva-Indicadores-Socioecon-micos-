import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdPerson,
  MdHome,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "./pages/admin/default";
import Profile from "./pages/admin/profile";

const routes = [
  {
    name: "Inicio",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  
  {
    name: "Perfil",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Profile,
  }
];

export default routes;
