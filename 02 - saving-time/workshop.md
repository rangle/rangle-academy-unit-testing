# Saving Time (tbd duration)

*Goal:* To reinforce the idea that unit testing is part of testing, and if done properly can save time instead of adding more time to completing a feature or fixing a bug.
*Why:* A reason often given by developers for not doing tests, is because it slows down their development.
*Secondary goal:* To demonstrate that unit tests can reduce the amount of time spent manual testing, and how it can be used to verify functionality that may be hard to verify in your development environment.
*How:* * Discussion + Hands on
*Materials:* * Git-book + exercise

## Scenario

You are working on a dashboard to monitor system health, and implementing a rule system to calculate the health of devices within the system.

The first rule is for health based on CPU usage, the product owner has provided the following details:

* the threshold will be configurable, but the current rules are:
  * if the CPU usage is between 0 and 30, then it has a status of GOOD
  * if the CPU usage is between 31 and 60, then it has a status of WARN
  * if the CPU usage is between 61 and 100, then it has a status of CRITICAL
* the current value of the CPU usage will be provided in realtime from an API
* the value is based on the CPU usage of the actual device, and is not something that we can control within the system

## The App

* run 'npm start fake-app', watch the output
* The application gets new values once every N seconds
* We don't have control over the values that the API returns, for example we can't force a CPU load of 64%
* The current calculation code is in `device-status.rule.js`,
* The current config based on the requirements is in `device-status.config.js`
* There are some basic unit tests in `device-status.test.js`

## Workshop

Possible options:

### TDD vs Manual

* Code has a bug, have a 'bug report' that at times simply 'Error' is output instead of the health, or - 'device is reporting good status when it should be in a warning level'
* Have people pick manual testing / fixing, vs TDD based fixing - see which one gets done faster?
* Looking at the output of the fake-app - can they figure out what the cause is
* Risk: source of bug might be obvious enough - although does lead to the 'how do you confirm?' question remaining.

### Manual Investigation TDD fixing

* Have students run the app, see if they can find a bug with the output
* re-create failing test case, TDD based fixing

### TDD Implementation

* Change the current code so so the rule is just always returning good
* Get them to do a TDD approach - start with the tests, then the implementation
* Idea: Get them to change the current tests to be more data-driven based on the provided config?
