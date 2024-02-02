import React from "react";

import { Button, Accordion, Card, Form } from "react-bootstrap";

function EnterCourseMenu( {handleClick, active, handleSubmit} ) {
  return (
    <>
    <Button className="toggle-search noto-sans" variant="link" onClick={handleClick}>
      Can't find your course?
    </Button>


    <Accordion className="custom-course-form" activeKey={active ? "0" : null}>
      <Accordion.Collapse eventKey="0">
        <Form className="" onSubmit={handleSubmit}>
          <Form.Control className="noto-sans text-input" name="course" type="text" placeholder="Enter course ID"/>
        </Form>
      </Accordion.Collapse>
    </Accordion>
    </>
  )
}

export default EnterCourseMenu;