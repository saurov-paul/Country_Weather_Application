import { useState } from "react";
import { Button, Container, Row, Col, Card, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "../auth/firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!name) {
      alert("Name is required");
      return;
    }
    registerWithEmailAndPassword(name, email, password);
  };

  // Check if user is logged in and navigate to countries if logged in
  if (loading) return <p>Loading...</p>;
  if (user) navigate("/countries");

  return (
    <Container fluid className="bg-dark text-light p-5" style={{ height: '100vh' }}>
      <Row className="justify-content-center align-items-center h-100">
        <Col md={6}>
          <Card className="bg-transparent border-0">
            <Card.Body className="p-5 bg-light shadow-lg rounded">
              <Card.Title className="text-center mb-4 display-5 fw-bold">Join Us</Card.Title>
              <Card.Text className="text-center mb-4">
                Create an account to explore countries around the world!
              </Card.Text>
              <Form>
                <Form.Group controlId="formBasicName" className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="rounded"
                  />
                </Form.Group>

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

                <Button variant="secondary" onClick={handleRegister} className="w-100 rounded">
                  Register
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;

