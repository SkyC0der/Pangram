
const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
const isPangram = (input) => {
  const lowerCaseInput = input.toLowerCase();
  return alphabet.every(letter => lowerCaseInput.indexOf(letter) > -1);
};;
module.exports = isPangram;