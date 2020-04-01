import { combineReducers } from 'redux';
import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth'
import customers from './reducers/customers'
import transactions from './reducers/transactions'

export default combineReducers({
  flashMessages,
  auth,
  customers,
  transactions
})