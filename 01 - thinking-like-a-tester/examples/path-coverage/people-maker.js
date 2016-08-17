export const peopleMaker = (age, weight, height, coolFactor) => {

  let person = { 
    old: false, 
    fat: false, 
    short: false,
    coolFactor
  };

  if (age > 25) {
    person =  { ...person, old: true }
  }

  if (weight > 70) {
    person =  { ...person, fat: true}
  }

  if (height < 180) {
    person =  { ...person, short: true, coolFactor }
  }

  return person;
}