import React from "react";

import { useState, useContext } from "react";

import SelectCourse from "../Components/SelectCourse";
import { FormValidatedContext } from "../Contexts/FormValidatedContext";
import { useStudentData } from "../Contexts/UserDataContext";

import { Form } from "react-bootstrap";
import { request } from "http";

export type RequestedCourse = {
  studentid: string;
  cid: string;
};

interface Course {
  CID: string;
  TITLE: string;
}

interface Option {
  value: string;
  label: string;
}

type prevFunc = (input: any) => Option[];
type courseSelecterSetter = (input: Option[] | prevFunc) => void;

/**
 * Gets data from courses in Courses_v1.json
 *
 * @returns array of objects each containing a value and label equal to a course CID
 */
function getCourseOptions(requestedCourses: RequestedCourse[] | null): { value: string; label: string }[] {
  let input = require("../Components/Courses_v1.json");
  
  let options = input.map((courses: Course) => {
    return {
      value: courses.CID,
      label: courses.CID,
    };
  });
  if (requestedCourses !== null) {
    options = options.filter((course: Option) => {
      return !requestedCourses.some((requestedCourse) => requestedCourse.cid === course.value);
    })
  }

  return options;
}

function SelectCourseWrapper({
  selectedCourses,
  setSelectedCourses,
}: {
  selectedCourses: Option[];
  setSelectedCourses: courseSelecterSetter;
}) {
  //const [currentlySelected, setCurrentlySelected] = useState<string[]>();
  const { setValidity, toggleDisplayFeedback, setFeedback } = useContext(FormValidatedContext);
  const { requestedCourses } = useStudentData();
  
  const options = getCourseOptions(requestedCourses);

  const changeHandler = (selectedOptions: Option[] | null) => {
    if (selectedOptions != null) {
      setSelectedCourses(selectedOptions as Option[]);
    }
    // if (selectedOption != null) {
    //   console.log(selectedOption.value);
    //   setSelectedCourses([...selectedCourses, selectedOption.value]);
    // }
  };

  const submitHandlerCustom = (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    const input = document.getElementById("custom-course-input");

    const customCourseID = (
      event.currentTarget.elements.namedItem("course") as HTMLInputElement
    )?.value;

    const customCourseOption: Option = {
      value: customCourseID.toUpperCase(),
      label: customCourseID.toUpperCase(),
    };
    let notDuplicate = !selectedCourses.some((course) => course.value === customCourseOption.value);
    
    if (requestedCourses !== null) {
      notDuplicate = notDuplicate && !requestedCourses.some((course: RequestedCourse) => course.cid === customCourseOption.value);
    }
    const notEmpty = !(customCourseOption.value === "");
    toggleDisplayFeedback(true);
    if (notDuplicate && notEmpty) {
      if (input !== null && input instanceof HTMLInputElement) {
        input.setCustomValidity("");
      } 
      setValidity(true);
      setSelectedCourses(
        (prev: Option[]) => [...prev, customCourseOption] as Option[]
      );
      setFeedback(
        <Form.Control.Feedback>
          Course successfully added
        </Form.Control.Feedback>
      )
      form.reset();
    } else {
      setValidity(false);
      if (input !== null && input instanceof HTMLInputElement) {
        input.setCustomValidity("test");
      } 
    }
    if (!notDuplicate) {
      setFeedback(
        <Form.Control.Feedback type="invalid">
          Course already added
        </Form.Control.Feedback>
      )
    } else if (!notEmpty) {
      setFeedback(
        <Form.Control.Feedback type="invalid">
          Cannot be blank
        </Form.Control.Feedback>
      )
    }

  };

  return (
    <SelectCourse
      value={selectedCourses}
      options={options}
      onChange={changeHandler}
      onSubmitCustom={submitHandlerCustom}
    />
  );
}

export default SelectCourseWrapper;
