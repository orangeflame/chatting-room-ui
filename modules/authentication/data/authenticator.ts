import { API_BASE_URL, fetch } from "modules/core";

import { Me } from "./Me";

export const authenticator = {
  async signIn({ username, password }: { username: string; password: string }): Promise<Me> {
    const rawResponse = await fetch(`${API_BASE_URL}/sign-in`, {
      body: JSON.stringify({ username, password }),
      headers: { "content-type": "application/json" },
      method: "post",
    });
    if (!rawResponse.ok) throw new Error(`${rawResponse.status}`);
    return await rawResponse.json();
  },
  async signUp({ username, password }: { username: string; password: string }): Promise<Me> {
    const rawResponse = await fetch(`${API_BASE_URL}/sign-up`, {
      body: JSON.stringify({ username, password }),
      headers: { "content-type": "application/json" },
      method: "post",
    });
    return await rawResponse.json();
  },
};
