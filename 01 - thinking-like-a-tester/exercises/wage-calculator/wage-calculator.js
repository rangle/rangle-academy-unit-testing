export function calculateWage(startTime, endTime, hourlyWage) {
  const ms = endTime.getTime() - startTime.getTime();
  const hours = ms / (60 * 60 * 1000);
  const day = startTime.getDay();

  const bonus = (day === 6 || day === 0 ) ? 1.5 : 1;

  return (hourlyWage * hours * bonus).toFixed(2);
}

