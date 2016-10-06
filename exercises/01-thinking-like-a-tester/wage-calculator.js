/**
 * Tasks:
 *
 * Step 1.
 * - Identify the happy & sad path
 * - Consider unexpected values we might encounter
 * - Write tests that provide 100% coverage
 *
 * Step 2.
 * - Can we improve the code?
 */

export function calculateWage(startTime, endTime, hourlyWage) {
  const ms = endTime.getTime() - startTime.getTime();
  const hours = ms / (60 * 60 * 1000);
  const day = startTime.getDay();

  const bonus = (day === 6 || day === 0 ) ? 1.5 : 1;

  return (hourlyWage * hours * bonus).toFixed(2);
}
