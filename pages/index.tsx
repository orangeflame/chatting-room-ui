import * as React from "react";

import { Bubble } from "modules/chat/components/Bubble/component";
import { ThemeProvider, themes } from "modules/core/styles";

export default () => (
  <ThemeProvider theme={themes.normal}>
    <div>
      Hi, there <Bubble />
    </div>
  </ThemeProvider>
);
