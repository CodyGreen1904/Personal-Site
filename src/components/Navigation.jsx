import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import title from "../img/CodyBlackAndWhite.jpeg"
import "../styles/Navigation.css"

function Navigation() {
  return (
    <Navbar id="navbar" collapseOnSelect sticky="top" expand="md">
      <Navbar.Brand className="d-sm-block p-3 col-sm-3">
        <Nav.Link href="/">
          <img id="logo" src={title} alt="Site logo" />
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle className="toggle" aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav id="mainNav" className="container-fluid text-center">
          <Nav.Link className="nav_text" href="/">
            About
          </Nav.Link>
          <Nav.Link className="nav_text" href="/PreviousWork">
            Previous Work
          </Nav.Link>
          <Nav.Link className="nav_text" href="/Projects">
            Projects
          </Nav.Link>
          <Nav.Link className="nav_text" href="/Contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
