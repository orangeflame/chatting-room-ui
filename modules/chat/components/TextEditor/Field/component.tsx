import * as React from "react";

export interface Props {
  className?: string;
  onTextChange: (string) => void;
  onSendMessage: (string) => void;
}

class Component extends React.PureComponent<Props> {
  public static displayName = "Field";

  public render() {
    return <div className={this.props.className} contentEditable onKeyUp={this.onTextChange} />;
  }

  private onTextChange = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const div = event.target as HTMLDivElement;
    const message = div.innerText;
    if (!(event.keyCode === 13)) {
      return this.props.onTextChange(message);
    }
    event.preventDefault();
    this.props.onSendMessage(div.innerText);
    div.innerText = "";
  };
}

export { Component };
