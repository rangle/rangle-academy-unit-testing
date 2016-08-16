(rough notes)

* A common reason given to why unit tests fall behind or don't get done, is because they take too much time to get done.
* However, if done properly - they can save you time
* Your code needs to get tested - before submitting a PR - dev's should be testing their own work anyways
* Writing and maintaining unit tests can be considered as part of the time you spend testing
* If you can automate part of your testing to reduce the time spent on manual testing, this is helping you save time
* Unit tests can help verify that fixes / new features do not break old ones
* Unit tests can also help setup failing conditions for bugs - and help ensure that they do get fixed
* Things for people to consider, for example a complex form
  * Time to load the app
  * Login
  * Navigate to the screen
  * Enter in the details
  * Verify it works
  * Potential need to setup the data needed (ie: creating other records/etc)
  * re-verify existing use cases still work

Exercise Ideas:

* Selectors : change the shape of the state, ensure the resulting data is the same
* SMC-UI idea: mock data - use to drive access control, data from API changes shape
* have something with a bug, and a 'bug report' - have existing tests, get test to reproduce bug (failing test), then implement code to fix the bug - ensure other tests keep passing

* 'ACL' scenario:

- You are discussing an upcoming feature/requirement where certain permissions in the system need to be driven from an object provided by the server
- You discuss with the backend team what this object might look like - however, it may be a few sprints until the API is ready
- You agree to contract X
- You build the features expecting that/a mock of that
- Once the API is ready - the result is slightly different

How tests can save time:

* Instead of waiting for the backend team to be ready to provide the API, we can mock the expected data
* We are able to deliver the feature sooner (within reason)
* the code that returns true/false for 'do I have access' - is taking in the JSON object
* There are many possible cases - each one can be hard to setup in a 'real' environment (ie: we don't have access to the user permissions to tweak each iteration of permissions)
* If the JSON structure changes - we need to be able to map/transform it to our expected.


example object:

```js
let permissionResponse = {
  userName: 'evan@rangle.io',
  userId: 'someRandomId',
  permissions: {
    user: {
      canUpdate: true,
      canCreate: false,
      canView: true,
      canDelete: false,
      canActivate: true
    },
    productRecord: {
      canUpdate: false,
      canCreate: false,
      canView: true
    },

  }
}
```
.... TBC
---

State Refactoring:

* Your application state is currently not normalized, and looks something like:

```js
let someState = {
  posts: [{
    author: { userId: 1, name: 'Evan Schultz' },
    title: 'How to Refactor Your State Safely',
    content: 'Lipsorum',
    comments: [{
      postId: 1
      parentId: 1,
      parentComment: null,
      user: { userId: 2, name: 'Igor' },
      comment: 'Lipsorum'
      date: 'someDate'
    },
    {
      postId: 1,
      commentId: 2,
      parentId: 1,
      user: { userId: 3, name: 'Neil'},
      comment: 'Lipsorum',
      date: 'someDate'
  }]
  }]
}
```

You make changes to your state so it looks like

```js
let newState = {
  users: [{ userId: 1, name: 'Evan Schultz'},
          { userId: 2, name: 'Igor'},
          { userId: 3, name: 'Neil'}],
  posts: [{
    authorId: 1,
    comments: [1,2],
    content: 'SomeContent',
  }],
  comments: [{
    postId: 1,
    commentId: 1,
    parentId: null,
    comment: 'Lipsorum',
    userId: 2,
    date: 'someDate'
  }, {
      postId: 1,
      commentId: 2,
      parentId: 1,
      userId: 3
      comment: 'Lipsorum',
      date: 'someDate'
  }]
}
```

You had a selector of something like ...(maybe a few selectors)

```js
let getAllCommentsByUser = (state, userId) => {
let comments =  state.posts
                     .map(n=>n.comments)
                     .map(n=>n.filter(x=>x.userId === userId));

  return [].concat.apply([],comments)
}
```

Refactor selectors while keeping the tests passing. Existing tests can be something like

```js
import { getAllCommentsByUser } from './some/spot';
describe('get all comments by user', ()=>{
  it('should only include posts for the provided user id', () => {
    const state = { /* .... */ };
    const result = getAllCommentsByUser(state,2);
    const expectedResult = [{
      postId: 1,
      commentId: 1,
      parentId: null,
      comment: 'Stuff',
      userName: 'Igor'
    }]
  })

})
```

Other ideas:
  * get top X posts / top X comments (if ratings),
  * get top X posts/comments by date (date / month / year)
  * get most / least commented on post
  * get user with most posts
  * get user with most comments
  * etc
  * things that can be hard to verify with real data if the environment you have may not always have what is needed

* test idea - given X set of rules and data from a sever, need to return a validation rules
* ie: 'system health rules', if between N1-N2, N2-N3, N3-N4 then return good/critical/x
* relying on manual testing: may not be able to recreate the data needed to hit each one

- as a system admin, I would like to know which devices have a critical load
- if CPU usage is between 0-30 - then good
- if CPU usage is between 30-60 - then warning
- if CPU usage is between 60 - 100 - then critical
- these values may be configurable

```js

let config = {
  GOOD: { min: 0, max: 30},
  WARN: { min 30, max: 60},
  CRITICAL: { min: 60, max: 100}
}
let rule = (config, value) => {
  if(value > config.GOOD.min && value < config.GOOD.max) { return 'good '}
  if(value > config.WARN.min && value < config.WARN.max) { return 'warn '}
  if(value > config.CRITICAL.min && value < config.CRITICAL.max) { return 'critical '}
}

setInterval(()=>{
  let result = rule(config,Math.random()*10);
  console.log(result);
},1000)
describe('the device load health metric',()=> {
  it('should return good, CPU usage is within the good threshold',() => {

  })

  it('should return warning if CPU usage is within the threshold',()=> {

  })

  it('should return warning if CPU usage is within the threshold',()=> {

  })

})

```
