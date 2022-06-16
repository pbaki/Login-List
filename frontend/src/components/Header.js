import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Form, FormControl } from "react-bootstrap";
const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Item-List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <FormControl type="text" placeholder="Search" className="fm1" />
          </Nav>
          <Nav className="me-auto">
            <NavDropdown title="Profile nickname" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/1">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
