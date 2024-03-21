import { useState, createContext, useContext } from "react";

const FormValidationContext = createContext();
const FormDataContext = createContext();

export const FormArea = ({ children, initialDisplayFeedback }) => {  
  const [displayFeedback, toggleDisplayFeedback] = useState(initialDisplayFeedback);
  const [feedback, setFeedback] = useState(<></>);
  const [validity, setValidity] = useState(null);
  
  const [formDataCopy, setFormDataCopy] = useState({});
  
  return (
  <>
    <FormValidationContext.Provider value={{ displayFeedback, toggleDisplayFeedback, feedback, setFeedback, validity, setValidity }}>
      <FormDataContext.Provider value={{ formDataCopy, setFormDataCopy }}>
        {children}
      </FormDataContext.Provider>
    </FormValidationContext.Provider>
  </>
  )
}
export const useFormValidation = () => useContext(FormValidationContext);
export const useFormData = () => useContext(FormDataContext);