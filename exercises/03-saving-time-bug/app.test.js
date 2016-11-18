import { describe, it } from 'mocha';
import { expect } from 'chai';
import { deviceHealth } from './app';

describe('deviceHealth', () => {
  it('should return GOOD if the device is in a good state', () => {
    const expected = 'GOOD';
    const actual = deviceHealth(29).level;

    expect(actual).to.equal(expected);
  });

  it('should return WARN if the device is in a warning state', () => {
    const expected = 'WARN';
    const actual = deviceHealth(32).level;

    expect(actual).to.equal(expected);
  });

  it('should return CRITICAL if the device is in a critical state', () => {
    const expected = 'CRITICAL';
    const actual = deviceHealth(62).level;

    expect(actual).to.equal(expected);
  });
});
