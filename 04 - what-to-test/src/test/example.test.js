import { describe, it } from 'mocha';
import { expect } from 'chai';

import {
  getSortedFirstNames,
  getNamesThatStartWith,
  getAllUsernamesOfActivePeople,
  getAllUnassignedUsers
} from '../example';

const people = [
  {
    id: 'unassigned',
    enterpriseId: null,
    age: 33,
    name: { first: 'Evan', last: 'Schultz', username: 'eschultz' },
    active: true,
  },
  {
    id: '1234',
    enterpriseId: '1234',
    age: 33,
    name: {  first: 'Alex', last: 'Willson', username: 'awilson' },
    active: true,
  }
];

describe('test/example', () => {
  context('getSortedFirstNames', () => {
    const result = getSortedFirstNames(people);

    it('should return a list of first names', () => {
      expect(result.length).to.equal(2);
    });

    it('should return the list in alphabetical order', () => {
      expect(result[0]).to.equal('Alex');
    });
  });

  /**
   * Example of a test that does not test enough conditions
   *
   * - Additional test cases required
   * - Returns Alex because it checks using include instead of checking first
   *   index of the string
   * - No testing of the regex
   */
  context('getNamesThatStartWith', () => {
    it('should only return Alex when the input is A, and Alex and Eric are the first names of the inputs', () => {
      const result = getNamesThatStartWith('A', people);

      expect(result).to.eql(['Alex']);
    });
  });

  /**
   * Another test that barely touches any of the branches
   *
   * - Additional test cases required
   * - Need to ensure that an `active` user is correctly calculated
   */
  context('getAllUsernamesOfActivePeople', () => {
    it('should only return the active people', () => {
      const result = getAllUsernamesOfActivePeople(people);

      expect(result).to.eql(['awilson', 'eschultz']);
    });
  });

  /**
   * Another test that barely touches any of the branches
   *
   * - Additional test cases required
   */
  context('getAllUnassignedUsers', () => {
    it('should return all users that have the `id` of `unassigned`', () => {
      const result = getAllUnassignedUsers(people);

      expect(result).to.eql(['eschultz']);
    });
  });
});