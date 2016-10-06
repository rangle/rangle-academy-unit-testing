# Effective Unit Testing
### Welcome

---

# Let's get started...

---

# Show of Hands..

### How many people write unit tests for their projects?

---

## Task 0 
#### 5 minutes

- Take a sticky note 
- Write a down one of the following: 
	- Why you don't write tests
	- What challenges / questions you have when it comes to unit testing

---

## Task 0: Review

#### Let's figure out what the top priorities are and let's try to solve them today

---

# Overview

- This lecture assumes you have basic knowledge of Mocha, Chai

---

# Introduction
## 10 mins

- We will cover...
	- What is a Unit Test?
	- Unit Test Requirements
	- Unit Test Structure
	- What Defines a Good Unit Test

---

# Introduction

---

## What is a Unit Test?

- Unit Tests: ensure system's components work in isolation
- Integration Tests: ensure system's components collaborate as expected
- Functional Tests: ensure system works from end user perspective

---

## What is a Unit Test?

- Unit test can be described as the smallest testable parts of an application

```
function getUsersWithFirstName(name, users) {
	return users.filter(i => i.firstName === name);
}
```


---

## Unit Test Requirements

- Independent - should not depend on other tests
- Repeatable - should not depend on the environment
- Readable - should document behaviour and provide a bug report
- Fast - should provide realtime developer feedback

---

## Unit Test Structure

- Arrange all necessary preconditions and inputs.
- Act on the object or method under test.
- Assert that the expected results have occurred.

###### http://c2.com/cgi/wiki?ArrangeActAssert


---

## Unit Test Structure

```
import { describe, it } from 'mocha';
import { expect } from 'chai';
import utils from 'utils';

describe('utils', () => {
  context('reverseString', () => {
    it('should reverse a string', () => {
	  const expected = 'cba'; // Arrange
   	  const actual = utils.reverseString('abc'); // Act
   	  
   	  expect(actual).to.equal(expected); // Assert
    });
  });
});
```

---

## A good unit test tells you...

- What are you testing?
- What should it do?
- What was the output (actual behavior)?
- What was the expected output (expected behavior)?

---

## Start by answering "What are you testing?"

```
describe('My new feature', () => { ... }));
```

^ Describe blocks are typically use for this part of the test, we can also use context here as well

---

## What should it do?

```
describe('My new feature', () => {
	it('should return the provided string, but in reverse', () => {
		...
	});
}));
```

---

## What was the input?

```
describe('My new feature', () => {
	it('should return the provided string, but in reverse', () => {
	  const expected = 'cba';
   	  const actual = utils.reverseString('abc');
	  ...
	});
}));
```

---

## What was the output?

```
describe('My new feature', () => {
	it('should return the provided string, but in reverse', () => {
	  const expected = 'cba';
   	  const actual = utils.reverseString('abc');
   	  
   	  expect(actual).to.equal(expected);
	});
}));
```

---

# A note on equal

- Equal answers two of the most important questions...
	- What is the actual output?
	- What is the expected output?
	
^ If you write a test that does not answer both of those questions, you don't have a solid unit test
We prefer equal because it is dead simple, and will result in readable, documented test cases

---

# Any questions so far?

---

# Thinking Like a Tester

---

# Thinking Like a Tester
## 10mins

- Thinking Like a Tester
	- Approaches to Writing Unit Test Cases
	- General Techniques
		- Normal Conditions
		- Unexpected Conditions	
	- Test Coverage
	- Statement vs. Branch vs. Path Coverage
	- Behavior vs. Implementation
	
---

# Thinking Like a Tester

### Approaches to Writing Unit Test Cases

---

## Testing Strategies

---

## Testing Normal Conditions

#### Happy Path

---

### Expected Inputs

```
    it('should reverse a string', () => {
	  const input = 'abc';
	
   	  const result = utils.reverseString(input);
   	  
   	  expect(result).to.equal('cba');
    });
```

---

## Testing Unexpected Conditions

#### Sad Path

---

### Bad Inputs

```
    it('should reverse a string', () => {
	  const input = null;
	
   	  const result = utils.reverseString(input);
   	  
   	  expect(result).to.equal(???);
    });
```

^ Testing bad inputs help us..
- When an unexpected input is thrown at our function
- Testing against nulls, undefined, expectation of inputs (e.g. array vs. object)

---

### Boundary Values

```
    it('should allow a number between 0 - 9', () => {
	  const input = 0;
   	  const result = onChange(input);
   	  
   	  expect(result).to.equal(0);
    });
    
    it('should not allow a number less than 0', () => {
	  const input = -1; // Below boundary value
	  	  
   	  expect(onChange(input)).to.throw('Invalid Number');
    });
    
    it('should not allow a number greater than 9', () => {
	  const input = 10; // Above boundary value
	  	  
   	  expect(onChange(input)).to.throw('Invalid Number');
    });
```

^ Boundary testing helps us...
- Identify gaps in the requirements
- Provide coverage for conditional statements (if else)
- Prevent common mistakes such as using the wrong comparison operator (<= vs. <)

---

# Test Coverage

---

## Statement vs. Path vs. Branch Coverage

---

### Statement Coverage

```
function returnInput(input, condition1, condition2, condition3) {
  var x = input;
  var y = 0;

  if (condition1) { x++; }
  if (condition2) { x--; }
  if (condition3) { y = x; }
  
  return y;
}

returnInput(10, true, true, true); // Results in 100% coverage
```

^ We only need to use one test case to execute each line of code. The problem with this is that only 50% of the branches are touched.

---

### Branch Coverage

```
export function abs(n) {
  let result = n;

  if (n < 0) {
    result = -n;
  }

  return result;
}
```

^ With branch coverage, we are testing both true and false branches.
We would have a test that both goes in the if case, and avoids it

---

### Path Coverage

![inline](http://1.bp.blogspot.com/-ETEsyGN6VkQ/Ub4P9loi08I/AAAAAAAANlg/ateynj-eqso/s1600/CodeCoverage.bmp)

```
function returnInput(input, condition1, condition2, condition3) {
  var x = input;
  var y = 0;

  if (condition1) { x++; }
  if (condition2) { x--; }
  if (condition3) { y = x; }
  
  return y;
}

```

^ If we imagine our function as a binary tree, made up of if / else, the previous example results in several different paths

---

### Test Coverage

```
npm run coverage
```

```
-------------------------------|----------|----------|----------|----------|----------------|
File                           |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
-------------------------------|----------|----------|----------|----------|----------------|
All files                      |    83.87 |    86.67 |       80 |    83.87 |                |
 boundary-value                |      100 |      100 |      100 |      100 |                |
  time-of-day.js               |      100 |      100 |      100 |      100 |                |
 exercise                      |        0 |        0 |        0 |        0 |                |
  wage-calculator.js           |        0 |        0 |        0 |        0 |      2,3,4,6,8 |
 happy-sad-path                |      100 |      100 |      100 |      100 |                |
  password-length-validator.js |      100 |      100 |      100 |      100 |                |
 path-coverage                 |      100 |      100 |      100 |      100 |                |
  people-maker.js              |      100 |      100 |      100 |      100 |                |
 statement-vs-branch-coverage  |      100 |      100 |      100 |      100 |                |
  abs.js                       |      100 |      100 |      100 |      100 |                |
-------------------------------|----------|----------|----------|----------|----------------|
```

---

### Coverage Overview

- High % of Coverage != High Quality Tests
- Use them to note possible areas where tests are missing

^ Statements being high while branches being low is a bad sign

---

# Any questions?

---

## Task 1: Review (15mins)

- Open `/unit-testing-workshop/exercises/01-thinking-like-a-tester`
- `npm run tdd:01`
- Write the required tests to test for:
	- Expected inputs
	- Unexpected inputs (bad inputs and boundaries)
	- Try to accomplish a high coverage (`npm run coverage`)

---

## Task 1: Review

^ Do we understand the different types of testing? Do we understand the different approaches and tools we have?

---

# Unit Tests Can Save Time

---

## Reasons for Not Testing

- Too much time / effort
- Always breaking, causing more time lost

^ While some of these arguments are valid, I would argue that good unit tests save time

---

## We Save Time By...

- Less likely to deliver a feature that contains bugs
	- Which means less time in a QA cycle (deliver -> bug found -> reject -> fix -> deliver...)
- If we can reduce manual testing, we are reducing time
- Unit tests help verify fixes
- Unit tests allow us to mock complex errors and debug them

^ Imagine we are provided a bug report that contains only a response from a server that causes a crash, there is no easy way to debug this in the app

---

## Consider the time it takes to..

- Load the application
- Login
- Navigate to the screen
- Enter in the details causing an issue
- Verify it works
- Requiring any additional data
- Re-verify all existing test cases work

^ This is fine, but it consumes more time than just putting a mock into our test suite that causes the error and debugging from there

---

## Scenario

- Imagine we need to implement a feature which will show / hide items based on the permissions a user has
- It is determined that we need to fulfill the following requirements:
	- allRequired: The user has all of these permissions
	- anyRequired: The user has at least one of these permissions
	- notRequired: The user cannot have any of these permissions
- The problem is that we do not have a working API
- However we do have a response, but it is likely to change

---

## Task 2: Changing APIs (20mins)

- Open `/unit-testing-workshop/exercises/02-saving-time-mock-api`
- `npm run tdd:02`
- Step 1. Write the required tests to test for the selector
- Step 2. Uncomment new response and modify the code to ensure your tests are passing

---

## Task 2: Review

^ Do we understand how unit testing can save us time? How would we have done that without having a solid test suite? Imagine the time it would take to do that in QA, creating each user and testing it out

---

## Scenario

- We've received some code from our other team that has no tests
- Its been reported that it sometimes is reporting a `NULL` status, which is no good

---

## Task 3: Slaying Bugs (20mins)

- Open `/unit-testing-workshop/exercises/03-saving-time-no-tests`
- `node run.js` 
- `npm run tdd:03`
- Step 1. Without modifying the code
	- Write the tests required to test the feature
	- Write the failing test
- Step 2. Fix the code

---

## Task 3: Review

^ See how unit testing upfront would have found this issue immediately? Look how simple the output is, imagine if they was from an API and only occuring sometimes. Unit tests allow us to mock issues and pinpoint errors quickly

---

# Any questions?

---

# Tests for Better Code

---

## Tests for Better Code

- Writing tests isnt just 'writing tests for code'
- Writing tests forces us to write _testable code_

---

## Good unit tests means..

- Easy to refactor later on
- Code is likely easy to reason about
- Documentation for the future

^ Documentation is really imporant, your code might not be extensively commented, but a good test suite allows a new develop to come in, understand what is happening, and make changes without breaking things

---

## Task 4: Refactoring

- Open `/unit-testing-workshop/exercises/04-tests-for-better-code`
- `node run.js` 
- `npm run tdd:04`
- 1. How would you write the following tests with the existing AlbumService?
- 2. How can we adjust the API of AlbumService to make it easier to write these tests?
- 3. Write the tests with the adjusted API
- 4. Refactor the code while keeping the tests the same.

---

## Task 4: Review

^ Do we understand how tests make our code better? By enforcing testable code, avoiding hacks, etc.

---

# What to Test

---

## Behavior vs. Implementation

---

## When I test for behavior, I’m saying:
#### “I don’t care how you come up with the answer, just make sure that the answer is correct under this set of circumstances”

---

## When I test for implementation, I’m saying:
#### “I don’t care what the answer is, just make sure you do this thing while figuring it out.”

---

## Behavior vs. Implementation

- Good tests will assert the result of the function, not what / how it gets that result
- We want flexible tests, not rigid tests
- Changing the implementation details should not break tests

^ For example, we've created a calculator app that uses a library to make calculations, changing out the library for a faster calculator library should not result in a change in the add function

---

## Behavior vs. Implementation

- Tests that are independent of implementation details are easier to maintain
- Don't need to change every time the code is modified
- Easier to understand since they act as code samples
- Someone not familar with the code should be able to read unit tests and have a rough understanding of the code

---

## Behavior vs. Implementation

- Where you want to test implementation details: 
- Some specific detail that requires testing, e.g. reading from a cache rather than a datastore
Should be less common

---

## Difficult Code vs. Straightforward Code

- Often times we find we are rushed to deliver features
- Code testing is one of the first things to get thrown out the window
- When we are thinking about what is critical to test, we should concern ourselves with narly pieces of code

---

## Difficult Code vs. Straightforward Code

```
function getName(obj) {
  return obj.name;
}
```

- Likely doesn't need to be tested, we can be pretty damn confident that this function will work

---

## Difficult Code vs. Straightforward Code

```
function getFirstNamesThatStartWith(people, letter) {
	return people
		.filter(i => i.getIn(['details', 'firstName']).indexOf(letter) !== -1)
		.map(i => i.getIn(['details']));
}
```

- Not extremely difficult, but has several places for the code to fail
- If code isn't testable, then its likely overly complex

---

# Any questions?

---

# Thank you

---