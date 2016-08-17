import { describe, it } from 'mocha';
import { expect } from 'chai';

import { passwordLengthValidator } from './password-length-validator';

describe('function passwordLengthValidator', () => {

  it('should validate passwords longer than 3', () =>
    expect(true).to.be.equal(passwordLengthValidator('1534')));

  it('should throw an error on invalid character', () => 
    expect(() => passwordLengthValidator('15.34')).to.throw(Error));

  it('should throw an error when password is not a string', () => 
    expect(() => passwordLengthValidator(1534)).to.throw(Error));

});


