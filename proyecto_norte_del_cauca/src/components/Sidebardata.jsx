import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md';
import * as GiIcons from 'react-icons/gi';
import * as RxIcons from "react-icons/rx";

export const SidebarData = [
  {
    title: 'Inicio',
    path: '/overview',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Graficas',
    path: '/overview',
    icon: <AiIcons.AiFillSignal  />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Reports',
    
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Demografía',
        path: '/demography',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Salud',
        path: '/health',
        icon: <RiIcons.RiMentalHealthFill  />,
        cName: 'sub-nav'
      },
      {
        title: 'Educación',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosSchool  />
      },
      {
        title: 'Seguridad',
        path: '/reports/reports3',
        icon: <AiIcons.AiFillSecurityScan  />
      },
      {
        title: 'Medio Ambiente',
        path: '/reports/reports3',
        icon: <MdIcons.MdForest  />
      }
      ,
      {
        title: 'Finanzas municipales',
        path: '/reports/reports3',
        icon: <GiIcons.GiReceiveMoney  />
      }
    ]
  },
  {
    title: 'Configuración',
    icon: <IoIcons.IoMdSettings />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Usuario',
        path: '/information',
        icon: <FaIcons.FaRegUserCircle />,
        cName: 'sub-nav'
      },
      {
        title: 'Seguridad',
        path: '/security',
        icon: <MdIcons.MdOutlineSecurity />,
        cName: 'sub-nav'
      },
      {
        title: 'Accesibilidad',
        path: '/accessibility',
        icon: <RxIcons.RxAccessibility  />,
        cName: 'sub-nav'
      },
      // Agrega más opciones según sea necesario
    ]
  },
  {
    title: 'Logout',
    path: '/team',
    icon: <IoIcons.IoIosExit  />
  }
];
