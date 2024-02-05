import React from "react";

import { Table } from "react-bootstrap";

function SelectedCourseTables({ selectedCourses }) {
  return (
    <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Course ID</th>
        </tr>
      </thead>
      <tbody>
        {selectedCourses}
      </tbody>
    </Table>
    </>
  )
}

export default SelectedCourseTables;