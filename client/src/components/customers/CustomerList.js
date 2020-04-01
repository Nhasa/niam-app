import React from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import Customer from './Customer'
import { fetchCustomers } from '../../actions/customerActions'

class CustomerList extends React.PureComponent {
  componentDidMount() {
    const { customers, fetchCustomers } = this.props
    if (customers.length === 0) {
      fetchCustomers()
    }
  }

  render() {
    const { customers } = this.props

    return (
      <React.Fragment>
        <h3>CUSTOMERS</h3>
        <Button as={Link} to='/customer'>
          Add Customer
        </Button>
        {customers.map((customer) => (<Customer key={customer.id} {...customer} />))}
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ customers }) => ({
  customers
})

export default connect(mapStateToProps, { fetchCustomers })(withRouter(CustomerList));