import React from "react";

import { useState } from "react";

import EnterCourseMenu from "../Components/EnterCourseMenu";

interface Option {
  value: string;
  label: string;
}

type subFunc = (input: Option[]) => void;

function EnterCourseMenuWrapper({ onSubmitCustom }:{onSubmitCustom: subFunc}) {
  const [active, toggleActive] = useState<boolean>(false);

  const clickHandler = () => {
    toggleActive((prev) => !prev)
  }

  return ( 
    <EnterCourseMenu handleClick={clickHandler} active={active} handleSubmit={onSubmitCustom} />
  )
}

export default EnterCourseMenuWrapper;