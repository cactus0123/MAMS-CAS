import loginIcon from '../Media/login-icon.png';
import { Button, Modal } from 'react-bootstrap';

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
export function LogoutButton({handleLogout, handleModalShow, handleModalClose, show}) {
  return (
  <>
    <Button className="login-button d-flex align-items-center" variant="link" onClick={handleModalShow}>
      <span className="login-text">Sign Out</span>
      <img 
        className="login-icon"
        src={loginIcon} 
        alt="login"
        height={25}
        width={25}
      />
    </Button>
    <Modal show={show} onHide={handleModalClose} animation={true}>
      <Modal.Header closeButton>
        <Modal.Title>Signing Out</Modal.Title>
      </Modal.Header>
      <Modal.Body>Close the signout page without choosing an account to only sign out on this site. Choosing an account will sign you out throughout your entire browser.</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleModalClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleLogout}>
          Proceed to Sign Out
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}