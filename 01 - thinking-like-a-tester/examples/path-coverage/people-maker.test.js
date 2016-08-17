import { describe, it } from 'mocha';
import { expect } from 'chai';

import { peopleMaker } from './people-maker';

describe('function peopleMaker: ', function() {

  // this ensures statement coverage
  it('should be fat, old and short', () => {

    const expected = { 
      old: true, 
      fat: true, 
      short: true,
      coolFactor: 31
    };

    const actual = peopleMaker(100, 80, 155, 31);

    expect(actual).to.be.deep.equal(expected);

  });

  // this ensure branch coverage
  it('should NOT be fat, old and short', () => {

    const expected = { 
      old: false, 
      fat: false, 
      short: false,
      coolFactor: 31 
    };

    const actual = peopleMaker(18, 65, 190, 31);

    expect(actual).to.be.deep.equal(expected);

  });

  // now let's begin path coverage
  it('should be fat, old and short', () => {

    const expected = { 
      old: false, 
      fat: true, 
      short: true,
      coolFactor: 31
    };

    const actual = peopleMaker(24, 80, 155, 31);

    expect(actual).to.be.deep.equal(expected);

  });

});