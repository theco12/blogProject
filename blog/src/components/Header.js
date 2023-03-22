import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Detail</Nav.Link>
            <Nav.Link href="/useMemo1">useMemo</Nav.Link>
            <Nav.Link href="/useMemo1">useCallBack</Nav.Link>
            <Nav.Link href="/useMemo1">useReducer111</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
