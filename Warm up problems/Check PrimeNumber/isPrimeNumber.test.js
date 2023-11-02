const isPrimeNumber = require("./isPrimeNumber");

test("check if 23 is a prime number", () => {
  expect(isPrimeNumber(23)).toBe(true);
});

test("check if 45 is a prime number", () => {
  expect(isPrimeNumber(45)).toBe(false);
});
