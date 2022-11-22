import shoes from "../css/shoes.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import data from "../data";
import { useState } from "react";

const Shoes = () => {
  let [gift] = useState(data);
  console.log(gift);

  return (
    <div>
      <div className="main-bg"></div>
      <div>상품 페이지</div>

      <Container>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shoes;
