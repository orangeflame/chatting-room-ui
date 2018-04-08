import * as React from "react";

import { App } from "modules/app";
import { Chat } from "modules/chat";
import { ThemeProvider, themes } from "modules/core/styles";

export default () => (
  <ThemeProvider theme={themes.normal}>
    <App>
      <div>
        <Chat />
      </div>
    </App>
  </ThemeProvider>
);
