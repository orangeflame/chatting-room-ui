import * as React from "react";

import { BubbleFromLeft } from "modules/chat/components/Bubble/BubbleFromLeft";
import { BubbleFromRight } from "modules/chat/components/Bubble/BubbleFromRight";

export interface Props {
  from: "left" | "right";
  tail?: boolean;
  separation?: "big" | "small";
}

class Component extends React.PureComponent<Props> {
  public static displayName = "Bubble";

  public render() {
    return this.props.from === "left" ? (
      <BubbleFromLeft {...this.props} type="primary" />
    ) : (
      <BubbleFromRight {...this.props} type="secondary" />
    );
  }
}

export { Component };
