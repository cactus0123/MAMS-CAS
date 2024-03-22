import SelectCourseAndTablesWrapper from "../Containers/SelectCourseAndTablesWrapper";
import ViewCourseTablesWrapper from "../Containers/ViewCourseTablesWrapper";

import { useContext } from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';

import { Navigate } from "react-router-dom";

function ViewCoursePage() {
  return (
  <>
    <AuthenticatedTemplate>
      <div>
        <ViewCourseTablesWrapper />
      </div>
    </AuthenticatedTemplate>
    <UnauthenticatedTemplate>
      <Navigate to="/unauthenticated"/>
    </UnauthenticatedTemplate>
  </>
  )
}
export default ViewCoursePage;