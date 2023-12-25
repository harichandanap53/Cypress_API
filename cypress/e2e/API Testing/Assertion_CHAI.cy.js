const chai = require("chai");
const expect = chai.expect;

function sum(a, b) {
  return a + b;
}

describe("Sum", () => {
  it("should add two numbers correctly", () => {
    const result = sum(5, 7);
    console.log(`The sum of 5 and 7 is ${result}`);
    expect(result).to.equal(12);
  });
});
