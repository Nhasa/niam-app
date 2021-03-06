import React from 'react'
import { render } from 'react-dom'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import setAuthorizationToken from './utils/setAuthorizationToken'
import routes from './routes'
// import { setCurrentUser } from './actions/authActions'
// import jwt from 'jsonwebtoken'
import 'bootstrap/dist/css/bootstrap.min.css'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken)
  // store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)))
}

render(
  <Provider store={store}>
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  </Provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
