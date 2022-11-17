import "../header/header.css";
import { Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <Nav>
        <div className="inner">
          <Link to="/" className="logo">
            Thecorative
          </Link>

          <Link to="/home" className="nav">
            home
          </Link>
          <Link to="/safari" className="nav">
            safari
          </Link>
          <Link to="/about" className="nav">
            about
          </Link>
        </div>
      </Nav>
    </div>
  );
};

const Nav = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 60px;
  background-color: black;
  list-style: none;
`;

export default Header;
