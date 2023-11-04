const binarySearch = require("./binarySearch");

test("Searching via Linear Search if '23' is present in the array [423,12,134,23,2451,21,52]", () => {
  expect(binarySearch([423, 12, 134, 23, 2451, 21, 52], 23)).toBe(true);
});

test("Searching via Linear Search if '423' is present in the array [423,12,134,23,2451,21,52]", () => {
  expect(binarySearch([423, 12, 134, 23, 2451, 21, 52], 423)).toBe(true);
});

test("Searching via Linear Search if '52' is present in the array [423,12,134,23,2451,21,52]", () => {
  expect(binarySearch([423, 12, 134, 23, 2451, 21, 52], 52)).toBe(true);
});
