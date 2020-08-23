import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import "../styles/scss/NavHeader.scss";

function NavHeader() {
  return (
    <div>
      <Navbar
        className="navbar mr-auto"
        collapseOnSelect
        expand="xl"
        variant="light"
      >
        <a href="/">
          <Image width={80} src={require("../assets/logo/logo-black.png")} />
        </a>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link className="nav-link" href="/">
              <div class="btn from-left">Home</div>
            </Nav.Link>
            <Nav.Link className="nav-link" href="/">
              <div class="btn from-left">Music</div>
            </Nav.Link>
            <Nav.Link className="nav-link" href="/">
              <div class="btn from-left">About</div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default NavHeader;
