import * as React from "react";

import { Bubble } from "modules/chat";

const me = { id: "2" };
const messages = [
  { id: "1", from: "1", message: "Hi, there!" },
  { id: "2", from: "1", message: "How have you been?" },
  { id: "3", from: "2", message: "Hey!" },
  { id: "4", from: "2", message: "Good, and you?" },
];

for (let i = 0; i < 50; i += 1) {
  messages.push({ id: `${1000 + i}`, from: "2", message: "Good, and you?" });
}

const Conversation = () => (
  <div>
    {messages.map((msg, index, msgs) => {
      const lastMsg = msgs[index - 1] || {};
      const from = msg.from === me.id ? "right" : "left";
      const hasNewSender = lastMsg.from !== msg.from;
      const separation = hasNewSender ? "big" : "small";
      return (
        <Bubble key={msg.id} from={from} tail={hasNewSender} separation={separation}>
          {msg.message}
        </Bubble>
      );
    })}
  </div>
);

export { Conversation };
