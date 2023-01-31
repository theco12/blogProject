import data from "../data";
import { useState } from "react";

const Shoes = (props) => {
  const [shoes, setShoes] = useState(data);

  return (
    <>
      <img src={`https://codingapple1.github.io/shop/shoes` + (props.i + 1) + ".jpg"} width="80%" />
      <h1>{shoes.title}</h1>
      <p>{shoes.content}</p>
    </>
  );
};
export default Shoes;
