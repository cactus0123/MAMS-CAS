import { Table } from 'react-bootstrap';

function ViewCourseTable({headers, rows}) {
  return (
  <>
    <Table striped bordered hover>
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