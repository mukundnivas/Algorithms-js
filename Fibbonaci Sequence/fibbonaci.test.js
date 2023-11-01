const fibbonaci = require("./fibbonaci");

test("Fibbonaci of 5", () => {
  expect(fibbonaci(5)).toBe(5);
});

test("Fibbonaci of 9", () => {
  expect(fibbonaci(9).toBe(34));
});
