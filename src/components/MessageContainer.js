import React, { Component } from 'react';
import Message from './Message';
class MessageContainer extends Component {
  render() {
    return (
      <div>
        <Message text="Hello World!" />
      </div>
    );
  }
}

export default MessageContainer;
