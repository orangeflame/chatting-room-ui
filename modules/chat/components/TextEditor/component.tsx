import * as React from "react";

import { Field, SendButton } from "./";

const Component = (props) => (
  <div className={props.className}>
    <Field />
    <SendButton />
  </div>
);

export { Component };
