import { size, sizeIn } from "./size";

export const normal = {
  colorBg: "#fff",
  colorPrimary: "#dcf8c6",
  colorTextBase: "#000",
  fontBase: `-apple-system, "BlinkMacSystemFont", ".SFNSDisplay-Regular", "San Francisco", "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif`,
  size,
  sizeBubbleTail: "0.5em",
  sizeCornerBubble: "10px",
  sizeIn,
};

export type Theme = typeof normal;
