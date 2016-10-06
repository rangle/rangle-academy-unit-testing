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

export const deviceHealth = (config, value) => {
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
}

const runRule = () => {
  const defaultConfig = {
    GOOD: { min: 0, max: 30 },
    WARN: { min: 31, max: 60 },
    CRITICAL: { min: 61, max: 100 },
  };

  let cpuUsage = Math.floor(Math.random() * 100, 2);
  let result  = deviceHealth(defaultConfig, cpuUsage);

  console.log('Device Health is', result);
}

export const run = () => {
  const MAX_RUN = 25;
  let currentRun = 0;

  const runner = setInterval(() => {
    try {
      runRule();
    } catch (e) {
      console.log('Error!')
    }

    currentRun++;

    if (currentRun >= MAX_RUN) {
      clearInterval(runner);
    }
  }, 1);
}