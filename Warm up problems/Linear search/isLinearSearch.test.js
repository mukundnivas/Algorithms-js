const isLinearSearch = require("./isLinearSearch");

test("Searching via Linear Search if '2' is present in the string [41,42,1,86,2,31,52]", () => {
  expect(isLinearSearch([41, 42, 1, 86, 2, 31, 52])).toBe(true);
});
