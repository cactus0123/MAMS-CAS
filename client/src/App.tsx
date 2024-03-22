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

import { StudentDataArea, UserDataArea } from "./Contexts/UserDataContext";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import AuthHandler from "./AuthHandler";
import UnauthenticatedPage from "./Pages/UnauthenticatedPage";

// import Column from "antd/es/table/Column";


function App() {
  return (
    <>
      <UserDataArea>
        <StudentDataArea>
          <BrowserRouter>
            <Routes>
              <Route path="/auth/redirect" element={<div>Processing authentication response...</div>} />
              <Route path="/auth" element={<AuthHandler />} />

              <Route path="/" element={<TopMenu />}>
                <Route index element={<Navigate to="/select" />} />
                <Route path="select" element={<SelectCoursePage />} />
                <Route path="view" element={<ViewCoursePage />} />
                <Route path="unauthenticated" element={<UnauthenticatedPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </StudentDataArea>
      </UserDataArea>
    </>
  );
}

export default App;
