# Thinking Like a Tester

## Introduction

### Automated Tests and Continious Delivery

* __Unit Tests: ensure system's components work in isolation__
* Integration Tests: ensure system's components collaborate as expected
* Functional Tests: ensure system works from end user perspective

### Unit Test Requirements

* Independent - should not depend on __other tests__
* Repeatable - should not depend on the __environment__
* Readable - should document __behaviour__ and provide a __bug report__
* Fast - should provide __realtime developer feedback__

### Unit Test Structure

1. __Arrange__ all the __preconditions__ and __inputs__
2. __Act__ on a __component under test__
3. __Assert__ that __expected matches__ the __actual__ outcome

## Approaches to Writing Unit Test Cases 

### General Techniques

* Testing Normal Conditions
* Testing Unexpected Conditions
  * Bad Inputs
  * Boundary Values
  * Bugs
* Testing Behaviour
* Equivalence Partitioning
* Statement vs Branch vs Path Coverage






