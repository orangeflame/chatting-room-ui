import { sizeIn } from "./sizeIn";

test("uses `em` by default", () => {
  expect(sizeIn()).toBe("1em");
  expect(sizeIn(1)).toBe("1.125em");
});

test("uses the provided unit", () => {
  expect(sizeIn(0, "px")).toBe("1px");
  expect(sizeIn(1, "px")).toBe("1.125px");
  expect(sizeIn(0, "")).toBe("1");
});

test("returns a unitless string if an empty string is provided as unit", () => {
  expect(sizeIn(0, "")).toBe("1");
});
