import React from "react"
import { Navbar, Nav, NavItem, Container, Grid, Alert } from "react-bootstrap"
import Wrapper from "./styles"

const Header = props => {
  return (
    <>
    <Wrapper/>
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">React-Bootstrap</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Home
          </NavItem>
          <NavItem eventKey={2} href="#" className={".footer-top"}>
            즐겨찾기
          </NavItem>
          <NavItem eventKey={3} href="#">
            마이페이지
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <a className='red'>test</a>
    </>
  )
}
export default Header
