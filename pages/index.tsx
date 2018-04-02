import * as React from "react";

import { Bubble } from "modules/chat/components/Bubble/component";
import { ThemeProvider, themes } from "modules/core/styles";

export default () => (
  <ThemeProvider theme={themes.normal}>
    <div>
      <span>Hi, there</span>
      <Bubble>1</Bubble>
      <Bubble>2</Bubble>
      <Bubble>3</Bubble>
    </div>
  </ThemeProvider>
);
