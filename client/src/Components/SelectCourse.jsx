import React from "react";

import Select from "react-select";
import { Card } from 'react-bootstrap';

import EnterCourseMenuWrapper from "../Containers/EnterCourseMenuWrapper.tsx";


function SelectCourse({ value, options, onChange, onSubmitCustom }) {

  return (
    <>
    <Card className="courses-card">
      <Card.Body>
        <Card.Title>Select Courses</Card.Title>
        {/* <CourseTable /> */}

        <Select
          value={value}
          options={options}
          onChange={onChange}
          placeholder={"Search"}
          isMulti
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          
        />
        
        <EnterCourseMenuWrapper onSubmitCustom={onSubmitCustom}/>
      </Card.Body>
    </Card>
    </>
  )
}

export default SelectCourse;