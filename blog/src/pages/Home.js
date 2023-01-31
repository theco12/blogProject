import "../css/home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Shoes from "../components/shoes";
import { useState } from "react";

const Home = () => {
  return (
    <>
      <img src={process.env.PUBLIC_URL + "/images/bg.png"} className="main-bg" />
      <div className="container">
        <Container>
          <Row className="justify-content-md-center">
            <Col md="auto">Detail Page 상품</Col>
          </Row>

          <Row>
            <Col xs={6} md={4}></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
