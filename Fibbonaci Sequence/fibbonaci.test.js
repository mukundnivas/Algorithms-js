const fibbonaci = require("./fibbonaci");

test("Fibbonaci of 5", () => {
  expect(fibbonaci(5)).toStrictEqual([0, 1, 1, 2, 3]);
});

test("Fibbonaci of 9", () => {
  expect(fibbonaci(9)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21]);
});
