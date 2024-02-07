import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { Navbar, Button } from 'react-bootstrap';

import logo from '../Media/mams-logo.png';
import loginIcon from '../Media/login-icon.png';

import TopMenuNavbar from './TopMenuNavbar.jsx'

import { Link } from 'react-router-dom';

function TopMenu() {

  return (
  <div className="fixed-top">
  
    <Navbar className="top-nav mams-red">
      <Container className="be-short justify-content-start" fluid>
        <Navbar.Brand className="logo-wrapper" href="#">
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

      <Button className="login-button d-flex align-items-center" variant="link">
        <Link to="../Pages/login">
        <span className="login-text">Login</span>
        <img 
          className="login-icon"
          src={loginIcon} 
          alt="login"
          height={25}
          width={25}
        />
        </Link>
      </Button>
      


    </Navbar>

    <TopMenuNavbar />
  </div>
  )

}

export default TopMenu;