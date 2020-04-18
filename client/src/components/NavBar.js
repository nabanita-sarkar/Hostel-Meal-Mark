import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <Navbar
        bg="dark"
        variant="dark"
        expand="sm"
        style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
      >
        <Navbar.Brand href="./">
          <b>PC</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto flex-column flex-sm-row">
            <Nav.Link href="./">Home</Nav.Link>
            <Nav.Link href="./Register">Register</Nav.Link>
            <Nav.Link href="./Check">Check</Nav.Link>
            <Nav.Link href="./Mark">Mark</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
