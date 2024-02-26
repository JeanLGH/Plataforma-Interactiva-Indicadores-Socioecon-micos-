import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes ,  Route } from "react-router-dom";
import Overview from "./pages/overview";
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from "./pages/reports";
import Team from "./pages/team";
import Home from "./pages/home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>  
        <Route path="/overview" exact component={Overview} />
        <Route path="/reports" exact component={Reports} />
        <Route path="/reports/reports1" exact component={ReportsOne} />
        <Route path="/reports/reports2" exact component={ReportsTwo} />
        <Route path="/reports/reports3" exact component={ReportsThree} />
        <Route path="/team" exact component={Team} />
      </Routes>
    </>
  );
}

export default App;
