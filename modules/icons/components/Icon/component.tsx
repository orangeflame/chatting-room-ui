import * as React from "react";

export interface Props {
  src: any;
  className?: string;
  onClick?: (evt: React.KeyboardEvent<HTMLDivElement>) => void;
}

class Component extends React.Component<Props> {
  public static displayName = "Icon";

  public render() {
    return (
      <i
        onClick={this.props.onClick}
        dangerouslySetInnerHTML={{ __html: this.props.src }}
        className={this.props.className}
      />
    );
  }
}

export { Component };
