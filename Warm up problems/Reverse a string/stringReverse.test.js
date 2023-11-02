const stringReverse = require("./stringReverse");

test("Reverse the string 'paper'", () => {
  expect(stringReverse("paper")).toBe("repap");
});

test("Reverse the string 'automation'", () => {
  expect(stringReverse("automation")).toBe("noitamotua");
});
