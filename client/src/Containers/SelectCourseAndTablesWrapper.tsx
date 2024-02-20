import React from "react";

import { useState } from "react";

import SelectCourseWrapper from "./SelectCourseWrapper";
import SelectedCourseTables from "../Components/SelectedCourseTables";
import { Button } from "react-bootstrap";

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
  });

  async function handleSubmit() {
    try {
      const response = await fetch("http://localhost:5100/submit-courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedCoursesElems),
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <SelectCourseWrapper
        selectedCourses={selectedCourses}
        setSelectedCourses={setSelectedCourses}
      />
      <SelectedCourseTables selectedCourses={selectedCoursesElems} />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </>
  );
}

export default SelectCourseAndTablesWrapper;
