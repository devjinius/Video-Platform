<<<<<<< HEAD
import React from "react"
import { Navbar, Nav, NavItem } from "react-bootstrap"
import boot from "common/css/bootstrap.min.css"

const Navigator = props => {
  return (
    <div>test</div>
    // <Navbar inverse collapseOnSelect>
    //   <Navbar.Header>
    //     <Navbar.Brand>
    //       <a href="#brand">React-Bootstrap</a>
    //     </Navbar.Brand>
    //     <Navbar.Toggle />
    //   </Navbar.Header>
    //   <Navbar.Collapse>
    //     <Nav pullRight>
    //       <NavItem eventKey={1} href="#">
    //         Home
    //       </NavItem>
    //       <NavItem eventKey={2} href="#">
    //         즐겨찾기
    //       </NavItem>
    //       <NavItem eventKey={3} href="#">
    //         마이페이지
    //       </NavItem>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
  )
}
export default Navigator
=======
import React from 'react';
import { Navbar, Nav, NavItem, Container, Grid, Alert } from 'react-bootstrap';

const Navigator = props => {
  return (
    <Navbar inverse collapseOnSelect fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">React-Bootstrap</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="/">
            Home
          </NavItem>
          <NavItem eventKey={2} href="#">
            즐겨찾기
          </NavItem>
          <NavItem eventKey={3} href="/mypage">
            마이페이지
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigator;
>>>>>>> bab6bdcd482d94a2bb85b458a2f122ef96a032f9
