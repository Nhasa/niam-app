import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const Header = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">Customer Books</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#customers">Customers</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="#logout">
          Log Out
      </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header