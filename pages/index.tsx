import * as cookies from "next-cookies";
import * as React from "react";

import { App, ThemeSwitch } from "modules/app";
import { authenticator, Me, MeContext, SignIn } from "modules/authentication";
import { Chat, Message, MessagesContext, messagesLoader } from "modules/chat";
import { Theme, ThemeProvider, themes } from "modules/core/styles";

export default class Index extends React.Component<
  { messages: Message[]; me?: Me },
  { messages: Message[]; theme: Theme }
> {
  public static async getInitialProps(ctx) {
    const { username, password } = cookies(ctx);
    if (!username || !password) {
      return {};
    }

    const me = await authenticator.signIn({ username, password });
    const messages = await messagesLoader.fetchMessages(me);
    return { messages, me };
  }

  public state = { messages: this.props.messages, theme: themes.dark };

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
          <ThemeSwitch defaultValue={themes.normal} onChange={(theme) => this.onThemeChange(theme)} />
          {!!this.props.me && (
            <MeContext.Provider value={this.props.me}>
              <MessagesContext.Provider value={this.state.messages}>
                <Chat />
              </MessagesContext.Provider>
            </MeContext.Provider>
          )}
          {!this.props.me && <SignIn />}
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

  private onThemeChange = (theme) => {
    this.setState({ theme });
  };
}
