it("creates a card in a board's column", () => {
  cy.intercept("GET", "**/boards/tat/cards").as("getCards");

  cy.visit("/boards/tat");
  cy.get('[data-cy="add-card-btn"]').click();
  cy.get('[data-cy="card-title-input"]').type("Bug #420");
  cy.get('[data-cy="card-title-description"]').type(
    "Test bug #420 in production"
  );
  cy.get('[data-cy="create-card-btn"]').click();

  cy.wait("@getCards");

  cy.contains('[data-cy="card"]', "Bug #420").should("be.visible");
});
