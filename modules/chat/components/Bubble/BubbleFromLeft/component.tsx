import * as React from "react";

import { Icon } from "modules/icons";

import tailsSvg from "./tail.svg";

export interface Props {
  className?: string;
  type?: "primary" | "secondary";
  tail?: boolean;
  separation?: "big" | "small";
  message?: string;
}

class Component extends React.PureComponent<Props> {
  public static displayName = "BubbleFromLeft";

  public render() {
    if (!this.props.message) {
      return null;
    }
    return (
      <div className={this.props.className}>
        <div dangerouslySetInnerHTML={{ __html: this.props.message }} />
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
