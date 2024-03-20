import SelectCourseAndTablesWrapper from "../Containers/SelectCourseAndTablesWrapper";
import { FormValidatedArea } from "../Contexts/FormValidatedContext";

import { useMsal, AuthenticatedTemplate } from '@azure/msal-react';

import { loginRequest } from '../authConfig';
import { callMsGraph } from '../graph';
import { useEffect } from "react";


const TempComponent = () => {
  const { instance, accounts } = useMsal();

  function RequestProfileData() {
    if (accounts.length > 0) {
      instance
        .acquireTokenSilent({
          ...loginRequest,
          account: accounts[0],
        })
        .then((response) => {
          callMsGraph(response.accessToken).then((response) => console.log(response));
        });
    }
  }
  useEffect(() => {
    RequestProfileData();
  });
  return (<></>);
}

function SelectCoursePage() {

  return (
  <>
    <FormValidatedArea initialDisplayFeedback={false}>
      <SelectCourseAndTablesWrapper />
    </FormValidatedArea>
    <AuthenticatedTemplate><TempComponent /></AuthenticatedTemplate>
  </>
  )
}
export default SelectCoursePage;