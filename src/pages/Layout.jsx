import { Button, Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { LinkContainer } from "react-router-bootstrap";
import { Outlet } from "react-router-dom";
import { auth, logout } from "../auth/firebase";
import logo from "./world.png";

const Layout = () => {
  const [user] = useAuthState(auth);

  const styles = {
    container: {
      backgroundColor: '#081b29',
      color: '#ededed',
      fontFamily: "'Poppins', sans-serif",
      minHeight: '100vh',
    },
    navbar: {
      backgroundColor: '#112e42',
    },
    navbarLink: {
      color: '#ededed !important',
      fontSize: '1.7rem',
      fontWeight: 500,
      marginRight: '3.5rem',
    },
    navbarLinkHover: {
      color: '#ededed',
    },
    welcomeText: {
      color: '#ededed',
    },
    button: {
      border: '0.2rem solid #00abf0',
      color: '#00abf0',
      fontSize: '1.8rem',
      fontWeight: 600,
    },
    buttonHover: {
      backgroundColor: '#00abf0',
      color: '#112e42',
    },
  };

  return (
    <Container fluid style={styles.container}>
      <Row>
        <Navbar style={styles.navbar} variant="light" sticky="top">
          <Container>
          <Navbar.Brand className="text-white" href="/">
  <img src={logo} alt="Logo" style={{ width: '50px', height: 'auto' }} /> {/* Adjust the width as needed */}
</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <LinkContainer to="/">
                  <Nav.Link className="text-white" style={styles.navbarLink}>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/countries">
                  <Nav.Link className="text-white" style={styles.navbarLink}>Countries</Nav.Link>
                </LinkContainer>
                <LinkContainer className="text-white" to="/favourites">
                  <Nav.Link className="text-white" style={styles.navbarLink}>Favourites</Nav.Link>
                </LinkContainer>
                {!user && (
                  <>
                    <LinkContainer to="/register">
                      <Nav.Link style={styles.navbarLink}>Register</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/login">
                      <Nav.Link style={styles.navbarLink}>Login</Nav.Link>
                    </LinkContainer>
                  </>
                )}
              </Nav>
              <Nav>
                {user && (
                  <>
                    <Nav.Item className="me-2">
                      <span style={styles.welcomeText}>
                        Welcome, {user?.email.split("@")[0] || ""}
                      </span>
                    </Nav.Item>
                    <Button 
                       
                      onClick={logout}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      Logout
                    </Button>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
      <Row className="bg-dark text-light min-vh-100 p-4">
        <Col>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
