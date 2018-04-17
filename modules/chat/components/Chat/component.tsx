import * as React from "react";

import { MeContext } from "modules/authentication";
import { Conversation, TextEditor } from "modules/chat";

const Component = (props) => (
  <div className={props.className}>
    <Conversation />
    <MeContext.Consumer>{(me) => <TextEditor me={me} />}</MeContext.Consumer>
  </div>
);

export { Component };
