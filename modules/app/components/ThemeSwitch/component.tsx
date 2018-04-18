import * as React from "react";

import { Theme, themes } from "modules/core/styles";

export interface Props {
  className?: string;
  defaultValue: Theme;
  onChange(theme: Theme);
}

export class ThemeSwitch extends React.Component<Props, { theme: Theme }> {
  public state = { theme: this.props.defaultValue };

  public render() {
    return (
      <button className={this.props.className} onClick={this.onClick}>
        {this.state.theme === themes.normal ? "🌝" : "🌚"}
      </button>
    );
  }

  private onClick = () => {
    this.setState(
      (state) => ({
        theme: state.theme === themes.normal ? themes.dark : themes.normal,
      }),
      () => this.props.onChange(this.state.theme),
    );
  };
}
