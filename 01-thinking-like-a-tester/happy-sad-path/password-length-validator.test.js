import { expect } from 'chai';

import { passwordLengthValidator } from './password-length-validator';

describe('happy / sad path', () => {
  context('function passwordLengthValidator', () => {

    // happy path
    it('should validate passwords longer than 3', () => {
      const input = '1534';

      expect(true).to.be.equal(passwordLengthValidator(input));
    });

    // happy path
    it('should throw an error on invalid character', () => {
      const input = '15.43';

      expect(() => passwordLengthValidator(input)).to.throw(Error);
    });

    // sad path
    it('should throw an error when password is not a string', () => {
      const input = 1534;

      expect(() => passwordLengthValidator(input)).to.throw(Error);
    });
  });
});