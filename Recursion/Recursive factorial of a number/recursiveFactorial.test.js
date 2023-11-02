const recursiveFactorial = require("./recursiveFactorial");

test("Factorial of 4", () => {
  expect(recursiveFactorial(4)).toBe(24);
});

test("Factorial of 10", () => {
  expect(recursiveFactorial(10)).toBe(3628800);
});
