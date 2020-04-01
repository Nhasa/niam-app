import React from 'react'
import { Card } from 'react-bootstrap'

const Transaction = ({ name }) => (
  <Card>
    <Card.Body>{name}</Card.Body>
  </Card>
)

export default Transaction