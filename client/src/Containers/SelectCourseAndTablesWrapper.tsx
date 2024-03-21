import React, { useEffect } from "react";

import { useState, useContext } from "react";
import { useStudentData } from "../Contexts/UserDataContext";
import { useSelectedCourses } from "../Contexts/SelectedCoursesContext";

import SelectCourseWrapper from "./SelectCourseWrapper";
import SelectedCourseTables from "../Components/SelectedCourseTables";
import { Card, Button, Container } from "react-bootstrap";

import { checkStudentData } from "../AuthHandler";

interface Option {
  value: string;
  label: string;
}


function SelectCourseAndTablesWrapper() {
  
  const { selectedCourses, setSelectedCourses } = useSelectedCourses();
  const { studentData, refreshRequestedCourses } = useStudentData();
  
  useEffect(() => {
    const storedSelectedCourses = sessionStorage.getItem("selectedCourses");
    if (storedSelectedCourses) {
      setSelectedCourses(JSON.parse(storedSelectedCourses));
    }
  }, [])

  const selectedCoursesElems = selectedCourses.map((cid: Option) => {
    return (
      <tr key={cid.value}>
        <td>{cid.value}</td>
      </tr>
    );
  });

  async function handleSubmit() {
    await checkStudentData(studentData);
    try {
      
      const response = await fetch("http://localhost:5100/submitted-courses/" + studentData.studentid, {
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
      refreshRequestedCourses();
    } catch (error) {
      console.error(error);
    }
    setSelectedCourses([]);
  }

  return (
    <>
      <SelectCourseWrapper/>
      <Card className="preview-selected-card">
        <Card.Body>
          <Card.Title className="noto-sans">Courses Preview</Card.Title>
          
          <SelectedCourseTables selectedCourses={selectedCoursesElems} />
          <Container className="center-contents">
            <Button className="submit-selected-button" variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Container>
        
        </Card.Body>
      </Card>
      
    </>
  );
}

export default SelectCourseAndTablesWrapper;
