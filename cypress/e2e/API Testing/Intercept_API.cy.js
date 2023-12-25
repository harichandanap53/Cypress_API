describe("GET Request Test", () => {
  it("Simple API Intercept/ Spy API request", function () {
    cy.visit("https://dummyapi.io/explorer");
    cy.intercept({
      path: "data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10",
    }).as("comments");
    cy.get(".flex > :nth-child(5)").click();

    cy.wait("@comments").then((intercept) => {
      expect(intercept.response.body.limit).equal(10);
    });
  });
});
