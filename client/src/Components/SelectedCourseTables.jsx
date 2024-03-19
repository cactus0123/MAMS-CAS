import React from "react";

import { Table } from "react-bootstrap";

function SelectedCourseTables({ selectedCourses }) {
  return (
    <>
    <Table striped className="preview-selected-table rounded custom-border custom-hover">
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