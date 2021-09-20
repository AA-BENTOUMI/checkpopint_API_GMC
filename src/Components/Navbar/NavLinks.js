import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import "./NavLinks.css";
const NavLinks = () => {
  return (
    <div>
      <Navbar bg="info" variant="info">
        <Container>
          <Navbar.Brand href="/">Cocktails Land</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Cocktails">Cocktails List</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavLinks;
