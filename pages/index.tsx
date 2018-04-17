import * as React from "react";

import { App } from "modules/app";
import { authenticator, Me, MeContext } from "modules/authentication";
import { Chat, Message, MessagesContext, messagesLoader } from "modules/chat";
import { Theme, ThemeProvider, themes } from "modules/core/styles";

export default class Index extends React.Component<
  { messages: Message[]; me?: Me },
  { messages: Message[]; theme: Theme }
> {
  public static async getInitialProps() {
    const me = await authenticator.signIn({ username: "le", password: "123" });
    const messages = await messagesLoader.fetchMessages(me);
    return { messages, me };
  }

  public state = { messages: this.props.messages, theme: themes.normal };

  private interval: NodeJS.Timer;

  public componentDidMount() {
    this.interval = setInterval(this.fetchMessages, 1000);
  }

  public componentWillUnmount() {
    clearImmediate(this.interval);
  }

  public render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <App>
          {!!this.props.me && (
            <MeContext.Provider value={this.props.me}>
              <MessagesContext.Provider value={this.state.messages}>
                <Chat />
              </MessagesContext.Provider>
            </MeContext.Provider>
          )}
          {this.props.me && <span>Login</span>}
        </App>
      </ThemeProvider>
    );
  }

  private fetchMessages = async () => {
    if (!this.props.me) return;
    const messages = await messagesLoader.fetchMessages(this.props.me);
    messages.sort((a, b) => a.sentAt.localeCompare(b.sentAt));
    this.setState({ messages });
  };
}
