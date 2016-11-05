/**
 * Tasks:
 *
 * Step 0.
 * - Run the app (node run.js) to see the issue (NULL value)
 *
 * Step 1.
 * - Write the failing test
 * - Fix the code
 *
 * Step 2.
 * - Can we improve the code, make it more testable?
 * - What other tests could we perform against this code?
 */

export const deviceHealth = (value) => {
  const config = {
    GOOD: { min: 0, max: 30 },
    WARN: { min: 31, max: 60 },
    CRITICAL: { min: 61, max: 100 },
  };

  let level = 'NULL';

  if (value > config.GOOD.min && value < config.GOOD.max) {
    level = 'GOOD';
  } else if (value > config.WARN.min && value < config.WARN.max) {
    level = 'WARN';
  } else if (value > config.CRITICAL.min && value < config.CRITICAL.max) {
    level = 'CRITICAL';
  }

  return {
    ...config[level],
    level,
    value,
  };
};
