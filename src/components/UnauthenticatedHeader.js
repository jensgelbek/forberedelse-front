import * as React from "react"
import {Nav, Navbar} from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap"

function UnauthenticatedHeader() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <LinkContainer to="/">
        <Navbar.Brand>Running</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer exact to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
         
        </Nav>
        <Nav>
          <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav>
          <LinkContainer to="/signup">
            <Nav.Link>Sign Up</Nav.Link>
          </LinkContainer>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  )
}

export default UnauthenticatedHeader
