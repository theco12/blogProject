import styled from "styled-components";
import React from "react";
import { useRef } from "react";
import Button from "./button.js";

const Home = () => {
  return (
    <div>
      <label htmlFor="ex_file">
      </label>
      <input
        type="file"
        id="ex_file"
        accept="image/jpg, image/png, image/jpeg"
        onChange={(e) => console.log(e.target.files[0])}
      />
    </div>
  );
};

export default Home;
