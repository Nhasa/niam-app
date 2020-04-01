import React from 'react'
import { Form, Button } from 'react-bootstrap'

export default class Login extends React.PureComponent {
  render() {
    return (
      <Form>
        <h3>SIGNUP</h3>
        <Form.Group controlId='formGroupUser'>
          <Form.Label>Username</Form.Label>
          <Form.Control placeholder='Enter username' />
        </Form.Group>
        <Form.Group controlId='formGroupEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>
        <Form.Group controlId='formGroupPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Form.Group controlId='formGroupPasswordConfirm'>
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control type='password' placeholder='Re-type password to confirm' />
        </Form.Group>
        <Button type='submit'>
          Sign up
        </Button>
      </Form>
    )
  }
}
