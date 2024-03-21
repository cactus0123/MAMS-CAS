import React, { createContext, useContext, useState } from 'react';
import { useMsal, useIsAuthenticated } from '@azure/msal-react';

import { loginRequest } from '../authConfig';
import { callMsGraph } from '../graph';
import { useEffect } from "react";

const UserDataContext = createContext();

async function getSubmittedCourses(setData, studentid) {
  try {
    const response = await fetch("http://localhost:5100/submitted-courses/" + studentid)
    const data = await response.json();
    console.log(data);
    setData(data);

  } catch (err) {
    console.error(err);
  }
}

// Provider component
export const UserDataArea = ({ children }) => {
  // State to store OAuth data
  const [userData, setUserData] = useState(null);

  const { instance, accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  // Function to update OAuth data
  // const updateOAuthData = (data) => {
  //   setOAuthData(data);
  // };

  function RequestProfileData() {
    if (isAuthenticated && accounts[0]) {
      instance
        .acquireTokenSilent({
          ...loginRequest,
          account: accounts[0],
        })
        .then((response) => {
          // console.log("accessToken:", response.accessToken);
          // console.log("Response:", JSON.stringify(response));
          callMsGraph(response.accessToken).then((response) => setUserData(response));
        });
    }
  }
  useEffect(() => {
    RequestProfileData();
  }, [isAuthenticated]);

  return (
    <UserDataContext.Provider value={{ userData }}>
      {children}
    </UserDataContext.Provider>
  );
};

// Custom hook to consume the OAuth context
export const useUserData = () => useContext(UserDataContext);

const StudentDataContext = createContext();

export const StudentDataArea = ({ children }) => {
  const { userData } = useUserData();

  const [ requestedCourses, setRequestedCourses ] = useState(null);
  const [ refresh, setRefresh ] = useState(false);

  const [studentData, setStudentData] = useState({
    firstName: "",
    lastName: "",
    studentid: "",
    email: "",
    yearOfGraduation: 0,
    requestedCourses: [],
  });
  
  useEffect(() => {
    if (userData) {
      const newData = {
        firstName: userData.givenName,
        lastName: userData.surname,
        studentid: userData.id,
        email: userData.mail,
        yearOfGraduation: 0,
      }
      setStudentData(newData);

      console.log(studentData);
      getSubmittedCourses(setRequestedCourses, studentData.studentid)

    }
  }, [userData, refresh]);
  

  const refreshRequestedCourses = () => {
    setRefresh((curr) => !curr);
  }

  return (
    <StudentDataContext.Provider value={{ studentData, requestedCourses, refreshRequestedCourses }}>
      {children}
    </StudentDataContext.Provider>
  );
}

export const useStudentData = () => useContext(StudentDataContext);