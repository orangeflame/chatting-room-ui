import * as React from "react";

import { Icon } from "modules/icons";

import sendBtn from "./send-button.svg";

export interface Props {
  className?: string;
  onClick: () => void;
}

class Component extends React.PureComponent<Props> {
  public static displayName = "SendButton";

  public render() {
    return (
      <div className={this.props.className}>
        <Icon src={sendBtn} onClick={this.props.onClick} />
      </div>
    );
  }
}

export { Component };
