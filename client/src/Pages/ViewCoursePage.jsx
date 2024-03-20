import SelectCourseAndTablesWrapper from "../Containers/SelectCourseAndTablesWrapper";
import ViewCourseTablesWrapper from "../Containers/ViewCourseTablesWrapper";

import { useContext } from "react";
import { RequestedCoursesContext } from "../Contexts/RequestedCoursesContext";

function ViewCoursePage() {
  const { requestedCourses } = useContext(RequestedCoursesContext);
  return (
  <>
    <div>
      <ViewCourseTablesWrapper />
    </div>
  </>
  )
}
export default ViewCoursePage;