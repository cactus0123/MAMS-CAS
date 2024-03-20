import React from "react";

/* React Bootstrap Component Imports */

/* CSS Imports */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Custom Component and Container Imports */
import TopMenu from "./Components/TopMenu";

import SelectCoursePage from "./Pages/SelectCoursePage";
import ViewCoursePage from "./Pages/ViewCoursePage";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { RequestedCoursesArea } from "./Contexts/RequestedCoursesContext";
import { useIsAuthenticated } from "@azure/msal-react";
import AuthHandler from "./AuthHandler";

// import Column from "antd/es/table/Column";

// select and view are the available contexts

function App() {
  return (
    <>
      <RequestedCoursesArea>
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<AuthHandler />} />

            <Route path="/" element={<TopMenu />}>
              <Route index element={<Navigate to="/select" />} />
              <Route path="select" element={<SelectCoursePage />} />
              <Route path="view" element={<ViewCoursePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </RequestedCoursesArea>
    </>
  );
}

export default App;
