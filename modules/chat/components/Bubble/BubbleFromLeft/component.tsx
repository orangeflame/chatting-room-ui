import * as React from "react";

import { Icon } from "modules/icons";

import tailsSvg from "./tail.svg";

export interface Props {
  className?: string;
  type?: "primary" | "secondary";
  tail?: boolean;
  separation?: "big" | "small";
}

class Component extends React.PureComponent<Props> {
  public static displayName = "BubbleFromLeft";

  public render() {
    return (
      <div className={this.props.className}>
        <div>{this.props.children}</div>
        {!!this.props.tail && (
          <span>
            <Icon src={tailsSvg} />
          </span>
        )}
      </div>
    );
  }
}

export { Component };
