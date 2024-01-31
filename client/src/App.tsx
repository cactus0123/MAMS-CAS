import React from "react";
import CourseTable from "./Components/CourseTable.jsx";
import "./App.css";
import { Button, Alert, Nav, Table } from "react-bootstrap";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";

interface Course {
  CID: string;
  TITLE: string;
}

function App() {
  let input = require("./Components/Courses_v1.json");

  const [selectedCourse, setSelectedCourse] = React.useState<Course[]>([]);

  let options = input.map((courses: Course) => {
    return {
      value: courses.CID,
      label: courses.CID,
    };
  });

  return (
    <div className="App">
      <div className="head">
        <ul className="nav justify-content-center mams-red">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
        <div className="card">
          <div className="card-header">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">Test 1</li>
                <li className="breadcrumb-item">Test 2</li>
                <li className="breadcrumb-item active">Test 3</li>
              </ol>
            </nav>
            <Alert variant="primary">Welcome to MAMAS CAS!</Alert>
            <Button>This is a bootstrap button</Button>
          </div>
        </div>
      </div>

      <div className="card courses-card">
        <h2 className="card-title">Available Courses</h2>
        {/* <CourseTable /> */}
        <Select
          options={options}
          onChange={(selectedOption) => {
            console.log(selectedOption);
          }}
        ></Select>
      </div>

      <Table striped bordered hover>
        <tbody></tbody>
      </Table>
    </div>
  );
}

export default App;
