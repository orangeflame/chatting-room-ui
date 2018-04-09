import * as React from "react";

export interface Props {
  className?: string;
  onTextChange?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

class Component extends React.PureComponent<Props> {
  public static displayName = "Field";

  public render() {
    return <div className={this.props.className} contentEditable onKeyDown={this.props.onTextChange} />;
  }
}

export { Component };
