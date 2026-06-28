const { sum } = require("../Sum");

test("Sum of two numbers", () => {
  const result = sum(2, 3);

  //Assertion
  expect(result).toBe(5);
});
