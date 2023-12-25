/// <reference types="Cypress"/>
const { expect, use } = require("chai");
it("GET", () => {
  var stat = cy
    .request("GET", "https://jsonplaceholder.typicode.com/posts")
    .its("status")
    .should("equal", 200);
  expect("stat").to.equal("200");
});
