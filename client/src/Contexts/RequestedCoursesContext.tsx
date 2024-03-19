import { ReactNode, createContext } from "react";
import { useRequestedCourses, RequestedCourse } from "../Hooks/useRequestedCourses";

type RequestedCoursesHookType = { requestedCourses: RequestedCourse[] | null; refreshRequestedCourses: () => void; };

export const RequestedCoursesContext = createContext<RequestedCoursesHookType>({ requestedCourses: [], refreshRequestedCourses: () => {} });

export const RequestedCoursesArea = ({ children }: { children: ReactNode}) => {  
  const { requestedCourses, refreshRequestedCourses } = useRequestedCourses();
  
  return (
  <>
    <RequestedCoursesContext.Provider value={{ requestedCourses, refreshRequestedCourses }}>
      {children}
    </RequestedCoursesContext.Provider>
  </>
  )
}