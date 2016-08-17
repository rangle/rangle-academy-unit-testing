import { describe, it } from 'mocha';
import { expect } from 'chai';

import { timeOfDay } from './time-of-day';

describe('function timeOfDay: ', function() {

  it('should be Night between the hours of 0 and 6', function () {

    const expected = 'Night';
    const actual = timeOfDay(3);

    expect(actual).to.be.equal(expected);

  });

  it('should be Morning between the hours of 6 and 12', function () {

    const expected = 'Morning';
    const actual = timeOfDay(11);

    expect(actual).to.be.equal(expected);

  });

  it('should be Afternoon between the hours of 12 and 18', function () {

    const expected = 'Afternoon';
    const actual = timeOfDay(13);

    expect(actual).to.be.equal(expected);

  });

  it('should be Evening after 18', function () {

    const expected = 'Evening';
    const actual = timeOfDay(22);

    expect(actual).to.be.equal(expected);

  });

  it('should throw an error if less than 0', function () {

    expect(() => timeOfDay(-1)).to.throw(Error);

  });

  it('should throw an error if above than 24', function () {

    expect(() => timeOfDay(25)).to.throw(Error);

  });
});