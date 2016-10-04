import R from 'ramda';

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
    const resource = R.head(check);
    const privilege = R.tail(check);

    // Assume false until proven otherwise
    return R.pathOr(false, ['permissions', resource, privilege], userResponse) === value;
  }

  const result = [
    allRequired ? allRequired.every(i => checkValid(i, true)) : true,
    anyRequired ? anyRequired.some(i => checkValid(i, true)) : true,
    notRequired ? notRequired.every(i => checkValid(i, false)) : true,
  ];

  return result.every(i => i === true);
};

export default rbacSelector;