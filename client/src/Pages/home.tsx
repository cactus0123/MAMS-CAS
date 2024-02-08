import React from "react";

/* React Bootstrap Component Imports */
import { Container, Row, Col } from "react-bootstrap";
import { Button, Alert, Nav, Table } from "react-bootstrap";

/* CSS Imports */
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Custom Component and Container Imports */
import CourseTable from "../Components/CourseTable";
import TopMenu from "../Components/TopMenu";
import SelectCourseAndTablesWrapper from "../Containers/SelectCourseAndTablesWrapper";

function Home() {
    return (
        <>
        <Container className="temp-cont" fluid>
        <Row>
          <Col>
            <div className="App">
              <SelectCourseAndTablesWrapper />
            </div>
          </Col>
        </Row>
      </Container>
        </>
    )
}

export default Home;