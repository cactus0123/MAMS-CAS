import { useEffect } from "react";
import SelectCourseAndTablesWrapper from "../Containers/SelectCourseAndTablesWrapper";
import { FormArea } from "../Contexts/FormContext";

import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';

import { useStudentData } from "../Contexts/UserDataContext";
import { SelectedCoursesArea } from "../Contexts/SelectedCoursesContext";

import { Navigate } from "react-router-dom";



function SelectCoursePage() {
  

  return (
  <>
    <AuthenticatedTemplate>
      <SelectedCoursesArea>
        <FormArea initialDisplayFeedback={false} >
          <SelectCourseAndTablesWrapper />
        </FormArea>
      </SelectedCoursesArea>
    </AuthenticatedTemplate>
    <UnauthenticatedTemplate>
      <Navigate to="/unauthenticated"/>
    </UnauthenticatedTemplate>
  </>
  )
}
export default SelectCoursePage;