import { add } from "./calculator";

describe("String Calculator", () => {
  test("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns number itself when only one number is provided", () => {
    expect(add("1")).toBe(1);
  });

  test("returns sum for multiple comma-separated numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  test("handles new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("supports custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test("throws error on negative numbers with message", () => {
    expect(() => add("1,-2,3,-4")).toThrow(
      "negative numbers not allowed: -2,-4"
    );
  });

  test("handles invalid custom delimiter format", () => {
    expect(() => add("//\n1,2")).toThrow("Invalid custom delimiter format");
  });

  test("handles multiple custom delimiters", () => {
    expect(add("//|\n1|2|3")).toBe(6);
  });

  test("handles custom delimiter with special characters", () => {
    expect(add("//*\n1*2*3")).toBe(6);
  });
});
