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
      const from = msg.from === me.id ? "left" : "right";
      const tail = index === 0;
      const separation = index === msgs.length - 1 ? "big" : "small";
      return (
        <Bubble from={from} tail={tail} separation={separation}>
          {msg.message}
        </Bubble>
      );
    })}
  </div>
);

export { Conversation };
