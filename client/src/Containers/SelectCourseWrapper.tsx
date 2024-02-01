import React from "react";

import { useState } from "react";
import SelectCourse from "../Components/SelectCourse";
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
type courseSelecterSetter = ((input: Option[] | prevFunc) => void)

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

function SelectCourseWrapper( {selectedCourses, setSelectedCourses}:{selectedCourses:Option[], setSelectedCourses:courseSelecterSetter}) {
  const [currentlySelected, setCurrentlySelected] = useState<string[]>();
  
  const options = getCourseOptions();


  const changeHandler = (
    selectedOptions: Option[] | null
  ) => {
      if(selectedOptions != null) {
        setSelectedCourses(selectedOptions as Option[]);
      }
    // if (selectedOption != null) {
    //   console.log(selectedOption.value);
    //   setSelectedCourses([...selectedCourses, selectedOption.value]);
    // }

  }

  const submitCustomHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    
    const customCourseID = (event.currentTarget.elements.namedItem('course') as HTMLInputElement)?.value;

    console.log(customCourseID);
    
    const customCourseOption: Option = {
      value: customCourseID,
      label: customCourseID
    }
    setSelectedCourses(((prev: Option[]) => [...prev, customCourseOption] as Option[]));

    form.reset();
  };

  return (
    <SelectCourse value={selectedCourses} options={options} onChange={changeHandler} onSubmitCustom={submitCustomHandler}/>
  )
}

export default SelectCourseWrapper;