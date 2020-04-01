import React from 'react'
import { connect } from 'react-redux';
import { addFlashMessage } from '../actions/flashMessages';

export default function (ComposedComponent) {
  class Authenticate extends React.PureComponent {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.addFlashMessage({
          type: 'error',
          text: 'You need to login to access this page'
        });

        this.context.router.push('/login');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.context.router.push('/')
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: React.PropTypes.bool.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired
  }

  Authenticate.contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  const mapStateToProps = ({ auth }) => {
    return {
      isAuthenticated: auth.isAuthenticated
    }
  }

  return connect(mapStateToProps, { addFlashMessage })(Authenticate);
}