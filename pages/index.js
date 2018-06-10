import React from "react";
import Link from "next/link";
import { Navbar, Nav, NavItem, Container, Grid, Alert } from "react-bootstrap";

export default () => (
  <div>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
      crossorigin="anonymous"
    />
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
    <Grid>
      <Alert bsStyle="warning">
        <strong>Holy guacamole!</strong> Best check yo self, you're not looking
        too good.
      </Alert>
    </Grid>
  </div>
);
