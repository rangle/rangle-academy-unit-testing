export function timeOfDay(hours) {
  if (hours < 0 || hours > 24) {
    throw new Error();
  }

  if (hours >= 0 && hours < 6) {
    return "Night";
  }
  else if (hours >= 6 && hours < 12) {
    return "Morning";
  }
  else if (hours >= 12 && hours < 18) {
    return "Afternoon";
  }
  else {
    return "Evening";
  }
}