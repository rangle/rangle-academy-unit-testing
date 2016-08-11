/**
 * What to Test?
 *  - Touch on Coverage
 *  - Tie tests to behavior, not implementation
 *  - If coverage shows things not being hit - either behavior not being expressed properly
 *  - or code is too complex
 *  - Some things can be very obvious, ie const add = (a,b) => a+b - can probably not test
 *  - Distinction between 'public' and 'private' Thinking of something like: (could use a more complex example)
 *
 * TODO:
 * - Add test with complex branches`
 * - Add test that relies heavily on mock data, too rigid
 * - Add test with implementation detail that should be tested
 */

/**
 * Example of something that is private and likely doesn't need testing
 *
 * - Can use improvement, assumes an object that might not always be there
 */
const getName = (person) => {
  return person.name;
}

/**
 * Example of something private
 *
 * - Let's refactor this without breaking tests
 * - Rewrite using Array.map
 */
const getNames = (people) => {
  let names = [];

  for(var x = 0; x < people.length; x++) {
    names.push(getName(people[x]))
  }

  return names;
}

/**
 * Example of something public
 *
 * - Let's refactor this without breaking tests
 * - Rewrite using Array.map
 */
const getFirstNames = (names) => {
  let firstNames = [];

  for(var x = 0; x < names.length; x++) {
    firstNames.push(names[x].first)
  }

  return firstNames;
}

/**
 * Example of a public member
 */
export const getSortedFirstNames = (people) => {
  const names = getNames(people);
  const firstNames = getFirstNames(names);

  return firstNames.sort();
}

/**
 * Simple example of a code with a branch, and a bug in the implementation
 */
export const getNamesThatStartWith = (letter, people) => {
  if (!/^[a-zA-Z0-9]+$/.test(letter)) {
    throw new Error('A letter was not provided to the function getNamesThatStartWith');
  }

  const names = getSortedFirstNames(people);

  return names.filter(i => i.includes(letter));
}

/**
 * More complex example with branches that should be tested in order to be
 * confident we are getting the right result
 */
export const getAllUsernamesOfActivePeople = (people) => {
  return people
    .filter(i => {
      if (i.active == null) {
        if (i.activity > 0) {
          return true;
        }

        return false;
      }

      return i.active === true;
    })
    .map(i => {
      if (!i.name.username) {
        return 'Unknown User';
      }

      return i.name.username;
    })
    .sort();
}

/**
 * More complex branching example
 *
 * - Can we simplify this code and test all expectations?
 * - Break down some of these validations into smaller functions
 * - Some can be private, some can be public
 */
export const getAllUnassignedUsers = (people) => {
  return people.filter(i => {
    let unassigned = null;
    let readOnly = null;

    if (i.id === 'unassigned') {
      unassigned = true;
    } else {
      unassigned = false;
    }

    if (i.name.first === 'superuser') {
      readOnly = false;
    } else if (i.enterpriseId === null || typeof i.enterpriseId === 'undefined' || i.enterpriseId === '') {
      readOnly = true;
    } else if (i.readyOnly === true) {
      readOnly = true;
    } else {
      readOnly = false;
    }

    return unassigned && readOnly;
  })
  .map(i => i.name.username);
}
