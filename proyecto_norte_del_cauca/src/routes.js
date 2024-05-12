import { MdPerson,MdHome} from "react-icons/md";

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
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: MdPerson ,
    component: Profile,
  }
  
];


export default routes;
