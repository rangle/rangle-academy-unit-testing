import { expect } from 'chai';

import rbacSelector from './rbac-selector';

describe('02-saving-time', () => {
  context('rbacSelector: ', function() {
    const oldResponse = {
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

    // const newResponse = {
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
      // ...
    });

    context('notRequired', () => {
      // ...
    });

    context('anyRequired', () => {
      // ...
    });
  });
});
