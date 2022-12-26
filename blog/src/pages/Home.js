import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "@emotion/styled";
import data from "../data";
import { useState } from "react";
import { Link } from "react-router-dom";
import Detail from "./Detail.js";
import Grid from "../components/common/Grid.js";

const Home = () => {
  const [shoes] = useState(data);

  return (
    <Grid>
      <img src={process.env.PUBLIC_URL + "/images/bg.png"} width="100%" />

      <Container>
        <Row>
          <Col>
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="80%"
            />
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].price}</p>
          </Col>
          <Col>
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              width="80%"
            />
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].price}</p>
          </Col>
          <Col>
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              width="80%"
            />
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].price}</p>
          </Col>
        </Row>
        <Button>
          <Link to="/detail">상세페이지</Link>
        </Button>
      </Container>
    </Grid>
  );
};

const Button = styled.button`
  width: 150px;
  height: 60px;
  border-radius: 50px;
  background-color: #ffe7ab;
  border: none;
  font-size: 16px;
  a {
    text-decoration: none;
    color: #2b2e2c;
  }
`;

export default Home;
