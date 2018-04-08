import * as React from "react";

import { App } from "modules/app";
import { BubbleFromLeft } from "modules/chat/components/Bubble/BubbleFromLeft";å
import { Bubble } from "modules/chat/components/Bubble/component";
import { ThemeProvider, themes } from "modules/core/styles";

export default () => (
  <ThemeProvider theme={themes.normal}>
    <App>
      <div>
        <span>Hi, there</span>
        <Bubble>Hello</Bubble>
        <Bubble>dega</Bubble>
        <Bubble>Le</Bubble>
        <BubbleFromLeft>Ruben</BubbleFromLeft>
      </div>
    </App>
  </ThemeProvider>
);
