import * as React from "react";

import { MeContext } from "modules/authentication";
import { Bubble, MessagesContext } from "modules/chat";

const Component = (props) => (
  <div className={props.className}>
    <div>
      <MeContext.Consumer>
        {(me) => (
          <MessagesContext.Consumer>
            {(messages) =>
              messages.map((msg, index, msgs) => {
                const lastMsg = msgs[index - 1] || {};
                const from = msg.userId === me.id ? "right" : "left";
                const hasNewSender = lastMsg.userId !== msg.userId;
                const separation = hasNewSender ? "big" : "small";
                return (
                  <Bubble key={msg.id} from={from} tail={hasNewSender} separation={separation}>
                    {msg.message}
                  </Bubble>
                );
              })
            }
          </MessagesContext.Consumer>
        )}
      </MeContext.Consumer>
    </div>
  </div>
);

export { Component };
