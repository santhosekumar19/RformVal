import React, { Component } from "react";

class Message extends Component {
  render() {
    return <div>{this.props.msg}</div>;
  }
}

export default Message;