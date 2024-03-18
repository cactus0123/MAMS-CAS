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
      const response = await fetch("http://localhost:5100/submitted-courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedCourses),
      });

      if (!response.ok) {
        throw new Error(`Error status: ${response.status}`);
      }

      const data = await response.json();
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
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </>
  );
}

export default SelectCourseAndTablesWrapper;
