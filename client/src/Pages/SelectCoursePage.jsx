import { useEffect } from "react";
import SelectCourseAndTablesWrapper from "../Containers/SelectCourseAndTablesWrapper";
import { FormArea } from "../Contexts/FormContext";

import { useMsal, AuthenticatedTemplate, useIsAuthenticated } from '@azure/msal-react';

import { useStudentData } from "../Contexts/UserDataContext";
import { SelectedCoursesArea } from "../Contexts/SelectedCoursesContext";



function SelectCoursePage() {
  

  return (
  <>
    <SelectedCoursesArea>
      <FormArea initialDisplayFeedback={false} >
        <SelectCourseAndTablesWrapper />
      </FormArea>
    </SelectedCoursesArea>
  </>
  )
}
export default SelectCoursePage;