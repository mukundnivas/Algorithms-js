const isLinearSearch = require("./isLinearSearch");

test("Searching via Linear Search if '2' is present in the array [41,42,1,86,2,31,52]", () => {
  expect(isLinearSearch([41, 42, 1, 86, 2, 31, 52], 2)).toBe(true);
});

test("Searching via Linear Search if '34' is present in the string [42,23,21,586,642,31,52]", () => {
  expect(isLinearSearch([42, 23, 21, 586, 642, 31, 52], 32)).toBe(false);
});
