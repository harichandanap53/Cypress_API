const sinon = require("sinon");
const chai = require("chai");
const sinonChai = require("sinon-chai");

chai.use(sinonChai);
const expect = chai.expect;

const myModule = require("./myModule");

describe("myModule", () => {
  let myFunctionStub;

  beforeEach(() => {
    myFunctionStub = sinon.stub(myModule, "myFunction");
  });

  afterEach(() => {
    myFunctionStub.restore();
  });

  it("should call myFunction with the correct arguments", () => {
    myModule.someMethod("test");

    expect(myFunctionStub).to.have.been.calledWithExactly("test");
  });
});
