import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { Navbar, Button } from 'react-bootstrap';

import logo from '../Media/mams-logo.png';
import loginIcon from '../Media/login-icon.png';

import TopMenuNavbarWrapper from '../Containers/TopMenuNavbarWrapper.tsx'

import { Outlet} from "react-router-dom";

function TopMenu() {

  return (
  <>
    <div className="fixed-top">
    
      <Navbar className="top-nav mams-red">
        <Container className="be-short justify-content-start" fluid>
          <Navbar.Brand className="logo-wrapper" href="/select">
            <img className="logo"
              src={logo} 
              alt="Mass Academy logo"
              height={143}
              width={172}
            />
            
          </Navbar.Brand>
          <Navbar.Text className="nav-title text-white">
            MAMS Course Assignment System
          </Navbar.Text>
        </Container>

        <Button className="login-button d-flex align-items-center" variant="link" href="">
          <span className="login-text">Login</span>
          <img 
            className="login-icon"
            src={loginIcon} 
            alt="login"
            height={25}
            width={25}
          />
        </Button>
        


      </Navbar>

      <TopMenuNavbarWrapper />
    </div>
    
    <div className="App">
      <Container className="temp-cont" fluid>
        <Row>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>

  </>
  )

}

export default TopMenu;