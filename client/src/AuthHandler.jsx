import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useMsal } from '@azure/msal-react';


const AuthHandler = () => {
  const msalInstance = useMsal();
  const location = useLocation();
  const nav = useNavigate();

  useEffect(() => {
    // Function to handle authentication response
    const handleAuthenticationResponse = async () => {
      try {
        const authResponse = await msalInstance.handleRedirectPromise();
        if (authResponse) {
          // Authentication successful, extract tokens or authorization code
          const accessToken = authResponse.accessToken;
          const idToken = authResponse.idToken;
          
          // localStorage.setItem('accessToken', accessToken);
          // localStorage.setItem('idToken', idToken);

        }
      } catch (error) {
        console.error('Error handling authentication response:', error);
        
      }
    };

    handleAuthenticationResponse();
  }, [location, nav]);
  return <div>Processing authentication response...</div>;
};

export default AuthHandler;

