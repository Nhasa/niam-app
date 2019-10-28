import React from 'react'
import NavigationBar from './NavigationBar'
import { Container } from 'react-bootstrap'
import FlashMessagesList from './flash/FlashMessageList'
import './App.css'

const App = ({ children }) => (
  <Container>
    <NavigationBar />
    <FlashMessagesList />
    {children}
  </Container>
)

export default App
