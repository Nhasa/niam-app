import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Customer = ({ name, id }) => (
  <Card>
    <Card.Link as={Link} to={`/customer/${id}`}/>
    <Card.Body>{name}</Card.Body>
  </Card>
)

export default Customer