import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './components/App'
import SignupPage from './components/signup/SignupPage'
import LoginPage from './components/login/LoginPage'
import Greetings from './components/Greetings'
import CustomerList from './components/customers/CustomerList'
import TransactionList from './components/transactions/TransactionList'
import Transaction from './components/transactions/Transaction'
import CustomerPage from './components/customers/CustomerPage'

export default (
  <App>
    <Switch>
      <Route exact path='/signup'>
        <SignupPage />
      </Route>
      <Route exact path='/login'>
        <LoginPage />
      </Route>
      <Route exact path='/customers'>
        <CustomerList />
      </Route>
      <Route exact path='/customer'>
        <CustomerPage />
      </Route>
      <Route exact path='/customer/transactions'>
        <TransactionList />
      </Route>
      <Route exact path='/transaction'>
        <Transaction />
      </Route>
      <Route path='/'>
        <Greetings />
      </Route>
    </Switch>
  </App>
)