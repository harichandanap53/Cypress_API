it("Put", () => {
  cy.request({
    method: "PUT",
    url: "https://jsonplaceholder.typicode.com/posts/1",
    body: {
      title: "TestPost-updated",
      body: "This is put call",
      userId: 1,
      id: 1,
    },
  })
    .its("status")
    .should("equal", 200);
});
