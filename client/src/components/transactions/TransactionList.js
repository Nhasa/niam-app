import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Transaction from './Transaction'
import Customer from '../customers/Customer'
import { fetchCustomer } from '../../actions/customerActions'

class TransactionList extends React.PureComponent {
  componentDidMount() {
    const { customer, fetchCustomer } = this.props
    if(!customer) {
      fetchCustomer()
    }
  }
  render() {
    const { transactions, customer } = this.props

    return (
      <React.Fragment>
        <h3>TRANSACTIONS</h3>
        <Customer customer={customer} />
        <Button as={Link} to='/customer'>
          Add Transaction
        </Button>
        {transactions.map(({ name }) => (<Transaction name={name} />))}
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ transactions }) => ({
  transactions
})

export default connect(mapStateToProps, { fetchCustomer })(TransactionList)