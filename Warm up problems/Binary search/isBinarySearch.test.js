const isBinarySearch = require("./isBinarySearch");

test("Searching via Linear Search if '23' is present in the array [423,12,134,23,2451,21,52]", () => {
  expect(isBinarySearch([423, 12, 134, 23, 2451, 21, 52], 23)).toBe(true);
});
