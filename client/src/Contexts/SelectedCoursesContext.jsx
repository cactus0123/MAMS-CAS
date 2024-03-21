import { useState, createContext, useContext } from "react";

export const SelectedCoursesContext = createContext();

export const SelectedCoursesArea = ({ children }) => {  
  const [selectedCourses, setSelectedCourses] = useState([]);
  
  
  return (
  <>
    <SelectedCoursesContext.Provider value={{ selectedCourses, setSelectedCourses }}>
      {children}
    </SelectedCoursesContext.Provider>
  </>
  )
}

export const useSelectedCourses = () => useContext(SelectedCoursesContext);