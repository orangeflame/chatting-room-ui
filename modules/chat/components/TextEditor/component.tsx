import * as React from "react";

import { Me } from "modules/authentication";
import { messagesLoader } from "modules/chat";

import { Field, SendButton } from "./";

export interface Props {
  className?: string;
  me: Me;
}

export interface State {
  message: string;
}

class Component extends React.PureComponent<Props, State> {
  public static displayName = "TextEditor";

  public state = { message: "" };

  public render() {
    return (
      <div className={this.props.className}>
        <Field html={this.state.message} onTextChange={(event) => this._onTextChange(event)} />
        <SendButton onClick={this._onSendClick} />
      </div>
    );
  }

  private _onSendClick = () => {
    this._sendMessage();
  };

  private _sendMessage() {
    messagesLoader.sendMessages({
      message: this.state.message,
      password: this.props.me.password,
      username: this.props.me.username,
    });
    this.setState({ message: "" });
  }

  private _onTextChange(message) {
    return this.setState({
      message,
    });
  }
}

export { Component };
