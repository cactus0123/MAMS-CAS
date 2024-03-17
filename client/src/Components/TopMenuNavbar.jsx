import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { Nav, Navbar } from 'react-bootstrap';

import { NavLink } from "react-router-dom";

function TopMenuNavbar({handleSelect}) {
  return (
  <>
    <Navbar className="bottom-nav justify-content-end">
      <Nav as="ul" onSelect={handleSelect}>
        <Nav.Item className="text-center" as="li">
          <Nav.Link className="noto-sans" as={NavLink} to="/select" eventKey="select">Select Courses</Nav.Link>
        </Nav.Item>
        <Nav.Item className="text-center" as="li">
          <Nav.Link className="noto-sans" as={NavLink} to="/view" eventKey="view">View Selected</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  </>
  )
}



export default TopMenuNavbar;