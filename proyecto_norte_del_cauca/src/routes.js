import React from "react";
import { MdPerson,MdHome,MdBarChart, MdGroups, MdOutlineHealthAndSafety, MdOutlineMenuBook, MdOutlineMonetizationOn, MdOutlineEco } from "react-icons/md";

import MainDashboard from "./pages/admin/default";
import Profile from "./pages/admin/profile/";
import Salud from "./pages/admin/profile";
import Demografia from "./pages/admin/profile";

const routes = [
  {
    name: "Inicio",
    layout: "/admin",
    path: "/",
    icon: MdHome,
    component: MainDashboard,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: MdPerson,
    component: Profile,
  },
  {
    name: "Indicadores",
    layout: "/admin",
    icon: MdBarChart,
    path: "/",
    children: [
      {
        name: "Demografía",
        layout: "/admin",
        icon: MdGroups,
        path: "/demografia",
        component: Demografia,
      },
      {
        name: "Salud",
        layout: "/admin",
        icon: MdOutlineHealthAndSafety,
        path: "/salud",
        component: Salud,
      },
      {
        name: "Educación",
        layout: "/admin",
        icon: MdOutlineMenuBook,
        path: "/educacion",
        component: Salud,
      },
      {
        name: "Finanzas",
        layout: "/admin",
        icon: MdOutlineMonetizationOn,
        path: "/finanzas",
        component: Salud,
      },
      {
        name: "Medio Ambiente",
        layout: "/admin",
        icon: MdOutlineEco,
        path: "/ambiental",
        component: Salud,
      },
    ],
  },
];


export default routes;
