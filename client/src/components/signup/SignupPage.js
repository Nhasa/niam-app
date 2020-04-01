import React from 'react';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'
import { userSignupRequest, isUserExists } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages';

const mdColConfig = { span: 4, offset: 4 }

class SignupPage extends React.PureComponent {
  render() {
    const { userSignupRequest, addFlashMessage, isUserExists } = this.props;
    return (
      <Row>
        <Col md={mdColConfig}>
          <SignupForm addFlashMessage={addFlashMessage}
            isUserExists={isUserExists}
            userSignupRequest={userSignupRequest} />
        </Col>
      </Row>
    )
  }
}

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  isUserExists: PropTypes.func.isRequired
}

export default connect(() => { return {} }, { isUserExists, addFlashMessage, userSignupRequest })(SignupPage);