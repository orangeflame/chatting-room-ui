import * as React from "react";

export interface Props {
  src: string;
  className?: string;
}

class Component extends React.Component<Props> {
  public static displayName = "Icon";

  public render() {
    return <i dangerouslySetInnerHTML={{ __html: this.props.src }} className={this.props.className} />;
  }
}

export { Component };
