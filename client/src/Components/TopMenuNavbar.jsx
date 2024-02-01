import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { Nav, Navbar, Button } from 'react-bootstrap';

function TopMenuNavbar() {

  return (
  <>
    <Navbar className="bottom-nav justify-content-end">
      <Nav as="ul">
        <Nav.Item className="text-center" as="li">
          <Nav.Link href="#" eventKey="select">Select Courses</Nav.Link>
        </Nav.Item>
        <Nav.Item className="text-center" as="li">
          <Nav.Link href="#" eventKey="view">View Selected</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  </>
  )
}



export default TopMenuNavbar;