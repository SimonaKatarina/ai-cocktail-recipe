import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import {Link} from "react-router-dom"

function CustomNavbar(){
    return (
        <Navbar bg="light" expand="lg" data-bs-theme="light">
        <Container>
         <Navbar.Brand as={Link} to="/">SKH</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav"/>
         <Navbar.Collapse id="basic-navbar-nav"> 
            <Nav className="ml-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/recipes">Recipes</Nav.Link>
                <Nav.Link as={Link} to="/generator">Make your own</Nav.Link>
            </Nav>
          </Navbar.Collapse> 
        </Container> 
        </Navbar>
    );
}

export default CustomNavbar;