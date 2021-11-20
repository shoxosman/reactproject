import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export default function TheNavbar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar-bg"
      bg="light"
      variant="light"
    >
      <Container>
        {/* as={Link} means use react-router's Link component under the hood */}
        <Navbar.Brand as={Link} to="/">
          <h1>Aster</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Occasions"
              menuVariant="light"
              className="navbar-bg"
            >
              <NavDropdown.Item as={Link} to="/products/Birthday">
                Birthday
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/Wedding">
                Wedding
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/Graduation">
                Graduation
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Products"
              menuVariant="light"
              className="navbar-bg"
            >
              <NavDropdown.Item as={Link} to="/categories/*">
                Flowers
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categories/*">
                Ballons
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categories/*">
                Tedy bears
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link as={Link} to="/login">
              login
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
