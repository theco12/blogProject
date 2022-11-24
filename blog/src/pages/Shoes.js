import shoes from "../css/shoes.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import data from "../data.js";
import { useState } from "react";
import styled from "styled-components";

const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 800px;
  padding: 20px;
  position: relative;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
`;

const Shoes = () => {
  let [gift] = useState(data);
  console.log(gift[0]);

  return (
    <div>
      <div className="main-bg"></div>
      <div>
        어떻게 메타버스에서도 <br />
        검증된 심리상담이 가능할까요?
      </div>
      <div>
        메타포레스트는 멘탈 헬스, 심리상담 전문가가 <br />
        철저한 검증을 거쳐 만들고 있습니다
      </div>
      <Content>
        <Item gift={gift[0]} i={1} />
        <Item gift={gift[1]} i={2} />
        <Item gift={gift[2]} i={3} />
      </Content>
    </div>
  );
};

function Item(props) {
  return (
    <div>
      <img
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        width="80%"
      />
      <h4>{props.gift.title}</h4>
      <p>{props.gift.price}</p>
    </div>
  );
}

export default Shoes;
