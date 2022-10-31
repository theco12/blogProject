/*eslint-disable*/
import "./App.css";
import { useState, useTransition } from "react";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/detail" element={<div>상세페이지</div>} />
        <Route />

        <Route
          path="/about"
          element={
            <div>
              about page
              <Link></Link>
            </div>
          }
        />
        <Route />
      </Routes>
      ;
    </div>
  );
};

export default App;
