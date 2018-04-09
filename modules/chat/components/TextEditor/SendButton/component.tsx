import * as React from "react";

import { Icon } from "modules/icons";

import sendBtn from "./send-button.svg";

const Component = (props) => (
  <div className={props.className}>
    <Icon src={sendBtn} />
  </div>
);

export { Component };
