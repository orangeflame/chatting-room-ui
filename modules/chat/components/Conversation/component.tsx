import * as React from "react";

import { Bubble, MessagesContext } from "modules/chat";

const me = { id: "r1xnLJQ3M" };

const Component = (props) => (
  <div className={props.className}>
    <div>
      <MessagesContext.Consumer>
        {(messages) =>
          messages.map((msg, index, msgs) => {
            const lastMsg = msgs[index - 1] || {};
            const from = msg.user === me.id ? "right" : "left";
            const hasNewSender = lastMsg.user !== msg.user;
            const separation = hasNewSender ? "big" : "small";
            return (
              <Bubble key={msg.id} from={from} tail={hasNewSender} separation={separation}>
                {msg.message}
              </Bubble>
            );
          })
        }
      </MessagesContext.Consumer>
    </div>
  </div>
);

export { Component };
