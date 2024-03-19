import { useState, createContext } from "react";

export const FormValidatedContext = createContext();

export const FormValidatedArea = ({ children, initialDisplayFeedback }) => {  
  const [displayFeedback, toggleDisplayFeedback] = useState(initialDisplayFeedback);
  const [feedback, setFeedback] = useState(<></>);
  const [validity, setValidity] = useState(null);
  
  
  return (
  <>
    <FormValidatedContext.Provider value={{ displayFeedback, toggleDisplayFeedback, feedback, setFeedback, validity, setValidity }}>
      {children}
    </FormValidatedContext.Provider>
  </>
  )
}