import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useSelector ,useDispatch } from "react-redux";
import CategoriesComp from "./CategoriesComp";
import { removeUser } from "../features/userSlice";

export default function TheNavbar() {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  return (
  
     
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar-bg"
      bg="light"
      variant="light"
      fixed="top"
    >
      
      <Container>
        
        <Navbar.Brand as={Link} to="/">
          <span><img src="https://cutewallpaper.org/21/purple-flowers-white-background/Dark-Purple-Flower-White-Background-Wallpapers-Jobs.jpg"  style={{width:"50px"}}  alt=""/></span>
         
        </Navbar.Brand>
        <Navbar.Brand as={Link} to="/">
         
          <span><h2>Aster</h2></span> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav-first">
            <Nav.Link as={Link} to="/">
              <h5>Home</h5>
            </Nav.Link>

            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Products"
              menuVariant="light"
              
            >
              <CategoriesComp/>
            </NavDropdown>
            
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link as={Link} to="/Cart">
             {cart.length} <FaCartPlus style={{ fontSize: "2rem" }} />
            </Nav.Link>
            {!user && (<Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>)}
            {!user &&(<Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>)}
            {user && (<Nav.Link as={Link} to="/login">
              <h5 onClick={() => {
                    dispatch(removeUser());
                  }}>Logout</h5>
            </Nav.Link>)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  );
}
