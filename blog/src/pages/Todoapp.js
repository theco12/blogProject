import React from "react";
import styled from "styled-components";

const styledButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
`;

const Todoapp = () => {
  return (
    <div>
      <styledButton>버튼</styledButton>
    </div>
  );
};

export default Todoapp;
