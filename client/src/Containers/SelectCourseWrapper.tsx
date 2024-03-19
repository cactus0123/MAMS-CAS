import React from "react";

import { useState, useContext } from "react";
import SelectCourse from "../Components/SelectCourse";
import { FormValidatedContext } from "../Contexts/FormValidatedContext";
import { Form } from "react-bootstrap";

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
function getCourseOptions(): { value: string; label: string }[] {
  let input = require("../Components/Courses_v1.json");

  let options = input.map((courses: Course) => {
    return {
      value: courses.CID,
      label: courses.CID,
    };
  });
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
  
  const options = getCourseOptions();

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
    const notDuplicate = !selectedCourses.some((course) => course.value === customCourseOption.value);
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
