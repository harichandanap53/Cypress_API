describe("GET Request Test", () => {
  it("Check the response status and data", () => {
    cy.request({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/todos/1", // API endpoint
    }).then((response) => {
      expect(response.status).to.eq(200); // Check if response status is 200
      expect(response.body).to.have.property("title"); // Check if response body has a property 'title'
      expect(response.body).to.have.property("completed"); // Check if response body has a property 'completed'
    });
  });
});
