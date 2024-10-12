import { Button, Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { LinkContainer } from "react-router-bootstrap";
import { Outlet } from "react-router-dom";
import { auth, logout } from "../auth/firebase";

const Layout = () => {
  const [user] = useAuthState(auth);

  console.log(user);

  return (
    <Container fluid>
      <Row>
        <Navbar bg="light" variant="light" sticky="top">
          <Container>
            <Navbar.Brand href="/">Countries App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/countries">
                  <Nav.Link>Countries</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/favourites">
                  <Nav.Link>Favourites</Nav.Link>
                </LinkContainer>
                {!user && (
                  <>
                    <LinkContainer to="/register">
                      <Nav.Link>Register</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/login">
                      <Nav.Link>Login</Nav.Link>
                    </LinkContainer>
                  </>
                )}
              </Nav>
              <Nav>
                {user && (
                  <>
                    <Nav.Item className="me-2">
                      <span className="text-muted">
                        Welcome, {user?.email.split("@")[0] || ""}
                      </span>
                    </Nav.Item>
                    <Button variant="outline-danger" onClick={logout}>
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
