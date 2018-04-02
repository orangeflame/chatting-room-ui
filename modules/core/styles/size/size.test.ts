import { size } from "./size";

test("returns 1 if 0 or no value are provided", () => {
  expect(size()).toBe(1);
  expect(size(0)).toBe(1);
});

test("returns the proper value if positive integers are provided", () => {
  expect(size(1)).toBeCloseTo(1.125);
  expect(size(7)).toBeCloseTo(2.281);
});

test("returns the proper value if negative integers are provided", () => {
  expect(size(-1)).toBeCloseTo(0.889);
  expect(size(-2)).toBeCloseTo(0.79);
  expect(size(-6)).toBeCloseTo(0.493);
});
