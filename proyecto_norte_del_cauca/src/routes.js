import { MdPerson, MdHome } from "react-icons/md";

import MainDashboard from "./pages/admin/default";
import Profile from "./pages/admin/profile";


const routes = [
  {
    name: "Inicio",
    layout: "/admin",
    path: "/default",
    icon: MdHome,
    component: MainDashboard,
  },
  {
    name: "Perfil",
    layout: "/admin",
    path: "/profile",
    icon: MdPerson ,
    component: Profile,
  },
  {
    name: "Indicadores",
    layout: "/admin",
    category: true,
    items: [
      {
        name: "Demografía",
        layout: "/admin",
        path: "/demography",
        icon: MdPerson,
        component: Profile,
      },
      {
        name: "Salud",
        layout: "/admin",
        path: "/health",
        icon: MdHome,
        component: MainDashboard,
      },
      {
        name: "Educación",
        layout: "/admin",
        path: "/education",
        icon: MdPerson,
        component: Profile,
      },
    ],
  },
];

export default routes;
