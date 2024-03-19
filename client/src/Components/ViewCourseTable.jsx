import { Table } from 'react-bootstrap';

function ViewCourseTable({headers, rows}) {
  return (
  <>
    <Table striped className="view-course-table rounded custom-border custom-hover">
      <thead>
        <tr>
          {headers}
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </Table>
  </>
  )
}

export default ViewCourseTable;