const RecursiveFibonnnaciSeq = require("./RecursiveFibonnnaciSeq");

test("test to determine 2nd Fibbonaci number", () => {
  expect(RecursiveFibonnnaciSeq(0)).toBe(0);
});

test("test to determine 3rd Fibbonaci number", () => {
  expect(RecursiveFibonnnaciSeq(2)).toBe(1);
});

test("test to determine 6th Fibbonaci number", () => {
  expect(RecursiveFibonnnaciSeq(6)).toBe(8);
});
