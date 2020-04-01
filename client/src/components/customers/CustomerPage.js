import React from 'react';
import { Row, Col } from 'react-bootstrap'
import CustomerForm from './CustomerForm';

const mdColConfig = { span: 4, offset: 4 }

const CustomerPage = () => (
  <Row>
    <Col md={mdColConfig}>
      <CustomerForm />
    </Col>
  </Row>
)

export default CustomerPage;