import React from 'react'
import { Form, Button } from 'react-bootstrap'

export default class Login extends React.PureComponent {
  render() {
    return (
      <Form>
        <h3>LOGIN</h3>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log In
    </Button>
      </Form>
    )
  }
}
