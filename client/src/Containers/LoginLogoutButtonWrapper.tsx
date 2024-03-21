import { useState } from 'react';

import { loginRequest } from '../authConfig';
import { callMsGraph } from '../graph';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal, useIsAuthenticated } from '@azure/msal-react';
import { useNavigate } from 'react-router-dom';

import { LoginButton, LogoutButton } from '../Components/LoginLogoutButton';

function LoginLogoutButtonWrapper() {
  const navigate = useNavigate();
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);

  const isAuthenticated = useIsAuthenticated();

  const handleLogin = () => {
    navigate('auth');
    instance.loginPopup(loginRequest).catch(e => {
      console.log(e);
    });
  }

  const handleLogout = () => {
    instance.logoutPopup({
        postLogoutRedirectUri: "/select",
        mainWindowRedirectUri: "/select"
    });
}


  return (
  <>
    {isAuthenticated ? <LogoutButton handleLogout={handleLogout}/> : <LoginButton handleLogin={handleLogin} />}
  </>
  )
}

export default LoginLogoutButtonWrapper;