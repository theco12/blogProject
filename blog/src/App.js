/*eslint-disable*/
import "./App.css";
import { useState, useTransition } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Home from "./page/home";
import AboutPage from "./page/aboutpage";
import Button from "./Components/Button";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route />
      </Routes>
    </div>
  );
};

export default App;
