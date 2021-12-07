import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import "../styles/custom.css";
import { useLocation, Link } from "react-router-dom";
function NavBar() {
  const args = JSON.parse(document.getElementById("data").text);
  const dbUsername = args.username;
  const username = useLocation();

  var flag = true;

  if (username.state != null) {
    flag = false;
  }
  return (
    <Navbar
      collapseOnSelect="collapseOnSelect"
      expand="sm"
      variant="dark"
      className="primary"
    >
      <Container>
        {flag ? (
          <Navbar.Brand href="#home">
            It's ShowTimeBB, welcome {dbUsername}
          </Navbar.Brand>
        ) : (
          <Navbar.Brand href="#home">
            It's ShowTimeBB, welcome {username.state}
          </Navbar.Brand>
        )}

        {/*<Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="#community">Community</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="float-right">
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Form method="POST" action="/logout">
              <Button
                className="font-nav-bar"
                variant="outline-danger"
                type="submit"
              >
                Logout
              </Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
