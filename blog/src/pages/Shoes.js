import shoes from "../css/shoes.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import data from "../data";
import { useState } from "react";
import styled from "styled-components";

const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 800px;
  padding: 20px;
`;

const Shoes = () => {
  let [gift] = useState(data);
  console.log(gift);

  return (
    <div>
      <div className="main-bg"></div>

      <Content>
        <div>
          어떻게 메타버스에서도 <br />
          검증된 심리상담이 가능할까요?
        </div>
        <div>
          메타포레스트는 멘탈 헬스, 심리상담 전문가가 <br />
          철저한 검증을 거쳐 만들고 있습니다
        </div>

        <Container>
          <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>
      </Content>
    </div>
  );
};

export default Shoes;
