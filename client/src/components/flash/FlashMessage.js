import React from 'react';
import { Alert } from 'react-bootstrap'

class FlashMessage extends React.PureComponent {
  onClick = () => {
    this.props.deleteFlashMessage(this.props.message.id);
  }

  render() {
    const { type, text } = this.props.message;
    const variant = type === 'error' ? 'danger' : type
    return (
      <Alert variant='danger' onClose={this.onClick} dismissible>
        <Alert.Heading>{variant}</Alert.Heading>
        <p>
          {text}
        </p>
      </Alert>
    )
  }
}

export default FlashMessage;