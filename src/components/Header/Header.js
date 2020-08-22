import React, { Component } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar
          className="navbar mr-auto"
          collapseOnSelect
          expand="lg"
          variant="dark"
        >
          <a href="/">
            <Image
              width={80}
              src={require("../../assets/logo/logo-white.png")}
            />
          </a>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link className="nav-link" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="nav-link" href="/">
                End
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;
