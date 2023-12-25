describe("DELETE request using cypress", () => {
  it("Should delete an existing record", () => {
    // Set up your delete URL
    const deleteUrl = "https://jsonplaceholder.typicode.com/posts/1";

    // Perform the DELETE request using cy.request
    cy.request({
      method: "DELETE",
      url: deleteUrl,
    }).then((response) => {
      // Assert the status code is 200
      expect(response.status).to.eq(200);
    });
  });
});
