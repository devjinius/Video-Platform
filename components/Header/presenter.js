import React from "react"
import { Navbar, Nav, NavItem, Container, Grid, Alert } from "react-bootstrap"

const Header = props => {
  return (
    <>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              Link
              </NavItem>
            <NavItem eventKey={2} href="#">
              Link
              </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Link Right
              </NavItem>
            <NavItem eventKey={2} href="#">
              Link Right
              </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
export default Header;
