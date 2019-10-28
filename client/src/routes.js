import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './components/App';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import Greetings from './components/Greetings';

export default (
  <App>
    <Switch>
      <Route path="/signup">
        <SignupPage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path='/'>
        <Greetings />
      </Route>
    </Switch>
  </App>
)