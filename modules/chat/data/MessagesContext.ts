import * as React from "react";

import { Message } from "./messagesLoader";

interface MessagesContext {
  Provider: React.ComponentClass<{ value: Message[] }>;
  Consumer: React.ComponentClass<{ children: (messages: Message[]) => React.ReactNode }>;
}

export const MessagesContext: MessagesContext = (React as any).createContext("messages");
