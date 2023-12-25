describe("PUT Request Test", () => {
  it("Update a todo", () => {
    cy.request({
      method: "PUT",
      url: "https://jsonplaceholder.typicode.com/todos/1", // API endpoint
      body: {
        title: "Updated Test todo",
        completed: true,
      },
    }).then((response) => {
      expect(response.status).to.eq(200); // Check if response status is 200
      expect(response.body).to.have.property("id", 1); // Check if response body has a property 'id' with value '1'
      expect(response.body).to.have.property("title", "Updated Test todo"); // Check if response body has a property 'title' with value 'Updated Test todo'
      expect(response.body).to.have.property("completed", true); // Check if response body has a property 'completed' with value 'true'
    });
  });
});
