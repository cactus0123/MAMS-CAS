import ViewCourseTable from "../Components/ViewCourseTable";

import { Dispatch, SetStateAction, useState, useEffect } from "react";

type Course = {
  studentid: string;
  cid: string;
};

async function getSubmittedCourses(setData: Dispatch<SetStateAction<Course[] | null>>) {
  try {
    const response = await fetch("http://localhost:5100/submitted-courses")
    const data = await response.json();
    setData(data);

  } catch (err) {
    console.error(err);
  }
}

function createHeaders() {
  const headers = ["Course ID"];
  return (
  <>
    {headers.map((header, index) => <th key={index}>{header}</th>)}
  </>
  )
}

function createRows(data: Course[]|null) {
  if (data === null) {
    return (<tr><td>not loaded</td></tr>);
  }
  return (
  <>
    {data.map((entry: Course, index) => <tr key={index}><td key={"cid"}>{entry.cid}</td></tr>)}
  </>
  )
}


function ViewCourseTablesWrapper() {
  const [ data, setData ] = useState<Course[]|null>(null);
  useEffect(() => {
    getSubmittedCourses(setData)
  }, []);

  return (
  <>
    <ViewCourseTable headers={createHeaders()} rows={createRows(data)}/>
  </>
  )
}

export default ViewCourseTablesWrapper;