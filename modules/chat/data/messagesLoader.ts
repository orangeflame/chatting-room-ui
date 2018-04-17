import * as base64 from "base-64";
import { API_BASE_URL, fetch } from "modules/core";

export interface Message {
  id: string;
  message: string;
  sentAt: string;
  userId: string;
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
  async sendMessages({
    message,
    username,
    password,
  }: {
    message: string;
    username: string;
    password: string;
  }): Promise<Message[]> {
    const rawResponse = await fetch(`${API_BASE_URL}/messages`, {
      body: JSON.stringify({ message, sentAt: new Date() }),
      headers: {
        Authorization: `Basic ${base64.encode(`${username}:${password}`)}`,
        "content-type": "application/json",
      },
      method: "post",
    });
    return await rawResponse.json();
  },
};
