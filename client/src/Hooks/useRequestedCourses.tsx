import { useState, useEffect } from 'react';

export type RequestedCourse = {
  studentid: string;
  cid: string;
};

async function getSubmittedCourses(setData: React.Dispatch<React.SetStateAction<RequestedCourse[]|null>>) {
  try {
    const response = await fetch("http://localhost:5100/submitted-courses")
    const data = await response.json();
    setData(data);

  } catch (err) {
    console.error(err);
  }
}

export const useRequestedCourses = () => {
  const [ requestedCourses, setRequestedCourses ] = useState<RequestedCourse[]|null>(null);
  const [ refresh, setRefresh ] = useState(false);
  useEffect(() => {
    getSubmittedCourses(setRequestedCourses)
  }, [refresh]);

  const refreshRequestedCourses = () => {
    setRefresh((curr) => !curr);
  }
  return {requestedCourses, refreshRequestedCourses};
}