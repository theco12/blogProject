import { Link } from "react-router-dom";
import Detail from "./Detail.js";
import styled from "styled-components";

const NavContainer = styled.div`
  padding: 20px;
`;

const Header = () => {
  return (
    <NavContainer>
      <Link to="/Home">Home</Link>
      <Link to="/Detail">Detail</Link>
    </NavContainer>
  );
};

export default Header;
