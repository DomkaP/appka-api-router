import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Inspiration from "./components/Inspiration";
import About from "./components/About";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      
      {/* dodanie classname na potrzeby css */}
      <div className="app">
          
          {/* dodanie routingu home do lokalizacji ....3000/ dokładnie. Nic po / nie będzie brane pod uwagę */}
          <Route component={Home} path="/" exact />
          {/* dodanie routingu do inspiration do lokalizacji ....3000/Inspiration */}
          <Route component={Inspiration} path="/inspiration" />
          {/* dodanie routingu do nasaphoto do lokalizacji ....3000/nasaphoto */}
          <Route component={About} path="/about" />          
      </div>
    </BrowserRouter>
  );
}
