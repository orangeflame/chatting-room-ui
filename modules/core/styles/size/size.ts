const sizeRatio = 1.125;

export const size = (times = 0): number => Math.pow(sizeRatio, times);
