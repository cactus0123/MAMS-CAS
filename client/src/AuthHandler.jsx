import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMsal, useIsAuthenticated } from "@azure/msal-react";

import { loginRequest } from './authConfig';
import { callMsGraph } from './graph';

import { useStudentData } from './Contexts/UserDataContext';


export async function checkStudentData(studentData) {
  if (studentData.studentid && studentData.email) {
    try {
      /* get current students to check if signed in student exists */
      const getResponse = await fetch("http://localhost:5100/student/" + studentData.studentid)
      const student = await getResponse.json();

      /* create new student if not existing */
      if (student === null) {
        console.log(studentData);
        const postResponse = await fetch('http://localhost:5100/student', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(studentData),
        });
        if (!postResponse.ok) {
          throw new Error('Failed to create student record');
        }
    
        const createdStudent = await postResponse.json();
        console.log('Created student:', createdStudent);
      }
  
    } catch (err) {
      console.error(err);
    }
  }
}

const AuthHandler = () => {
  // const { instance, accounts } = useMsal();
  // const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  const isAuthenticated = useIsAuthenticated();
  
  // const studentData = useStudentData();
  // console.log(studentData);

  // async function checkStudentData() {
  //   if (studentData.studentid && studentData.email) {
  //     try {
  //       /* get current students to check if signed in student exists */
  //       const getResponse = await fetch("http://localhost:5100/student/" + studentData.studentid)
  //       const student = await getResponse.json();

  //       /* create new student if not existing */
  //       if (student === null) {
  //         const postResponse = await fetch('http://localhost:5100/students', {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify(studentData),
  //         });
  //         if (!postResponse.ok) {
  //           throw new Error('Failed to create student record');
  //         }
      
  //         const createdStudent = await postResponse.json();
  //         console.log('Created student:', createdStudent);
  //       }
    
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }

    
  // }
    
  // function RequestAccessToken() {
  //   if (isAuthenticated && accounts[0]) {
  //     instance
  //       .acquireTokenSilent({
  //         ...loginRequest,
  //         account: accounts[0],
  //       })
  //       .then((response) => {
  //         console.log("accessToken:", response.accessToken);
  //         console.log("Response:", JSON.stringify(response));
  //         navigate("/select");
  //       });
  //   }
  // }
  // useEffect(() => {
  //   RequestAccessToken();
  // }, [isAuthenticated]);
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/select");
    }
    // checkStudentData();
  }, [isAuthenticated]);
  
  return <div>Processing authentication response...</div>;
};

export default AuthHandler;