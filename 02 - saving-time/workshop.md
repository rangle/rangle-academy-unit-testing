# Saving Time (tbd duration)

*Goal:* To reinforce the idea that unit testing is part of testing, and if done properly can save time instead of adding more time to completing a feature or fixing a bug.
*Why:* A reason often given by developers for not doing tests, is because it slows down their development.
*Secondary goal:* To demonstrate that unit tests can reduce the amount of time spent manual testing, and how it can be used to verify functionality that may be hard to verify in your development environment.
*How:* * Discussion + Hands on
*Materials:* * Git-book + exercise


* Fixing a bug broke a previously working feature
* Need to start building a feature when the back-end isn't ready
* The response from the back-end changes, and/or is different from what was initially communicated  
* Many potential use cases that may be hard to manually test


## Scenario 1

You are working on a dashboard to monitor system health, and implementing a rule system to calculate the health of devices within the system.

The first rule is for health based on CPU usage, the product owner has provided the following details:

* the threshold will be configurable, but the current rules are:
  * if the CPU usage is between 0 and 30, then it has a status of GOOD
  * if the CPU usage is between 31 and 60, then it has a status of WARN
  * if the CPU usage is between 61 and 100, then it has a status of CRITICAL
* the current value of the CPU usage will be provided in realtime from an API
* the value is based on the CPU usage of the actual device, and is not something that we can control within the system

### The App

* run 'npm start fake-app', watch the output
* The application gets new values once every N seconds
* We don't have control over the values that the API returns, for example we can't force a CPU load of 64%
* The current calculation code is in `device-status.rule.js`,
* The current config based on the requirements is in `device-status.config.js`
* There are some basic unit tests in `device-status.test.js`

### Activity / Hands On

Possible options:

#### TDD vs Manual

* Code has a bug, have a 'bug report' that at times simply 'Error' is output instead of the health, or - 'device is reporting good status when it should be in a warning level'
* Have people pick manual testing / fixing, vs TDD based fixing - see which one gets done faster?
* Looking at the output of the fake-app - can they figure out what the cause is
* Risk: source of bug might be obvious enough - although does lead to the 'how do you confirm?' question remaining.

#### Manual Investigation TDD fixing

* Have students run the app, see if they can find a bug with the output
* re-create failing test case, TDD based fixing

#### TDD Implementation

* Change the current code so so the rule is just always returning good
* Get them to do a TDD approach - start with the tests, then the implementation
* Idea: Get them to change the current tests to be more data-driven based on the provided config?


## Scenario 2

You are working on a feature that will need to hide / display items based on the permissions that the user has. Based on the requirements, it is determined that there is:

* allRequired - where a list of permissions are provided, and the user must have all of them
* anyRequired - where a list of permissions are provided, and a user must have at least one of them
* type: and/or - if 'and', allRequired and anyRequired must both evaluate to true, if 'or', either allRequired or anyRequired must be true, defaults to 'and'

The backend team is currently working on updating the API to return the permissions that the user has, but might not be ready yet. The ability to set permissions is handled by a SSO provider that we don't/may not have access to.

```js
let userResponse = {
  userId: 'xxx',
  userName: 'someUser',
  permissions: {
    expense: {
      canUpdate : true,
      canCreate : false,
      canDelete: true,
      canApprove: true
    },
    account: {
      canUpdate : true,
      canCreate : false,
      canDelete: true,
    },
    expenseLine: {
      canUpdate : true,
      canCreate : false,
      canDelete: true,
      canApprove: true
    }

  }
}
```

### Activity

* Do hands on / code for this, or simply talk to points / open discussion?

*Goal:*
  * To have students think about/identify the number of test cases
  * To think about the amount of time it would take to manually test each scenario
  * To think about the time-saved by being able to develop the core of a feature before the API is ready
  * To consider how to 'bridge the gap' between agreed upon API, and API once ready
  * To consider how long it would take to manually test things if the API changed, and there were no unit tests

Points to consider:

* Challenges of starting a feature when the API may not be there yet
* Once the API is there, the format may not match what was agreed upon
* Once the API is there, it may change over time
* We don't have control over setting the permissions ourselves
* Even if we did - need to consider the amount of manual testing for each combination

## Scenario 2.1

The feature is developed, and working as testing. We are able to show/hide elements on the screen by checking permissions. For example:

```html
<some-component *ngIf="hasPermission({allPermissions:['x','y','z']})"></some-component>
```

This is an application a SAS, where a system user can manage many clients. Some features should only be enabled/displayed if the current client that is being managed is a 'system' client. The backend team says that the response for the user object that defines permissions will contain a flag 'isSystemClient:true/false'.

In addition to the previously identified rules, there is a new `isSystemClient`, if true - the user must permission object must have an isSystemClient flag set to true + all other rules must still apply. If isSystemClient is set to false and/or not provided - it has no impact.

### Activity 

* Maybe just discussion?

*Goal:* To have students think about the the number of previous test cases/use cases of the initial feature. When working on the new requirement, would it be faster to manually test each scenario and ensure they are still passing, or - be able to rely on the unit tests?
