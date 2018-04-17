import * as React from "react";

import { App } from "modules/app";
import { Chat, Message, messagesLoader } from "modules/chat";
import { ThemeProvider, themes } from "modules/core/styles";

export default class Index extends React.Component<{ messages: Message[] }> {
  public static async getInitialProps(ctx) {
    const messages = await messagesLoader.fetchMessages({ username: "le", password: "123" });
    return { messages };
  }

  public render() {
    return (
      <ThemeProvider theme={themes.normal}>
        <App>
          <Chat />
        </App>
      </ThemeProvider>
    );
  }
}
