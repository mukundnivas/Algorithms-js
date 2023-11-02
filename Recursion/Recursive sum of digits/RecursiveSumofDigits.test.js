const sumOfDigits = require("./RecursiveSumofDigits");

test("Sum of the digits 12345", () => {
  expect(sumOfDigits(12345)).toBe(15);
});

test("Sum of the digits 34632", () => {
  expect(sumOfDigits(34632)).toBe(18);
});
