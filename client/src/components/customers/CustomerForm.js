import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createCustomer } from '../../actions/customerActions'

class CustomerForm extends React.PureComponent {
  handleSubmit = (event) => {
    const { createCustomer, history } = this.props
    event.preventDefault()
    event.stopPropagation()

    createCustomer({
      customer: {
        name: this.name.value
      },
      history
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h3>CUSTOMER</h3>
        <Form.Group controlId='formGroupCustomerName'>
          <Form.Label>Customer Name</Form.Label>
          <Form.Control name='name' ref={(ref) => { this.name = ref }} placeholder='Enter customer name' />
        </Form.Group>
        <Button type='submit'>
          Create
        </Button>
      </Form>
    )
  }
}

export default connect(null, { createCustomer })(withRouter(CustomerForm))

