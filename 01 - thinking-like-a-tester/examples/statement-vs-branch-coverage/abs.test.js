import { describe, it } from 'mocha';
import { expect } from 'chai';

import { abs } from './abs';

describe('function abs: ', () => {

  it('should abs a positive numbers', () => {
    const expected = 3;
    const actual = abs(3);

    expect(expected).to.be.equal(actual);
  });

  it('should abs a negative numbers', () => {
    const expected = 3;
    const actual = abs(-3);

    expect(expected).to.be.equal(actual);
  });

});


