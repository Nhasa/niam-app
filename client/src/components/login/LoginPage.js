import React from 'react';
import { Row, Col } from 'react-bootstrap'
import LoginForm from './LoginForm'

const mdColConfig = { span: 4, offset: 4 }

const LoginPage = () => (
  <Row>
    <Col md={mdColConfig}>
      <LoginForm />
    </Col>
  </Row>
)

export default LoginPage;