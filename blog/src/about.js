import { useState, useEffect } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  height: 100px;
  background-color: beige;
`;

const TextBox = styled.div`
  color: black;
  font-size: 40px;
  justify-content: center;
`;

const About = () => {
  const [alert, setAlert] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }, [count]);

  return (
    <div>
      {alert == true ? (
        <Box>
          <TextBox>3초이내 구매시 할인</TextBox>
        </Box>
      ) : null}

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      {count}
    </div>
  );
};

export default About;
