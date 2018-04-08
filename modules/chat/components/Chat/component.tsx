import * as React from "react";

import { Conversation, TextEditor } from "modules/chat";

const Chat = () => (
  <div>
    <Conversation />
    <TextEditor />
  </div>
);

export { Chat };
