import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Register from "./pages/register";
import Login from "./pages/login";
import Demografia from "./pages/demography";
import { ChakraProvider } from '@chakra-ui/react';

import Salud from "./pages/health";
import Security from "./pages/security";
import Information from "./pages/information";
import Accessibility from './pages/accessibility';
import Admin from './pages/admin/default';
import AdminLayout from './layouts/admin';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/flexboxgrid.min.css";
import './styles/index.css';
import theme from './theme/theme';
import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';


import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "demography",
    element: <Demografia />,
  },

  {
    path: "health",
    element: <Salud />,
  },
  {
    path: "security",
    element: <Security />,
  },
  {
    path: "information",
    element: <Information />,
  },
  {
    path: "accessibility",
    element: <Accessibility />,
  },
  
  {
    path: "admin",
    element: <AdminLayout />, // Renderiza el componente Admin directamente
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <ThemeEditorProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </ThemeEditorProvider>
    </React.StrictMode>,
  </ChakraProvider>,
);
reportWebVitals();
