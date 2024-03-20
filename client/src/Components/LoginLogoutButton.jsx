import loginIcon from '../Media/login-icon.png';
import { Button } from 'react-bootstrap';

export function LoginButton({handleLogin}) {
  return (
  <>
    <Button className="login-button d-flex align-items-center" variant="link" onClick={handleLogin}>
      <span className="login-text">Sign In</span>
      <img 
        className="login-icon"
        src={loginIcon} 
        alt="login"
        height={25}
        width={25}
      />
    </Button>
  </>
  )
}
export function LogoutButton({handleLogout}) {
  return (
  <>
    <Button className="login-button d-flex align-items-center" variant="link" onClick={handleLogout}>
      <span className="login-text">Sign Out</span>
      <img 
        className="login-icon"
        src={loginIcon} 
        alt="login"
        height={25}
        width={25}
      />
    </Button>
  </>
  )
}