it("Delete", () => {
  cy.request({
    method: "DELETE",
    url: "https://jsonplaceholder.typicode.com/posts/1",
  })
    .its("status")
    .should("equal", 200);
});
