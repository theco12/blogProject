import logo from "./logo.svg";
import "./App.css";
import Header from "./header.js";
import Safari from "./safari.js";
import Home from "./home.js";
import About from "./about.js";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/safari" element={<Safari />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
