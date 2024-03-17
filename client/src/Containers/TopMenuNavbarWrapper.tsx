import React, { SyntheticEvent } from "react";

import { useState } from "react";

import TopMenuNavbar from "../Components/TopMenuNavbar.jsx";


const handleSelect = (eventKey: any, event?: SyntheticEvent) => {
  
}

function TopMenuNavbarWrapper() {
  // const [];
  return (
  <>
    <TopMenuNavbar handleSelect={handleSelect}/>
  </>
  )
}

export default TopMenuNavbarWrapper;