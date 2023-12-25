# Cypress API testing

> Example on GET using cypress

In Cypress, we can make a GET request to a specific endpoint using the cy.request() method. This method returns the response body in its Promise.

Here is an example:

describe('GET Request Test', () => {
it('Check the response status and data', () => {
cy.request({
method: 'GET',
url: 'https://jsonplaceholder.typicode.com/todos/1', // API endpoint
}).then((response) => {
expect(response.status).to.eq(200); // Check if response status is 200
expect(response.body).to.have.property('title'); // Check if response body has a property 'title'
expect(response.body).to.have.property('completed'); // Check if response body has a property 'completed'
});
});
});
In this example, we make a GET request to the URL 'https://jsonplaceholder.typicode.com/todos/1'.
Then, we use the cy.request() method's response object to validate the response status and the properties of the response body.

> Example on POST using cypress

describe('POST Request Test', () => {
it('Create a new todo', () => {
cy.request({
method: 'POST',
url: 'https://jsonplaceholder.typicode.com/todos', // API endpoint
body: {
title: 'Test todo',
completed: false,
},
}).then((response) => {
expect(response.status).to.eq(201); // Check if response status is 201
expect(response.body).to.have.property('id'); // Check if response body has a property 'id'
expect(response.body).to.have.property('title', 'Test todo'); // Check if response body has a property 'title' with value 'Test todo'
expect(response.body).to.have.property('completed', false); // Check if response body has a property 'completed' with value 'false'
});
});
});
In this example, we make a POST request to the URL 'https://jsonplaceholder.typicode.com/todos'.
The body of the POST request contains a new todo item. Then, we use the cy.request() method's response object to validate the response status and the properties of the response body.

> Example on PUT request on cypress

describe('PUT Request Test', () => {
it('Update a todo', () => {
cy.request({
method: 'PUT',
url: 'https://jsonplaceholder.typicode.com/todos/1', // API endpoint
body: {
title: 'Updated Test todo',
completed: true,
},
}).then((response) => {
expect(response.status).to.eq(200); // Check if response status is 200
expect(response.body).to.have.property('id', 1); // Check if response body has a property 'id' with value '1'
expect(response.body).to.have.property('title', 'Updated Test todo'); // Check if response body has a property 'title' with value 'Updated Test todo'
expect(response.body).to.have.property('completed', true); // Check if response body has a property 'completed' with value 'true'
});
});
});
In this example, we make a PUT request to the URL 'https://jsonplaceholder.typicode.com/todos/1'.
The body of the PUT request contains an updated todo item. Then, we use the cy.request() method's response object to validate the response status and the properties of the response body.

> Example on DELETE request on cypress

describe('DELETE request using cypress', () => {
it('Should delete an existing record', () => {
// Set up your delete URL
const deleteUrl = 'https://jsonplaceholder.typicode.com/posts/1';
// Perform the DELETE request using cy.request
cy.request({
method: 'DELETE',
url: deleteUrl,
})
.then((response) => {
// Assert the status code is 200
expect(response.status).to.eq(200);
});
});
});
In this example, the test performs a DELETE request to the URL 'https://jsonplaceholder.typicode.com/posts/1' and checks if the response status code is 200,
which means the request was successful.

Remember to replace the delete URL with the appropriate URL for your specific application.

If the test is successful, the delete request was executed correctly. If the test fails, review the test code and ensure that the delete URL and status code expectations are correct.

### Clear understanding around cy.request, cy.route & cy.intercept

> cy.request: This command makes an HTTP request to a server during the test and allows the test to access the HTTP response object. This can be used for checking API responses.

Example:
cy.request('http://example.com/users')
.then((response) => {
expect(response.status).to.eq(200)
expect(response.body).to.have.property('users')
})

> cy.route: This command intercepts HTTP requests made during the test and replaces them with a response of your choice. This is commonly used for stubbing API requests.

Example:
cy.route('GET', 'http://example.com/users', 'fixture:users.json')
.as('getUsers')

cy.visit('/')
cy.wait('@getUsers')

> cy.intercept: This command intercepts HTTP requests or responses at the network level (similar to a browser's network inspector) and allows you to modify both requests and responses.

Example:
cy.intercept('GET', 'http://example.com/users').as('getUsers')

cy.visit('/')
cy.wait('@getUsers').then((interception) => {
expect(interception.response.statusCode).to.eq(200)
})

> It's important to note that cy.route is a stubbing mechanism that is unique to Cypress. On the other hand, cy.intercept is a more general-purpose interception mechanism that works similarly to the way stubs work in other tools. However,

> ### cy.intercept requires you to manually stub each request or response that you want to modify, while cy.route can automatically handle all requests that match the specified URL and HTTP method.

In summary, the main difference between cy.request, cy.route, and cy.intercept is their scope of interception.

> ### cy.request is used to make requests to external servers and handle responses.

> ### cy.route is used to intercept requests and replace them with a response of your choice,

> primarily for stubbing API requests during testing. Finally, cy.intercept is used to intercept requests or responses at the network level, allowing you to modify both requests and responses in more complex scenarios.

> #### When we use cy.intercept

> If you want to intercept network requests from an application running in the browser (for example, requests from your JavaScript code to an API).

If you want to modify requests or responses in some way during the test, for example, to change the response from a server to simulate an error condition.

If you need to test that your application handles certain network conditions or failures, such as slow or dropped connections.

In other cases, cy.route is usually the preferred choice. It is specifically designed for stubbing and testing API requests during testing and provides a simpler interface for many common use cases.

example on cy.route
In the example below, we use cy.route to control the response to a request.

First, we load a webpage with a form and a button.

Then, we define the expected HTTP request with cy.route(). We expect the HTTP request to have the method 'POST' and the URL '/submit-form'.

// load a webpage with a form and a button
cy.visit('https://example.com/form.html');

// define the expected HTTP request
cy.route('POST', '/submit-form').as('formSubmission');
Next, we submit the form using the cy.get() command.

// submit the form
cy.get('#submit-button').click();
Now, we can assert that the expected HTTP request was made with cy.wait().

// assert that the expected HTTP request was made
cy.wait('@formSubmission');
Lastly, we can use the cy.route() method to control the response to the request.

// define the expected HTTP request and control the response
cy.route({
method: 'POST',
url: '/submit-form',
response: { success: true }
}).as('formSubmission');

// submit the form
cy.get('#submit-button').click();

// assert that the expected HTTP request was made and the response was as expected
cy.wait('@formSubmission').then((xhr) => {
expect(xhr.response.body).to.have.property('success', true);
});
In this example, the HTTP request made when the form is submitted will be intercepted and controlled by the cy.route() method.
The method 'POST' and the URL '/submit-form' are used to match the request. The response will be controlled as well, returning a JSON object with the property 'success' set to true. The cy.wait() method is used to wait for the HTTP request to complete and then the response is asserted using the expect function.
