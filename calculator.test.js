const { add } = require("./calculator");

test("returns 0 for empty string", () => {
  expect(add("")).toBe(0);
});

test("returns number itself when only one number is provided", () => {
  expect(add("1")).toBe(1);
});

test("returns sum of two comma-separated numbers", () => {
  expect(add("1,2")).toBe(3);
});
