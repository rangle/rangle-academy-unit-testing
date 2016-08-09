import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('Does it work', () => {

  it('runs',
    () => expect(this).to.exist);

  it('2 + 2 = 4',
    () => expect(2 + 2).to.equal(5));

});