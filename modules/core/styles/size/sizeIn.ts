import { size } from "./size";

export const sizeIn = (times = 0, unit = "em"): string => `${size(times)}${unit}`;
