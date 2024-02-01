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

  const [selectedCourses, setSelectedCourses] = React.useState<string[]>([]);

  let options = input.map((courses: Course) => {
    return {
      value: courses.CID,
      label: courses.TITLE,
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
          onChange={(
            selectedOption: { value: string; label: string } | null
          ) => {
            if (selectedOption != null) {
              console.log(selectedOption.value);
              setSelectedCourses([...selectedCourses, selectedOption.value]);
            }
          }}
        ></Select>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Course ID</th>
          </tr>
        </thead>
        <tbody>
          {selectedCourses.map((cid: string) => {
            const course = input.find((c: Course) => c.CID === cid);
            return (
              <tr key={cid}>
                <td>{cid}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
