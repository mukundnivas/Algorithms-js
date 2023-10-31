const factorial = require("./factorial");

test("factorial of 5 to result 120", () => {
  expect(factorial(5)).toBe(120);
});

test("factorial of 10 to result 3628800", () => {
  expect(factorial(10)).toBe(3628800);
});

test("factorial of 1 to result 1", () => {
  expect(factorial(1)).toBe(1);
});

test("factorial of 0 to result 0", () => {
  expect(factorial(0)).toBe(0);
});
