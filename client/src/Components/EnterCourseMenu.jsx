import React from "react";

import { Button, Accordion, Card, Form } from "react-bootstrap";

import { Formik } from 'formik';

function EnterCourseMenu( {handleClick, active, handleSubmit, displayFeedback, feedback, isInvalid} ) {
  console.log(isInvalid);
  return (
    <>
    <Button className="toggle-search noto-sans" variant="link" onClick={handleClick}>
      Can't find your course?
    </Button>


    <Accordion className="custom-course-form" activeKey={active ? "0" : null}>
      <Accordion.Collapse eventKey="0">
        <Form className="custom-course-entry" onSubmit={handleSubmit} noValidate validated={displayFeedback}>
          <Form.Control className="noto-sans text-input invalid" id="custom-course-input" name="course" type="text" placeholder="Enter course ID" isInvalid={true} isValid={false}/>
          {feedback}
        </Form>
      </Accordion.Collapse>
    </Accordion>
    </>
  )
}

export default EnterCourseMenu;