import * as cookies from "js-cookie";
import * as React from "react";

import { authenticator, Me } from "modules/authentication";

export interface State {
  password: string;
  username: string;
}

class Component extends React.PureComponent<{}, State> {
  public static displayName = "SignIn";

  public render() {
    return (
      <div>
        <div>
          <label>
            user
            <input type="text" name="username" onChange={this.onUserNameChanged} />
          </label>
        </div>
        <div>
          <label>
            password
            <input type="password" name="password" onChange={this.onPasswordChanged} />
          </label>
        </div>
        <div>
          <button onClick={this.onSignInClicked}>sign in</button>
          <button onClick={this.onSignUpClicked}>sign up</button>
        </div>
      </div>
    );
  }

  private onUserNameChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      username: event.currentTarget.value,
    });
  };

  private onPasswordChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      password: event.currentTarget.value,
    });
  };

  private onSignInClicked = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const me = await authenticator.signIn({ username: this.state.username, password: this.state.password });
    this.saveUser(me);
  };

  private onSignUpClicked = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const me = await authenticator.signUp({ username: this.state.username, password: this.state.password });
    this.saveUser(me);
  };

  private saveUser = (me: Me) => {
    cookies.set("username", me.username);
    cookies.set("password", me.password);
    location.reload();
  };
}

export { Component };
