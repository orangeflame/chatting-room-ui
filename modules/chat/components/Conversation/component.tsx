import * as React from "react";

import { Bubble } from "modules/chat";

const Conversation = () => (
  <div>
    <Bubble from="left" tail separation="small">
      Ruben
    </Bubble>
    <Bubble from="left" separation="big">
      Sunny
    </Bubble>
    <Bubble from="right" tail separation="small">
      John
    </Bubble>
    <Bubble from="right" separation="big">
      Ha
    </Bubble>
    <Bubble from="right" tail separation="small">
      John1
    </Bubble>
    <Bubble from="right" separation="big">
      Ha1
    </Bubble>
  </div>
);

export { Conversation };
