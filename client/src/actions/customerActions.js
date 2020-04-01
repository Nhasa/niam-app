import axios from 'axios'
import { ADD_CUSTOMER, FETCH_CUSTOMERS, FETCH_CUSTOMER } from './types'

const createCustomer = ({ customer, history }) => async dispatch => {
  const res = await axios.post('/api/customer', { customer })
  dispatch({ type: ADD_CUSTOMER, payload: res.data.customer })
  history.push('/customers')
}

const fetchCustomers = () => async dispatch => {
  const res = await axios.get('/api/customers')
  dispatch({ type: FETCH_CUSTOMERS, payload: res.data.customers})
}

const fetchCustomer = () => async dispatch => {
  const res = await axios.get('/api/customer')
  dispatch({ type: FETCH_CUSTOMER, payload: res.data.customer})
}

export {
  createCustomer,
  fetchCustomers,
  fetchCustomer
}