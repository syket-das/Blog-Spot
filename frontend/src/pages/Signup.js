import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './signUp.css';
const Signup = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Row className="d-flex align-items-center justify-content-center">
        <Col md={5} className="login-bg-container">
          <h2 className="text-light text-center">
            <strong>Start Your Journey With Us</strong>
            <br />
            <h4 className="mt-3">Welcome To The Blog Spot</h4>
          </h2>
        </Col>
        <Col md={7}>
          <Form className="login-form" onSubmit={handleSignUp}>
            <h1 className="text-center">Create Account</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
            <div className="py-4">
              <p>
                Already have an account? <Link to="/login">Login here</Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
