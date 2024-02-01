import React from "react";

import { useState } from "react";

import SelectCourseWrapper from "./SelectCourseWrapper";
import SelectedCourseTables from "../Components/SelectedCourseTables";


interface Option {
  value: string;
  label: string;
}

function SelectCourseAndTablesWrapper() {
  
  const [selectedCourses, setSelectedCourses] = useState<Option[]>([]);

  const selectedCoursesElems = selectedCourses.map((cid: Option) => {
    return (
      <tr key={cid.value}>
        <td>{cid.value}</td>
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

export default SelectCourseAndTablesWrapper;