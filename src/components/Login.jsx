import { useState } from "react";
import { Button, Container, Row, Col, Card, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, loginWithEmailAndPassword } from "../auth/firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogin = () => {
    loginWithEmailAndPassword(email, password);
  };

  // Check if user is logged in and navigate to countries if logged in
  if (loading) return <p>Loading...</p>;
  if (user) navigate("/countries");

  return (
    <Container fluid className="bg-dark text-light p-5" style={{ height: '100vh' }}>
      <Row className="justify-content-center align-items-center h-100">
        <Col md={6}>
          <Card className="bg-transparent border-0">
            <Card.Body className="p-5 bg-light rounded">
              <Card.Title className="text-center mb-4 display-5 fw-bold">Welcome Back!</Card.Title>
              <Card.Text className="text-center mb-4">
                Log in to continue exploring countries around the world.
              </Card.Text>
              <Form>
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="rounded"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className="rounded"
                  />
                </Form.Group>

                <Button variant="secondary" onClick={handleLogin} className="w-100 rounded">
                  Login
                </Button>
              </Form>

              <div className="text-center mt-3">
                <Button variant="link" onClick={() => navigate("/register")} className="text-light">
                  Don't have an account? Register here
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
