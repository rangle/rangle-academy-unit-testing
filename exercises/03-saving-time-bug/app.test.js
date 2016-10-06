import { describe, it } from 'mocha';
import { expect } from 'chai';
import { deviceHealth } from './app';

describe('deviceHealth', () => {
  const config = {
    GOOD: { min: 0, max: 30 },
    WARN: { min: 31, max: 60 },
    CRITICAL: { min: 61, max: 100 },
  };

  it('should return GOOD if the device is in a good state', () => {
    const expected = 'GOOD';
    const actual = deviceHealth(config, 29).level;

    expect(actual).to.equal(expected);
  });

  it('should return WARN if the device is in a warning state', () => {
    const expected = 'WARN';
    const actual = deviceHealth(config, 32).level;

    expect(actual).to.equal(expected);
  });

  it('should return CRITICAL if the device is in a critical state', () => {
    const expected = 'CRITICAL';
    const actual = deviceHealth(config, 62).level;

    expect(actual).to.equal(expected);
  });
});