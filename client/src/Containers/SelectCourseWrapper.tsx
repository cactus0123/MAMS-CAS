import React, { useEffect } from "react";

import { useState, useContext } from "react";

import SelectCourse from "../Components/SelectCourse";
import { useFormValidation } from "../Contexts/FormContext";
import { useStudentData } from "../Contexts/UserDataContext";

import { Form } from "react-bootstrap";
import { request } from "http";
import { useSelectedCourses } from "../Contexts/SelectedCoursesContext";

export type RequestedCourse = {
  studentid: string;
  cid: string;
};

interface CourseJSONEntry {
  CID: string;
  TITLE: string;
}

interface Option {
  value: string;
  label: string;
}

/**
 * Gets data from courses in Courses_v1.json
 *
 * @returns array of objects each containing a value and label equal to a course CID
 */
function getCourseOptions(requestedCourses: RequestedCourse[] | null): { value: string; label: string }[] {
  let input = require("../Components/Courses_v1.json");
  
  let options = input.map((course: CourseJSONEntry) => {
    return {
      value: course.CID,
      label: course.CID,
    };
  });
  if (requestedCourses !== null) {
    options = options.filter((course: Option) => {
      return !requestedCourses.some((requestedCourse) => requestedCourse.cid === course.value);
    })
  }

  return options;
}

function SelectCourseWrapper() {
  const { selectedCourses, setSelectedCourses } = useSelectedCourses();
  const { requestedCourses } = useStudentData();
  
  const options = getCourseOptions(requestedCourses);

  const changeHandler = (selectedOptions: Option[]) => {
    if (selectedOptions) {
      setSelectedCourses(selectedOptions as Option[]);
      sessionStorage.setItem("selectedCourses", JSON.stringify(selectedOptions));
    }
  };


  return (
    <SelectCourse
      value={selectedCourses}
      options={options}
      onChange={changeHandler}
    />
  );
}

export default SelectCourseWrapper;
