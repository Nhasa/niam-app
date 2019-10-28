import React from 'react';
import { Row, Col } from 'react-bootstrap'
import LoginForm from './LoginForm'

const LoginPage = () => (
  <Row>
    <Col md={{ span: 4, offset: 4 }}>
      <LoginForm />
    </Col>
  </Row>
)

export default LoginPage;