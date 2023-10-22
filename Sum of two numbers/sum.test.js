const sum = require("./sum");

test("add 1 and 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("add 1 and -2 to equal -1", () => {
  expect(sum(1, -2)).toBe(-1);
});

test("add with no arguments", () => {
  expect(sum()).toBeNaN();
});
