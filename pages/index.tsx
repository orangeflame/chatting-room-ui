import * as React from "react";

import { Bubble } from "modules/chat/components/Bubble/component";
import { ThemeProvider, themes } from "modules/core/styles";

export default () => (
  <ThemeProvider theme={themes.normal}>
    <div>
      <span>Hi, there</span>
      <Bubble>Hello</Bubble>
      <Bubble>dega</Bubble>
      <Bubble>Le</Bubble>
    </div>
  </ThemeProvider>
);
