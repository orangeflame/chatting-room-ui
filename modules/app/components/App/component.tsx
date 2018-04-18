import * as React from "react";

export class App extends React.Component<{ className?: string }> {
  public render() {
    return <div className={this.props.className}>{this.props.children}</div>;
  }
}
