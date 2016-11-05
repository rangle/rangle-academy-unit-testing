require('babel-register');

const { deviceHealth } = require('./app');

const runRule = () => {
  let cpuUsage = Math.floor(Math.random() * 100, 2);
  let result  = deviceHealth(cpuUsage);

  console.log('Device Health is', result);
};

const run = () => {
  const MAX_RUN = 25;
  let currentRun = 0;

  const runner = setInterval(() => {
    try {
      runRule();
    } catch (e) {
      console.log('Error!');
    }

    currentRun++;

    if (currentRun >= MAX_RUN) {
      clearInterval(runner);
    }
  }, 1);
};

run();
