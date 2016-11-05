/**
 * Tasks:
 *
 * - Uncomment the second `response` and fix the code to work with it without
 *   breaking any test
 */

/**
 * Provided a userResponse object and a permissions object, will return
 * whether the provided user has all of the required permissions.
 *
 * {
 *   allRequired: [
 *     ['account', 'canUpdate'],
 *     ['account', 'canCreate'],
 *   ],
 *   notRequired: [
 *     ['server', 'canUpdate'],
 *     ['server', 'canCreate'],
 *   ],
 *   anyRequired: [
 *     ['users', 'canUpdate'],
 *     ['users', 'canCreate'],
 *   ],
 * }
 */
const rbacSelector = (userResponse, { allRequired, notRequired, anyRequired }) => {
  function checkValid(check, value) {
    const resource = check[0];
    const privilege = check[1];

    // Assume false until proven otherwise
    return userResponse.permissions[resource][privilege] === value;
  }

  const result = [
    allRequired ? allRequired.every(i => checkValid(i, true)) : true,
    anyRequired ? anyRequired.some(i => checkValid(i, true)) : true,
    notRequired ? notRequired.every(i => checkValid(i, false)) : true,
  ];

  return result.every(i => i === true);
};

export default rbacSelector;
