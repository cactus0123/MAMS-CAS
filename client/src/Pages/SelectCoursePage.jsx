import SelectCourseAndTablesWrapper from "../Containers/SelectCourseAndTablesWrapper";
import { FormValidatedArea } from "../Contexts/FormValidatedContext";

function SelectCoursePage() {
  return (
  <>
    <FormValidatedArea initialDisplayFeedback={false}>
      <SelectCourseAndTablesWrapper />
    </FormValidatedArea>
  </>
  )
}
export default SelectCoursePage;