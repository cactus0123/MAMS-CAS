import React from "react";
import CourseTable from "./Components/CourseTable.jsx";
import "./App.css";
import { Button, Alert, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
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
            <Alert variant="danger">This is an alert</Alert>
            <Button>This is a bootstrap button</Button>
          </div>
        </div>
      </div>

      <div className="card courses-card">
        <h2 className="card-title">Available Courses</h2>
        <CourseTable />
      </div>
    </div>
  );
}

export default App;
