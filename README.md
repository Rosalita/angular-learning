# angular-learning
learning Angular for fun and profit

# Creating a new Angular app
- install Angular CLI `npm install -g @angular/cli`
- `ng new myapp`


# Unit Testing in Angular
Unit testing is testing a component in isolation without its template, filesystem, database.
If it uses a service, we give it a fake service.
If the component is using a router, we give it a fake router.

# Integration Testing in Angular
Integration testing in Angular is testing a component with external resources (e.g. filesystem, database, API Endpoints)
Integration tests test the component and its template together.
If the component is using a service, we want to give it a fake service.

# End to End Testing in Angular
End to end testing tests the entire application as a whole.
Simulates a real user, e.g. logs in and clicks buttons in a browser.
These tests are very slow and very fragile.

Most of the time want to be writing unit and integration tests with only a very small amount of end to end tests.

# Unit Testing Best Practice
Write small functions and methods, ideally < 10 lines of code.
Name everything properly.
Each test should have a single responsibility.

Unit test files are named similarly to the file they test 
e.g. compute.ts should have tests that live in compute.spec.ts
This is the pattern that Karma the test runner uses.
Jasmine is used as the testing framework for Angular which provides the functions used to write tests.
The two functions used most of the time are describe() and it()

describe() is used to define a suite which is a group of related tests.
It takes a name and a function that the test runner will call.
The describe function contains calls to it()

it() is used to define a spec or a test.
It takes a name and a function that will be called as part of the suite.

The expect() function that comes with Jasmine is used to make assertions.


