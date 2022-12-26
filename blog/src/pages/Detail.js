import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import data from "../data.js";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Grid from "../components/common/Grid.js";

const Detail = () => {
  const [shoes] = useState(data);
  const { id } = useParams();
  const list = Number(id) + 1;

  return (
    <Grid>
      <h2>Detail page</h2>

      <img
        src={"https://codingapple1.github.io/shop/shoes" + list + ".jpg"}
        width="40%"
      />
      <h4>{shoes[id].title}</h4>
      <p>{shoes[id].content}</p>
      <p>{shoes[id].price}</p>

      <button>
        <Link to="/">주문하기</Link>
      </button>
    </Grid>
  );
};

export default Detail;
