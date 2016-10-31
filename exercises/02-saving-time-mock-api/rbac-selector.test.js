import { expect } from 'chai';

import rbacSelector from './rbac-selector';

describe('02-saving-time', () => {
  context('rbacSelector: ', function() {
    // Comment out this response below

    const response = {
      userId: 'xxx',
      userName: 'someUser',
      permissions: {
        expense: {
          canUpdate : true,
          canCreate : false,
          canDelete: true,
          canApprove: true
        },
        account: {
          canUpdate : true,
          canCreate : false,
          canDelete: true,
        },
        expenseLine: {
          canUpdate : true,
          canCreate : false,
          canDelete: true,
          canApprove: true
        }
      }
    };
    
    // Uncomment out this response below
    
    // const response = {
    //   userId: 'xxx',
    //   userName: 'someUser',
    //   expense: {
    //     permissions: {
    //       canUpdate : true,
    //       canCreate : false,
    //       canDelete: true,
    //       canApprove: true
    //     },
    //   },
    //   account: {
    //     permissions: {
    //       canUpdate : true,
    //       canCreate : false,
    //       canDelete: true,
    //     },
    //   },
    //   expenseLine: {
    //     permissions: {
    //       canUpdate : true,
    //       canCreate : false,
    //       canDelete: true,
    //       canApprove: true
    //     },
    //   },
    // };

    context('allRequired', () => {
      it('should return true if the user has all of the allRequired permissions', () => {
        const expected = true;
        const actual = rbacSelector(response, {
          allRequired: [
            ['expense', 'canUpdate'],
            ['account', 'canUpdate'],
            ['expenseLine', 'canUpdate'],
          ],
        });

        expect(expected).to.equal(actual);
      });

      it('should return false if the user does not have all of the allRequired permissions', () => {
        const expected = false;
        const actual = rbacSelector(response, {
          allRequired: [
            ['expense', 'canCreate'],
            ['account', 'canCreate'],
            ['expenseLine', 'canCreate'],
          ],
        });

        expect(expected).to.equal(actual);
      });
    });

    context('notRequired', () => {
      it('should return true if the user DOES NOT have all of the notRequired permissions', () => {
        const expected = true;
        const actual = rbacSelector(response, {
          notRequired: [
            ['expense', 'canCreate'],
            ['account', 'canCreate'],
            ['expenseLine', 'canCreate'],
          ],
        });

        expect(expected).to.equal(actual);
      });

      it('should return false if the user DOES have any of the notRequired permissions', () => {
        const expected = false;
        const actual = rbacSelector(response, {
          notRequired: [
            ['expense', 'canUpdate'],
            ['account', 'canCreate'],
            ['expenseLine', 'canCreate'],
          ],
        });

        expect(expected).to.equal(actual);
      });
    });

    context('anyRequired', () => {
      it('should return true if the user DOES have any of the anyRequired permissions', () => {
        const expected = true;
        const actual = rbacSelector(response, {
          anyRequired: [
            ['expense', 'canUpdate'],
            ['account', 'canCreate'],
            ['expenseLine', 'canCreate'],
          ],
        });

        expect(expected).to.equal(actual);
      });

      it('should return false if the user DOES NOT have any of the anyRequired permissions', () => {
        const expected = false;
        const actual = rbacSelector(response, {
          anyRequired: [
            ['expense', 'canCreate'],
            ['account', 'canCreate'],
            ['expenseLine', 'canCreate'],
          ],
        });

        expect(expected).to.equal(actual);
      });
    });
  });
});
