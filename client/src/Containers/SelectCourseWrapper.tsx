import React from "react";

import SelectCourse from "../Components/SelectCourse";


interface Course {
  CID: string;
  TITLE: string;
}

type courseSelecterSetter = (input: string[]) => void;

/**
 * Gets data from courses in Courses_v1.json
 * 
 * @returns array of objects each containing a value and label equal to a course CID
 */
function getCourseOptions(): {value: string, label: string}[] {
  let input = require("../Components/Courses_v1.json");

  let options = input.map((courses: Course) => {
    return {
      value: courses.CID,
      label: courses.CID,
    };
  });
  return options;
}

function SelectCourseWrapper( {selectedCourses, setSelectedCourses}:{selectedCourses:string[], setSelectedCourses:courseSelecterSetter}) {

  
  const options = getCourseOptions();


  const changeHandler = (
    selectedOption: { value: string; label: string } | null
  ) => {
    if (selectedOption != null) {
      console.log(selectedOption.value);
      setSelectedCourses([...selectedCourses, selectedOption.value]);
    }
  }

  return (
    <SelectCourse options={options} onChange={changeHandler} />
  )
}

export default SelectCourseWrapper;