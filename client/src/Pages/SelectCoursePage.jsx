import SelectCourseAndTablesWrapper from "../Containers/SelectCourseAndTablesWrapper";
import { FormValidatedArea } from "../Contexts/FormValidatedContext";

import { useMsal, AuthenticatedTemplate, useIsAuthenticated } from '@azure/msal-react';

import { useStudentData } from "../Contexts/UserDataContext";



function SelectCoursePage() {
  useStudentData();
  return (
  <>
    <FormValidatedArea initialDisplayFeedback={false}>
      <SelectCourseAndTablesWrapper />
    </FormValidatedArea>
  </>
  )
}
export default SelectCoursePage;