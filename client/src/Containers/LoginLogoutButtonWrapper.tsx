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
  const [modalActive, setModalActive] = useState(false);

  const handleModalClose = () => setModalActive(false);
  const handleModalShow = () => setModalActive(true);

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
    // instance.logout();
}


  return (
  <>
    <AuthenticatedTemplate>
      <LogoutButton show={modalActive} handleModalShow={handleModalShow} handleModalClose={handleModalClose} handleLogout={handleLogout}/>
    </AuthenticatedTemplate>

    <UnauthenticatedTemplate>
      <LoginButton handleLogin={handleLogin} />
    </UnauthenticatedTemplate>
  </>
  )
}

export default LoginLogoutButtonWrapper;