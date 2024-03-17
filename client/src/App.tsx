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

import SelectCoursePage from "./Pages/SelectCoursePage";
import ViewCoursePage from "./Pages/ViewCoursePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Column from "antd/es/table/Column.js";

// select and view are the available contexts

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TopMenu />}>
            <Route index element={<SelectCoursePage />} />
            <Route path="select" element={<SelectCoursePage />} />
            <Route path="view" element={<ViewCoursePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
