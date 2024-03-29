import ViewCourseTable from "../Components/ViewCourseTable";

import { Dispatch, SetStateAction, useContext } from "react";

import { useStudentData } from "../Contexts/UserDataContext";

type RequestedCourse = {
  studentid: string;
  cid: string;
};


function createHeaders() {
  const headers = ["Course ID"];
  return (
  <>
    {headers.map((header, index) => <th key={index}>{header}</th>)}
  </>
  )
}

function createRows(data: RequestedCourse[]|null) {
  if (data === null) {
    return (<tr><td>not loaded</td></tr>);
  }
  return (
  <>
    {data.map((entry: RequestedCourse, index) => <tr key={index}><td key={"cid"}>{entry.cid}</td></tr>)}
  </>
  )
}


function ViewCourseTablesWrapper() {
  const { requestedCourses } = useStudentData();
  
  return (
  <>
    <ViewCourseTable headers={createHeaders()} rows={createRows(requestedCourses)}/>
  </>
  )
}

export default ViewCourseTablesWrapper;