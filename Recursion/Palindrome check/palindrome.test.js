const palindrome = require("./palindrome");

test("Check if 'Racecar' is a palindrome", () => {
  expect(palindrome("Racecar")).toBe(true);
});

test("Check if 'MOM' is a palindrome", () => {
  expect(palindrome("MOM")).toBe(true);
});

test("Check if 'happy' is a palindrome", () => {
  expect(palindrome("happy")).toBe(false);
});

test("Check if 'raar' is a palindrome", () => {
  expect(palindrome("raar")).toBe(true);
});
