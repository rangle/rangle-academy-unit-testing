import { describe, it } from 'mocha';
import { expect } from 'chai';

import { calculatePay }  from './pay-calculator';

describe('function calculatePay', function() {
  // Assume 8 hour work days
  // Assume time and a half pay on holidays

  it ('calculates the total pay given the num days worked at a given hourly wage', function() {
    const hourlyWage = 15;
    const numDaysWorked = 10;

    const expected = 1200;
    const actual = calculatePay(hourlyWage, numDaysWorked);
    expect(actual).to.equal(expected);
  });

  /* it ('bumps up the total pay if the employee worked on a holiday', function() {
   *   const hourlyWage = 12;
   *   const numDaysWorked = 10;
   *   const numHolidays = 1;
   *
   *   const expected = 1008;
   *   const actual = calculatePay(hourlyWage, numDaysWorked, numHolidays);
   *   expect(actual).to.equal(expected);
   * });*/

  /* it('returns zero if the number of days worked is not provided', function() {
   *   const hourlyWage = 45;

   *   const expected = 0;
   *   const actual = calculatePay(hourlyWage);
   *   expect(actual).to.equal(expected);
   * });*/

  /* it('returns Infinity if the hourly wage is Infinity', function() {
   *   const hourlyWage = Infinity;
   *   const numDaysWorked = 10;

   *   const expected = Infinity;
   *   const actual = calculatePay(hourlyWage, numDaysWorked);
   *   expect(actual).to.equal(expected);
   * });*/
});
