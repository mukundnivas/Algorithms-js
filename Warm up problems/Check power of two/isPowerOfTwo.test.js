const isPowerOfTwo = require("./isPowerOfTwo");

test("Checking if 22 is a power of 2", () => {
  expect(isPowerOfTwo(22)).toBe(false);
});

test("Checking if 16 is a power of 2", () => {
  expect(isPowerOfTwo(16)).toBe(true);
});

test("Checking if 21 is a power of 2", () => {
  expect(isPowerOfTwo(21)).toBe(false);
});
