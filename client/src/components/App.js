import React from 'react'
import Login from './sessions/Login'
import Header from './Header'
import './App.css'

const App = ({ auth }) => auth ? <Header /> : <Login />

export default App
