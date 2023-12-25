it("Post", () => {
  cy.request({
    method: "POST",
    url: "https://jsonplaceholder.typicode.com/posts/",
    body: {
      title: "TestPost",
      body: "This is Post call",
      userId: 1,
    },
  })
    .its("status")
    .should("equal", 201);
});
