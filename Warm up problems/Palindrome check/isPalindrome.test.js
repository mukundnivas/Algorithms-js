const isPalindrome = require("./isPalindrome");

test("Check if 'Racecar' is a palindrome", () => {
  expect(isPalindrome("Racecar")).toBe(true);
});

test("Check if 'MOM' is a palindrome", () => {
  expect(isPalindrome("MOM")).toBe(true);
});

test("Check if 'happy' is a palindrome", () => {
  expect(isPalindrome("happy")).toBe(false);
});

test("Check if 'raar' is a palindrome", () => {
  expect(isPalindrome("raar")).toBe(true);
});
