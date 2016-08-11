# What to Test

## Implementation vs. Behavior

https://teamgaslight.com/blog/testing-behavior-vs-testing-implementation

### When I test for implementation, I’m saying:

> “I don’t care what the answer is, just make sure you do this thing while figuring it out.”

### When I test for behavior, I’m saying:

> “I don’t care how you come up with the answer, just make sure that the answer is correct under this set of circumstances”

- Importance of writing tests that allow us to be flexible and refactor
- When we get a new libaray that changes the implmentation of our code, we should not be breaking tests
- Tests should focus on testing your code's public API
- Your code's implementation details shouldn't need to be exposed to tests.

For example:

http://googletesting.blogspot.ca/2013/08/testing-on-toilet-test-behavior-not.html

- We've created a calculator app
- Along comes a new library that speeds up our calculations by 1,000,000 times
- We should not have to change our test for:
  - `addition`
  - `subtraction`

- Tests that are independent of implementation details are easier to maintain
  - Don't need to change every time the code is modified
  - Easier to understand since they act as code samples
  - Someone not familar with the code should be able to read unit tests and have a rough understanding of the code

- Where you want to test implementation details
  - Some specific detail that requires testing, e.g. reading from a cache rather than a datastore
  - Should be less common

## Difficult Code vs. Straightforward Code

- Often times we find we are rushed to deliver features
- Code testing is one of the first things to get thrown out the window
- When we are thinking about what is critical to test, we should concern ourselves with narly pieces of code
- Straight forward functions, e.g.

```
function add(a, b) {
  return a + b;
}
```

- Likely doesn't need to be tested, we can be pretty damn confident that this function will work
- But when code is difficult to read and overly complex, we should focus on testing
- Not only to ensure our code works as expected, but also to provide documentation for stickier parts of the application
- It will also ensure that we are writing the cleanest code possible, because if code isn't testable, then its likely overly complex

## Test Coverage

http://martinfowler.com/bliki/TestCoverage.html

- The basic idea of test coverage is to check how much of your code is covered by tests
- A very simple concept, but the idea can be abused
- When asked to hit a certain threshold, developers will attempt to hit it
  - But what it means is that they likely won't have quality tests
  - A high coverage % does not mean you have great tests
  - It is a good idea to have a minimum metric in order to make sure tests are being written
- At the least we should focus on branch coverage
  - Testing control flow within our functions
  - When these metrics start to produce warnings, we should concern ourselves with our testing
  - Branch coverage not a silver bullet, it is possible to test all branches, but without quality tests

File        |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
------------|----------|----------|----------|----------|----------------|
All files   |    85.42 |    66.67 |      100 |    85.11 |                |
 example.js |    85.42 |    66.67 |      100 |    85.11 |... ,98,125,129 |