const chai = require("chai");
const expect = chai.expect;

const user = {
  id: 1,
  name: "John Doe",
  age: 30,
};

describe("User", () => {
  it("should have an id", () => {
    expect(user).to.have.property("id");
    expect(user).to.have.value("id");
  });

  it("should have a name", () => {
    expect(user).to.have.property("name");
  });

  it("should have an age", () => {
    expect(user).to.have.property("age");
  });
});
