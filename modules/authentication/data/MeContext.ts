import * as React from "react";

import { Me } from "./Me";

interface MeContext {
  Provider: React.ComponentClass<{ value: Me }>;
  Consumer: React.ComponentClass<{ children: (messages: Me) => React.ReactNode }>;
}

export const MeContext: MeContext = (React as any).createContext("me");
