export const passwordLengthValidator = password => {
  
  if (password.indexOf('.') !== -1) {
    throw new Error('Bad Password');
  }

  return password.length > 3;
}