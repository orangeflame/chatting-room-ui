import * as base64 from "base-64";
import { API_BASE_URL, fetch } from "modules/core";

export interface Message {
  id: string;
  message: string;
  sentAt: string;
  user: string;
  receivedByServerAt: string;
}

export const messagesLoader = {
  async fetchMessages({ username, password }: { username: string; password: string }): Promise<Message[]> {
    const rawResponse = await fetch(`${API_BASE_URL}/messages`, {
      headers: {
        Authorization: `Basic ${base64.encode(`${username}:${password}`)}`,
        "content-type": "application/json",
      },
      method: "get",
    });
    return await rawResponse.json();
  },
};
