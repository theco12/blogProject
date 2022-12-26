import { Link } from "react-router-dom";
import Detail from "../../pages/Detail.js";
import About from "../../pages/about.js";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Thecorative</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/detail">Detail</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
