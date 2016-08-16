
export const deviceHealth = (config, value) => {
  let level='GOOD';
  let { [level]: { min, max } } = config;

  if(value > config.GOOD.min && value < config.GOOD.max) { level = 'GOOD'}
  else if(value > config.WARN.min && value < config.WARN.max) { level = 'WARN'}
  else if(value > config.CRITICAL.min && value < config.CRITICAL.max) { level = 'CRITICAL'}

  ({ [level]: { min, max }  } = config);

  return { level, min , max , value }
}
