import React from "react";
import "./App.css";
import { Nav, Navbar, NavLink, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand style={{ color: "#ff9800" }}>Gcamports</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" style={{ color: "#000", textDecoration: "none" }}>
              Home |
            </Link>

            <Link to="/Contact" style={{ textDecoration: "none" }}>
              Developers |
            </Link>
            <Link to="/Request" style={{ textDecoration: "none" }}>
              Request New Phone
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <hr></hr>
    </div>
  );
};

export default Header;
