import * as React from "react";

import { Field, SendButton } from "./";

export interface Props {
  className?: string;
}

export interface State {
  message: string;
}

class Component extends React.PureComponent<Props, State> {
  public static displayName = "TextEditor";

  public render() {
    return (
      <div className={this.props.className}>
        <Field onTextChange={(event) => this._onTextChange(event)} />
        <SendButton onClick={this._onSendClick} />
      </div>
    );
  }

  private _onSendClick() {
    this._sendMessage();
  }

  private _sendMessage() {
    this.setState({ message: "" });
  }

  private _onTextChange(event: React.KeyboardEvent<HTMLDivElement>) {
    const div = event.target as HTMLDivElement;
    const message = div.innerText;
    if (!(event.keyCode === 13)) {
      return this.setState({
        message,
      });
    }
    div.innerText = "";
    this._sendMessage();
    event.preventDefault();
  }
}

export { Component };
