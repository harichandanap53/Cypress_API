describe("POST Request Test", () => {
  it("Create a new todo", () => {
    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/todos", // API endpoint
      body: {
        title: "Test todo",
        completed: false,
      },
    }).then((response) => {
      expect(response.status).to.eq(201); // Check if response status is 201
      expect(response.body).to.have.property("id"); // Check if response body has a property 'id'
      expect(response.body).to.have.property("title", "Test todo"); // Check if response body has a property 'title' with value 'Test todo'
      expect(response.body).to.have.property("completed", false); // Check if response body has a property 'completed' with value 'false'
    });
  });
});
