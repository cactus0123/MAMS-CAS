import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";


function CourseTable() {
  const [data, setData] = useState([]);

  useEffect(() => {


    let input = require("./Courses_v1.json");

    let temp = [];

    for(let i = 0; i < input.length; i++) {
      let selectedData = {
        CourseID: input[i].CID,
        Title: input[i].TITLE,
        Approver: input[i].Approver,
        Terms: input[i].PTerms,
        Prereq: input[i]["MAMS Prerequisites"],
      };

      temp.push(selectedData);

    }

    setData(temp);

    console.log(temp)




  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>CID</th>
          <th>Title</th>
          <th>Approver</th>
          <th>Terms</th>
          <th>Prerequisites</th>
        </tr>
      </thead>
      <tbody>
      {data.map((course, index) => (
            <tr key={index}>
              <td>{course.CourseID}</td>
              <td>{course.Title}</td>
              <td>{course.Approver}</td>
              <td>{course.Terms}</td>
              <td>{course.Prereq}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default CourseTable;
