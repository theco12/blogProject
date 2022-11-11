import "./App.css";
import { Route, Routes, Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul>
        <Link to="/home">home</Link>
        <Link to="/safari">safari</Link>
        <Link to="/about">about</Link>
      </ul>
    </div>
  );
};

export default Header;
