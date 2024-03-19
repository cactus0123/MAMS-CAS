import React from "react";

import { useState, useContext } from "react";
import { FormValidatedContext } from "../Contexts/FormValidatedContext";

import EnterCourseMenu from "../Components/EnterCourseMenu";
import { Form } from "react-bootstrap";

interface Option {
  value: string;
  label: string;
}

type subFunc = (input: Option[]) => void;

function EnterCourseMenuWrapper({ onSubmitCustom }:{onSubmitCustom: subFunc}) {
  const [active, toggleActive] = useState<boolean>(false);
  const {displayFeedback, feedback, validity} = useContext(FormValidatedContext);

  const clickHandler = () => {
    toggleActive((prev) => !prev)
  }
  let isInvalid = validity !== null && !validity;

  return ( 
    
    <EnterCourseMenu handleClick={clickHandler} active={active} handleSubmit={onSubmitCustom} 
                     displayFeedback={displayFeedback} feedback={feedback} isInvalid={isInvalid}/>
  )
}

export default EnterCourseMenuWrapper;