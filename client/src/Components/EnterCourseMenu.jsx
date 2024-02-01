import React from "react";

import { Button, Accordion, Card, Form } from "react-bootstrap";

function EnterCourseMenu( {handleClick, active, handleSubmit} ) {
  return (
    <>
    <Button className="toggle-search" variant="link" onClick={handleClick}>
      Can't find your course?
    </Button>


    <Accordion className="custom-course-form" activeKey={active ? "0" : null}>
      <Accordion.Collapse eventKey="0">
        <Form className="" onSubmit={handleSubmit}>
          <Form.Control name="course" type="text" placeholder="Enter course ID"/>
        </Form>
      </Accordion.Collapse>
    </Accordion>
    </>
  )
}

export default EnterCourseMenu;