import { size, sizeIn } from "./size";

export interface Theme {
  colorPrimary: string;
  sizeCornerBubble: string;
  size: typeof size;
  sizeIn: typeof sizeIn;
}

export const normal: Theme = {
  colorPrimary: "#dcf8c6",
  size,
  sizeCornerBubble: "0.25em",
  sizeIn,
};
