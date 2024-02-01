import React from "react";

import { useState } from "react";

import SelectCourseWrapper from "./SelectCourseWrapper";
import SelectedCourseTables from "../Components/SelectedCourseTables";

function CourseSelectAndTablesWrapper() {
  
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

  const selectedCoursesElems = selectedCourses.map((cid: string) => {
    return (
      <tr key={cid}>
        <td>{cid}</td>
      </tr>
    );
  })

  return (
    <>
    <SelectCourseWrapper selectedCourses={selectedCourses} setSelectedCourses={setSelectedCourses}/>
    <SelectedCourseTables selectedCourses={selectedCoursesElems}/>
    </>
  )
}

export default CourseSelectAndTablesWrapper;