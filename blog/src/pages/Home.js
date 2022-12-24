import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Home = () => {
  return <div css={mainBG}>Home page</div>;
};

const mainBG = css`
  background-image: url("./images/bg.png");
  height: 600px;
`;

export default Home;
