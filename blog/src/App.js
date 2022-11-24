import logo from "./logo.svg";
import "./App.css";
import Header from "./header/header.js";
import Safari from "./safari.js";
import Home from "./home.js";
import About from "./about.js";
import { Route, Routes, Link, Outlet } from "react-router-dom";
import Shoes from "./pages/Shoes.js";
import Event from "./event/event.js";
import One from "./event/one.js";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Shoes />} />
      </Routes>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/safari" element={<Safari />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </div>
  );
}

export default App;
