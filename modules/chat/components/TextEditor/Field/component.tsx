import * as React from "react";
import ContentEditable from "react-contenteditable";

export interface Props {
  className?: string;
  html?: any;
  onTextChange: (string) => void;
}

class Component extends React.PureComponent<Props> {
  public static displayName = "Field";

  public render() {
    return (
      <ContentEditable
        html={this.props.html}
        className={this.props.className}
        contentEditable
        onChange={this.onTextChange}
      />
    );
  }

  private onTextChange = (event: any) => {
    return this.props.onTextChange(event.target.value);
  };
}

export { Component };
