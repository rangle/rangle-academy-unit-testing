import { deviceHealth } from './device-status.rule';
import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('the device status rule calculation', () => {
    const ruleConfig = {
        GOOD: {
            min: 0,
            max: 30
        },
        WARN: {
            min: 31,
            max: 60
        },
        CRITICAL: {
            min: 61,
            max: 100
        }
    };

    it('should return good if within range of the config', () => {
        let expectedLevel = 'GOOD';
        let actual = deviceHealth(ruleConfig, 25);
        expect(actual.level).to.be.equal(expectedLevel);
    });

    it('should return WARN if within the warning range', () => {
        let expectedLevel = 'WARN';
        let actual = deviceHealth(ruleConfig, 35);
        expect(actual.level).to.be.equal(expectedLevel);
    });

    it('should return CRITICAL if within the warning range', () => {
        let expectedLevel = 'CRITICAL';
        let actual = deviceHealth(ruleConfig, 65);
        expect(actual.level).to.be.equal(expectedLevel);
    });

});
