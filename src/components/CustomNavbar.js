import React from "react";
import {Link} from "react-router-dom"
import './CustomNavbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CustomNavbar() {
  return (
    <>
      <Navbar className="Navbar" bg="light" data-bs-theme="light">
        <Container className="nav-container">
          <Navbar.Brand className="navbar-title" as={Link} to="/">SKH</Navbar.Brand>
          <Nav className="nav-link justify-content-end">
           <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/recipes">Recipes</Nav.Link>
            <Nav.Link as={Link} to="/generator">Make your own</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </> 
  );
}

export default CustomNavbar;