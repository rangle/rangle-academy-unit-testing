//let deviceHealth = ('./device-status.rule').deviceHealth;
import { deviceHealth } from './device-status.rule';
import { ruleConfig } from './device-status.config';


const runRule = ()=> {
  let cpuUsage = Math.floor(Math.random()*100,2);
  let result  = deviceHealth(ruleConfig,cpuUsage);
  console.log('Device Health is', result);
}
export const run = () => {
  const MAX_RUN = 500;
  let currentRun = 0;
  const runner = setInterval(()=>{
    try {
      runRule();
    } catch (e) {
      console.log('Error!')
    }
    currentRun++;
    if(currentRun >= MAX_RUN) {
      clearInterval(runner);
    }
  }, 1);
}
