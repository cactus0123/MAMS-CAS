import React from "react";

/* React Bootstrap Component Imports */
import { Container, Row, Col } from "react-bootstrap";
import { Button, Alert, Nav, Table } from "react-bootstrap";

/* CSS Imports */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Custom Component Imports */
import CourseTable from "./Components/CourseTable";
import TopMenu from "./Components/TopMenu";
import SelectCourseWrapper from "./Containers/SelectCourseWrapper"
import CourseSelectAndTablesWrapper from "./Containers/CourseSelectAndTablesWrapper";

// import Column from "antd/es/table/Column.js";


function App() {

  return (
    <>
    {/* menu is this thing here*/}
    <TopMenu />

    <Container className="temp-cont" fluid>
      <Row>
        <Col>
          <div className="App">

            <CourseSelectAndTablesWrapper />

            {/* <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Course ID</th>
                </tr>
              </thead>
              <tbody>
                {selectedCourses.map((cid: string) => {
                  return (
                    <tr key={cid}>
                      <td>{cid}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table> */}
          </div>
        </Col>
      </Row>
    </Container>

    </>
  );
}

export default App;

