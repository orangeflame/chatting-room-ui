import * as React from "react";

import { Conversation, TextEditor } from "modules/chat";

const Component = (props) => (
  <div className={props.className}>
    <Conversation />
    <TextEditor />
  </div>
);

export { Component };
