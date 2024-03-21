import React, { useEffect } from "react";

import { useState, useContext } from "react";
import { useStudentData } from "../Contexts/UserDataContext";
import { useSelectedCourses } from "../Contexts/SelectedCoursesContext";
import { useFormData, useFormValidation } from "../Contexts/FormContext";

import EnterCourseMenu from "../Components/EnterCourseMenu";
import { Form } from "react-bootstrap";

type FormData = {
  [key: string]: {
    data: string;
    set: React.Dispatch<React.SetStateAction<string>>;
  };
};

type RequestedCourse = {
  studentid: string;
  cid: string;
};

interface Option {
  value: string;
  label: string;
}

// type subFunc = (input: Option[]) => void;

function EnterCourseMenuWrapper() {
  const [active, toggleActive] = useState<boolean>(false);
  
  const {displayFeedback, feedback, validity} = useFormValidation();
  const { setValidity, toggleDisplayFeedback, setFeedback } = useFormValidation();
  const { formDataCopy, setFormDataCopy } = useFormData();

  const { selectedCourses, setSelectedCourses } = useSelectedCourses();
  const { requestedCourses } = useStudentData();


  const [ courseField, setCourseField ] = useState("");
  const formData: FormData = {
    course: {data: courseField, set: setCourseField}
  };
  
  
  useEffect(() => {
    setFormDataCopy(formData);
    const storedEnteredCourse = sessionStorage.getItem("enteredCourse");
    if (storedEnteredCourse !== null) {
      console.log("active");
      toggleActive(true);
      setCourseField(storedEnteredCourse);
    }
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
    const newCourse: string = event.target.value;

    sessionStorage.setItem("enteredCourse", newCourse);
    formData[event.target.name].set(newCourse);
  }

  const clickHandler = () => {
    toggleActive((prev) => {
      if (prev) {
        sessionStorage.removeItem("enteredCourse");
        setCourseField("");
      } else {
        const storedEnteredCourse = sessionStorage.getItem("enteredCourse");
        if (!storedEnteredCourse) {
          sessionStorage.setItem("enteredCourse", "")
        }
      }
      return !prev;
    })
    
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();


    const input = document.getElementById("custom-course-input");

    const customCourseID = formData.course.data;

    const customCourseOption: Option = {
      value: customCourseID.toUpperCase(),
      label: customCourseID.toUpperCase(),
    };
    let notDuplicate = !selectedCourses.some((course: Option) => course.value === customCourseOption.value);
    
    if (requestedCourses !== null) {
      notDuplicate = notDuplicate && !requestedCourses.some((course: RequestedCourse) => course.cid === customCourseOption.value);
    }
    const notEmpty = !(customCourseOption.value === "");
    toggleDisplayFeedback(true);
    if (notDuplicate && notEmpty) {
      if (input !== null && input instanceof HTMLInputElement) {
        input.setCustomValidity("");
      } 
      setValidity(true);
      setSelectedCourses(
        (prev: Option[]) => [...prev, customCourseOption] as Option[]
      );
      setFeedback(
        <Form.Control.Feedback>
          Course successfully added
        </Form.Control.Feedback>
      )

      // clear fields
      Object.keys(formData).forEach(control => formData[control].set(""));
      sessionStorage.setItem("enteredCourse", "");
    } else {
      setValidity(false);
      if (input !== null && input instanceof HTMLInputElement) {
        input.setCustomValidity("test");
      } 
    }
    if (!notDuplicate) {
      setFeedback(
        <Form.Control.Feedback type="invalid">
          Course already added
        </Form.Control.Feedback>
      )
    } else if (!notEmpty) {
      setFeedback(
        <Form.Control.Feedback type="invalid">
          Cannot be blank
        </Form.Control.Feedback>
      )
    }

  };

  let isInvalid = validity !== null && !validity;

  return ( 
    
    <EnterCourseMenu handleClick={clickHandler} active={active} formProps={{displayFeedback, feedback, isInvalid, handleSubmit, handleChange, formData }} />
  )
}

export default EnterCourseMenuWrapper;