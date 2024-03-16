import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./screens/Landing.jsx";
import Overview from "./pages/overview";
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from "./pages/reports";
import Team from "./pages/team";

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
      <Landing />
     
    </>
   
  );
}
