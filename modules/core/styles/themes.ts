import { size, sizeIn } from "./size";

export const normal = {
  colorBg: "#fff",
  colorPrimary: "#dcf8c6",
  colorTextBase: "#000",
  fontBase: `-apple-system, "BlinkMacSystemFont", ".SFNSDisplay-Regular", "San Francisco", "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif`,
  shadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
  size,
  sizeBubbleTail: "0.5em",
  sizeCornerBubble: "10px",
  sizeIn,
};

export type Theme = typeof normal;
