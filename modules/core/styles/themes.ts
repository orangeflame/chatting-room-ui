import { size, sizeIn } from "./size";

export interface Theme {
  colorBg: string;
  colorPrimary: string;
  colorTextBase: string;
  sizeCornerBubble: string;
  size: typeof size;
  sizeIn: typeof sizeIn;
  fontBase: string;
}

export const normal: Theme = {
  colorBg: "#fff",
  colorPrimary: "#dcf8c6",
  colorTextBase: "#000",
  fontBase: `-apple-system, "BlinkMacSystemFont", ".SFNSDisplay-Regular", "San Francisco", "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif`,
  size,
  sizeCornerBubble: "10px",
  sizeIn,
};
