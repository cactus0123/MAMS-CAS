import React from "react";

/* React Bootstrap Component Imports */
import { Container, Row, Col } from "react-bootstrap";
import { Button, Alert, Nav, Table } from "react-bootstrap";

/* CSS Imports */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Custom Component and Container Imports */
import CourseTable from "./Components/CourseTable";
import TopMenu from "./Components/TopMenu";
import SelectCourseAndTablesWrapper from "./Containers/SelectCourseAndTablesWrapper";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./Pages/Login";
import Home from "./Pages/Home";

// import Column from "antd/es/table/Column.js";

function App() {
  return (
    <>
    <Router>
      {/* menu is this thing here*/}
      <TopMenu />

      <Routes>
        <Route path="/home" element = { <Home /> } />
        <Route path="/login" element = { <Login /> } />
      </Routes>
    </Router>
    </>
  );
}

export default App;
