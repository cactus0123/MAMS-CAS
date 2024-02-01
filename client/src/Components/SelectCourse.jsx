import React from "react";
import Select from "react-select";


function SelectCourse({ options, onChange }) {

  return (
    <>
    <div className="card courses-card">
      <h2 className="card-title">Available Courses</h2>
      {/* <CourseTable /> */}
      <Select
        options={options}
        onChange={onChange}
      />
    </div>
    </>
  )
}

export default SelectCourse;