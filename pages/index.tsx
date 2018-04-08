import * as React from "react";

import { App } from "modules/app";
import { Bubble } from "modules/chat/components/Bubble";
import { ThemeProvider, themes } from "modules/core/styles";

export default () => (
  <ThemeProvider theme={themes.normal}>
    <App>
      <div>
        <span>Hi, there</span>
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
    </App>
  </ThemeProvider>
);
